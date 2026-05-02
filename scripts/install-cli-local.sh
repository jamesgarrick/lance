#!/usr/bin/env bash
set -euo pipefail

# Installs a local development launcher for lance CLI from this repository.
# This bypasses release tarballs and GitHub Pages.
#
# Usage:
#   scripts/install-cli-local.sh

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
CLI_ENTRY="${REPO_ROOT}/packages/cli/bin/dev.js"
CLI_TS_BUILD_CONFIG="${REPO_ROOT}/packages/cli/tsconfig.build.json"
CLI_DIST_DIR="${REPO_ROOT}/packages/cli/dist"
INSTALL_ROOT="${HOME}/.lance"
BIN_DIR="${INSTALL_ROOT}/bin"
LAUNCHER="${BIN_DIR}/lance"

if [[ ! -f "${CLI_ENTRY}" ]]; then
	echo "Could not find CLI entrypoint at ${CLI_ENTRY}" >&2
	exit 1
fi

if ! command -v bun >/dev/null 2>&1; then
	echo "bun is required for local CLI launcher but was not found in PATH" >&2
	exit 1
fi

# Ensure local launcher always points at a clean, current CLI build.
rm -rf "${CLI_DIST_DIR}"
bunx tsc -p "${CLI_TS_BUILD_CONFIG}"

mkdir -p "${BIN_DIR}"

cat > "${LAUNCHER}" <<EOF
#!/usr/bin/env bash
set -euo pipefail
export NODE_NO_WARNINGS=1
export FORCE_COLOR=1
export CLICOLOR_FORCE=1
unset NO_COLOR
exec bun "${CLI_ENTRY}" "\$@"
EOF

chmod +x "${LAUNCHER}"

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

if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
	echo "~/.lance/bin is not in PATH — adding it..."
	case "${SHELL##*/}" in
		zsh) add_to_path "$HOME/.zshrc" ;;
		bash) add_to_path "$HOME/.bashrc" ;;
		*) add_to_path "$HOME/.profile" ;;
	esac
	echo ""
	echo "Reload your shell, then run:"
	case "${SHELL##*/}" in
		zsh) echo "  source ~/.zshrc" ;;
		bash) echo "  source ~/.bashrc" ;;
		*) echo "  source ~/.profile" ;;
	esac
fi

echo "Installed local launcher: ${LAUNCHER}"
echo "Runs CLI from: ${CLI_ENTRY}"
echo "Try: lance init --help"
