#!/usr/bin/env bash
set -euo pipefail

# Installs lance CLI from GitHub Pages tarballs produced by release-cli-autoupdate.
#
# Optional env:
#   LANCE_CLI_PAGES_BASE_URL (default: https://jamesgarrick.github.io/lance)

BASE_URL="${LANCE_CLI_PAGES_BASE_URL:-https://jamesgarrick.github.io/lance}"
INDEX_URL="${BASE_URL%/}/install-index.json"
INSTALL_ROOT="${HOME}/.lance"
BIN_DIR="${INSTALL_ROOT}/bin"
TMP_DIR="$(mktemp -d)"

cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

detect_target() {
  local os arch
  os="$(uname -s)"
  arch="$(uname -m)"
  case "$os" in
    Darwin)
      case "$arch" in
        arm64) echo "darwin-arm64" ;;
        x86_64) echo "darwin-x64" ;;
        *) echo "Unsupported macOS architecture: $arch" >&2; exit 1 ;;
      esac
      ;;
    Linux)
      case "$arch" in
        x86_64) echo "linux-x64" ;;
        aarch64|arm64) echo "linux-arm64" ;;
        *) echo "Unsupported Linux architecture: $arch" >&2; exit 1 ;;
      esac
      ;;
    MINGW*|MSYS*|CYGWIN*)
      case "$arch" in
        x86_64|amd64) echo "win32-x64" ;;
        *) echo "Unsupported Windows architecture: $arch" >&2; exit 1 ;;
      esac
      ;;
    *)
      echo "Unsupported OS: $os" >&2
      exit 1
      ;;
  esac
}

json_get_tarball() {
  local json_file target
  json_file="$1"
  target="$2"
  node -e "
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync(process.argv[1], 'utf8'));
    const name = data?.tarballs?.[process.argv[2]] ?? '';
    process.stdout.write(name);
  " "$json_file" "$target"
}

add_to_path() {
  local rc_file="$1"
  if [[ -f "$rc_file" ]] && grep -q 'export PATH="$HOME/.lance/bin:$PATH"' "$rc_file"; then
    return 0
  fi
  echo "" >> "$rc_file"
  echo '# lance cli bin' >> "$rc_file"
  echo 'export PATH="$HOME/.lance/bin:$PATH"' >> "$rc_file"
  echo "  Added ~/.lance/bin to PATH in $rc_file"
}

echo "Installing lance CLI from ${BASE_URL}..."

TARGET="$(detect_target)"
INDEX_FILE="${TMP_DIR}/install-index.json"

if ! curl -fsSL "$INDEX_URL" -o "$INDEX_FILE"; then
  echo "Failed to download ${INDEX_URL}" >&2
  echo "Remote installer index is unavailable (often a release-pipeline issue)." >&2
  echo "For local development, run: scripts/install-cli-local.sh" >&2
  exit 1
fi
TARBALL_NAME="$(json_get_tarball "$INDEX_FILE" "$TARGET")"

if [[ -z "$TARBALL_NAME" ]]; then
  echo "No tarball entry for target ${TARGET} in ${INDEX_URL}" >&2
  exit 1
fi

TARBALL_URL="${BASE_URL%/}/${TARBALL_NAME}"
ARCHIVE_FILE="${TMP_DIR}/lance.tar.gz"
EXTRACT_DIR="${TMP_DIR}/extract"
mkdir -p "$EXTRACT_DIR" "$BIN_DIR"

curl -fsSL "$TARBALL_URL" -o "$ARCHIVE_FILE"
tar -xzf "$ARCHIVE_FILE" -C "$EXTRACT_DIR"

CLI_BIN=""
if [[ -f "${EXTRACT_DIR}/bin/lance" ]]; then
  CLI_BIN="${EXTRACT_DIR}/bin/lance"
elif [[ -f "${EXTRACT_DIR}/bin/run" ]]; then
  CLI_BIN="${EXTRACT_DIR}/bin/run"
elif [[ -f "${EXTRACT_DIR}/bin/lance.exe" ]]; then
  CLI_BIN="${EXTRACT_DIR}/bin/lance.exe"
else
  echo "Could not find lance executable in downloaded archive ${TARBALL_NAME}" >&2
  find "$EXTRACT_DIR" -maxdepth 3 -type f | sed 's/^/  - /'
  exit 1
fi

cp "$CLI_BIN" "${BIN_DIR}/lance"
chmod +x "${BIN_DIR}/lance"

if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
  echo ""
  echo "~/.lance/bin is not in PATH — adding it..."
  case "${SHELL##*/}" in
    zsh)  add_to_path "$HOME/.zshrc" ;;
    bash) add_to_path "$HOME/.bashrc" ;;
    *)    add_to_path "$HOME/.profile" ;;
  esac
  echo ""
  echo "Reload your shell, then run:"
  case "${SHELL##*/}" in
    zsh)  echo "  source ~/.zshrc" ;;
    bash) echo "  source ~/.bashrc" ;;
    *)    echo "  source ~/.profile" ;;
  esac
  echo ""
fi

echo "Done. Run 'lance --help' to get started."
