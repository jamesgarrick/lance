import { Command } from "@oclif/core";
import { defaultRegistry, readManifest } from "../lib/manifest";
import { registryFetch } from "../lib/registry-client";

interface SearchResponse {
  results: Array<{ name: string; latest: string; description?: string }>;
}

export default class Search extends Command {
  static override id = "search";
  static override description = "Search registry packages";

  async run(): Promise<void> {
    const query = this.argv[0];
    if (!query) this.error("Usage: lance search <query>");
    const manifest = await readManifest(process.cwd());
    const registry = defaultRegistry(manifest);
    const res = await registryFetch<SearchResponse>(registry, `/search?q=${encodeURIComponent(query)}`);
    for (const item of res.results) {
      this.log(`${item.name}@${item.latest}${item.description ? ` - ${item.description}` : ""}`);
    }
  }
}
