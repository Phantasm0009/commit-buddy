# Using Commit-Buddy

This guide will help you get started with using `@phantasm0009/commit-buddy`.

## Installation

### Global Installation
```bash
npm install -g @phantasm0009/commit-buddy
```

### Local Installation
```bash
npm install --save-dev @phantasm0009/commit-buddy
```

### Use without installation
```bash
npx @phantasm0009/commit-buddy
```

## Basic Usage

### Interactive Mode
The easiest way to use Commit Buddy is in interactive mode, which walks you through creating a conventional commit:

```bash
commit-buddy
```

This will guide you through selecting:

1. A commit type (feat, fix, docs, etc.)
2. An optional scope
3. A short message
4. An optional longer description
5. Whether this is a breaking change

### Non-Interactive Mode
For scripting or quick commits, you can use the non-interactive mode:

```bash
commit-buddy -t feat -s api -m "add authentication endpoint"
```

Available options:

- `-t, --type <type>` - Commit type (feat, fix, docs, etc.)
- `-s, --scope <scope>` - Commit scope (optional)
- `-m, --message <message>` - Commit message
- `-d, --description <description>` - Longer description (optional)
- `-b, --breaking` - Mark as breaking change
- `--dry-run` - Show what would be committed without actually committing
- `--config <path>` - Path to custom config file

## Configuration

Commit Buddy can be configured with a `.commit-buddy.json` file in your project root or home directory.

Example configuration:

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
  "scopes": ["auth", "ui", "api", "core", "docs"],
  "allowEmptyScope": true,
  "maxMessageLength": 72
}
```

## Examples

### Feature Development
```bash
# New feature
commit-buddy -t feat -s payment -m "add stripe integration"

# Feature enhancement with description
commit-buddy -t feat -s ui -m "improve responsive design" -d "Added mobile-first approach and improved tablet layout"
```

### Bug Fixes
```bash
# Simple fix
commit-buddy -t fix -m "resolve login error"

# Fix with scope and description
commit-buddy -t fix -s auth -m "fix authentication token expiry" -d "Tokens now properly refresh before expiring"
```

### Documentation
```bash
commit-buddy -t docs -m "update installation instructions"
```

### Breaking Change
```bash
commit-buddy -t feat -s api -m "change authentication flow" -b
# Results in: feat(api)!: ✨ change authentication flow
```

## Tips

- Use `--dry-run` to see what would be committed without actually creating a commit
- Commit types should be lowercase
- Keep commit messages concise and descriptive
- Use the scope to indicate which part of the codebase is affected
- Longer descriptions are useful for explaining complex changes

## Common Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc.)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools
- **perf**: A code change that improves performance
- **ci**: Changes to CI configuration files and scripts
- **build**: Changes that affect the build system or dependencies
- **revert**: Reverts a previous commit
