# 🤖 @phantasm0009/commit-buddy

A CLI tool that helps developers write **standardized, expressive commit messages** following the [Conventional Commits](https://www.conventionalcommits.org/) specification.

[![Publish to npm](https://github.com/Phantasm0009/commit-buddy/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Phantasm0009/commit-buddy/actions/workflows/npm-publish.yml)
[![Test and Build](https://github.com/Phantasm0009/commit-buddy/actions/workflows/test.yml/badge.svg)](https://github.com/Phantasm0009/commit-buddy/actions/workflows/test.yml)
[![npm version](https://img.shields.io/npm/v/@phantasm0009/commit-buddy.svg)](https://www.npmjs.com/package/@phantasm0009/commit-buddy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 📚 **Interactive prompts** for commit message creation
- 🎨 **Emoji support** for visual commit types
- 🔧 **Configurable** via `.commit-buddy.json`
- 📦 **Conventional Commits** compliant
- 🚀 **Non-interactive mode** for automation
- 🛠️ **Git integration** ready
- 📋 **Easy-to-use** CLI interface

## 🚀 Installation

### Global Installation
```bash
npm install -g @phantasm0009/commit-buddy
```

### Use without installation
```bash
npx @phantasm0009/commit-buddy
```

## 🎯 Usage

### Interactive Mode
```bash
commit-buddy
```

This will prompt you through an interactive flow:
```
? Select commit type: (Use arrow keys)
  feat     ✨  A new feature
  fix      🐛  A bug fix
  docs     📝  Documentation changes
  style    🎨  Code style updates
  refactor ♻️  Refactoring
  test     ✅  Tests
  chore    🔧  Misc tasks

? Scope (optional): auth
? Short message: add login error handling
? Longer description (optional): Improved error display for invalid login attempts.
? Is this a breaking change? No
```

### Non-Interactive Mode
```bash
commit-buddy -t feat -s auth -m "add login logic" -d "Implements JWT and error flow"
```

### Command Line Options
- `-t, --type <type>`: Commit type (feat, fix, docs, etc.)
- `-s, --scope <scope>`: Commit scope (optional)
- `-m, --message <message>`: Commit message
- `-d, --description <description>`: Longer description (optional)
- `-b, --breaking`: Mark as breaking change
- `--dry-run`: Show what would be committed without actually committing

For more detailed usage instructions, see [USAGE.md](./USAGE.md).
- `--dry-run`: Show the commit command without executing it
- `--config <path>`: Use custom config file

## ⚙️ Configuration

Create a `.commit-buddy.json` file in your project root or home directory:

```json
{
  "types": {
    "feat": "✨",
    "fix": "🐛",
    "docs": "📝",
    "style": "🎨",
    "refactor": "♻️",
    "test": "✅",
    "chore": "🔧",
    "perf": "⚡",
    "ci": "👷",
    "build": "📦",
    "revert": "⏪"
  },
  "scopes": ["auth", "ui", "api", "core"],
  "allowEmptyScope": true,
  "maxMessageLength": 72
}
```

## 🎨 Commit Types

| Type | Emoji | Description |
|------|-------|-------------|
| `feat` | ✨ | A new feature |
| `fix` | 🐛 | A bug fix |
| `docs` | 📝 | Documentation changes |
| `style` | 🎨 | Code style updates |
| `refactor` | ♻️ | Code refactoring |
| `test` | ✅ | Tests |
| `chore` | 🔧 | Maintenance tasks |
| `perf` | ⚡ | Performance improvements |
| `ci` | 👷 | CI/CD changes |
| `build` | 📦 | Build system changes |
| `revert` | ⏪ | Revert changes |

## 📋 Examples

```bash
# Interactive mode
commit-buddy

# Quick commit
commit-buddy -t feat -m "add user authentication"

# With scope and description
commit-buddy -t fix -s auth -m "resolve login timeout" -d "Fixed session timeout issue that occurred after 5 minutes of inactivity"

# Breaking change
commit-buddy -t feat -s api -m "update user endpoint" -b

# Dry run (see what would be committed)
commit-buddy -t docs -m "update README" --dry-run
```

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/Phantasm0009/commit-buddy.git
cd commit-buddy

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Test the CLI
npm start
```

## 📝 License

MIT © [Phantasm0009](https://github.com/Phantasm0009)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please [open an issue](https://github.com/Phantasm0009/commit-buddy/issues).
