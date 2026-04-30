(() => {
  /**
   * Browser-console scraper for BIKI cfg list pages.
   *
   * Usage:
   * 1. Open a page like https://community.bistudio.com/wiki/Arma_3:_CfgWeapons_Equipment
   * 2. Paste this script into devtools console.
   * 3. A JSON download will start automatically.
   */

  const rows = document.querySelectorAll("table.wikitable tr");
  if (rows.length === 0) {
    throw new Error("No wikitable rows found on this page.");
  }

  const headerRow = rows[0];
  const headerCells = headerRow?.querySelectorAll("th") ?? [];
  const headerLabels = Array.from(headerCells, (cell) => cell.textContent?.trim().toLowerCase() ?? "");
  const classNameColumn = headerLabels.findIndex((label) => label === "classname" || label === "class");
  const nameColumn = headerLabels.findIndex((label) => label === "name");

  if (classNameColumn === -1) {
    throw new Error("Could not find a 'Classname' column in the first wikitable.");
  }

  /** @type {Record<string, unknown>} */
  const cfgData = {};

  /**
   * @param {string} className
   * @returns {string[]}
   */
  function normalizeParts(className) {
    return className
      .trim()
      .split("_")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  /**
   * @param {Record<string, unknown>} target
   * @param {string[]} path
   * @param {{ className: string, name?: string }} leaf
   */
  function assignPath(target, path, leaf) {
    let cursor = target;
    for (let i = 0; i < path.length - 1; i += 1) {
      const key = path[i];
      if (!(key in cursor)) {
        cursor[key] = {};
      }

      const next = cursor[key];
      if (typeof next !== "object" || next === null || Array.isArray(next)) {
        throw new Error(`Path collision while assigning ${leaf.className} at "${path.join(".")}"`);
      }
      cursor = /** @type {Record<string, unknown>} */ (next);
    }

    cursor[path[path.length - 1]] = leaf;
  }

  for (const row of Array.from(rows).slice(1)) {
    const cells = row.querySelectorAll("td");
    if (cells.length <= classNameColumn) continue;

    const className = cells[classNameColumn]?.textContent?.trim();
    if (!className) continue;

    const name = nameColumn >= 0 ? cells[nameColumn]?.textContent?.trim() || undefined : undefined;

    const parts = normalizeParts(className);
    if (parts.length < 2) continue;

    const prefix = parts[0].toLowerCase();
    const family = parts[1].toLowerCase();
    const variantParts = parts.slice(2);

    if (variantParts.at(-1)?.toUpperCase() === "F") {
      variantParts.pop();
    }

    const variant = variantParts.length > 0 ? variantParts.join("_").toLowerCase() : "base";
    assignPath(cfgData, [prefix, family, variant], { className, name });
  }

  const pageSlug = location.pathname.split("/").filter(Boolean).at(-1) ?? "cfg-data";
  const fileName = `${pageSlug.replace(/[^a-z0-9]+/gi, "_").toLowerCase()}.json`;
  const jsonOutput = JSON.stringify(cfgData, null, 2);

  console.log(cfgData);
  console.log(`Extracted ${Object.keys(cfgData).length} top-level prefixes from ${location.href}`);

  const blob = new Blob([jsonOutput], { type: "application/json" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
})();
