#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CLI_DIR="$REPO_ROOT/packages/cli"
BUN_BIN="$HOME/.bun/bin"

echo "Installing lance CLI..."

# Dependencies
bun install --cwd "$REPO_ROOT" --silent

# Make the entry point executable
chmod +x "$CLI_DIR/bin/lance.ts"

# Register with bun's global bin
(cd "$CLI_DIR" && bun link)

# Add ~/.bun/bin to PATH if missing
add_to_path() {
    local rc_file="$1"
    if [[ -f "$rc_file" ]] && grep -q 'bun/bin' "$rc_file"; then
        return 0
    fi
    echo "" >> "$rc_file"
    echo '# bun global bin' >> "$rc_file"
    echo 'export PATH="$HOME/.bun/bin:$PATH"' >> "$rc_file"
    echo "  Added ~/.bun/bin to PATH in $rc_file"
}

if [[ ":$PATH:" != *":$BUN_BIN:"* ]]; then
    echo ""
    echo "~/.bun/bin is not in PATH — adding it..."
    case "${SHELL##*/}" in
        zsh)  add_to_path "$HOME/.zshrc" ;;
        bash) add_to_path "$HOME/.bashrc" ;;
        *)    add_to_path "$HOME/.profile" ;;
    esac
    echo ""
    echo "Reload your shell or run:"
    echo "  source ~/${SHELL##*/}rc"
    echo ""
fi

echo "Done. Run 'lance --help' to get started."
