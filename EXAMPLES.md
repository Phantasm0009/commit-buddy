# Examples

Here are some examples of using `@phantasm0009/commit-buddy`:

## Basic Usage

### Interactive Mode
```bash
# Start interactive prompts
npx @phantasm0009/commit-buddy

# Follow the prompts:
# ? Select commit type: feat     ✨  A new feature
# ? Scope (optional): auth
# ? Short message: add login validation
# ? Longer description (optional): Implements client-side validation for login form
# ? Is this a breaking change? No

# Result: git commit -m "feat(auth): ✨ add login validation" -m "Implements client-side validation for login form"
```

### Non-Interactive Mode
```bash
# Quick commit
npx @phantasm0009/commit-buddy -t feat -m "add user dashboard"

# With scope
npx @phantasm0009/commit-buddy -t fix -s ui -m "resolve button alignment issue"

# With description
npx @phantasm0009/commit-buddy -t docs -m "update API documentation" -d "Added examples for all endpoints and updated response schemas"

# Breaking change
npx @phantasm0009/commit-buddy -t feat -s api -m "update authentication system" -b

# Dry run (see what would be committed)
npx @phantasm0009/commit-buddy -t chore -m "update dependencies" --dry-run
```

## Real-World Examples

### Feature Development
```bash
# New feature
npx @phantasm0009/commit-buddy -t feat -s payment -m "add stripe integration"

# Feature enhancement
npx @phantasm0009/commit-buddy -t feat -s ui -m "improve responsive design" -d "Added mobile-first approach and improved tablet layout"
```

### Bug Fixes
```bash
# Simple bug fix
npx @phantasm0009/commit-buddy -t fix -s auth -m "resolve token expiration issue"

# Critical bug fix
npx @phantasm0009/commit-buddy -t fix -s security -m "patch XSS vulnerability" -d "Sanitized user input in comment system and added content security policy"
```

### Documentation
```bash
# Update documentation
npx @phantasm0009/commit-buddy -t docs -m "add contributing guidelines"

# Fix typos
npx @phantasm0009/commit-buddy -t docs -s readme -m "fix installation instructions"
```

### Refactoring
```bash
# Code refactoring
npx @phantasm0009/commit-buddy -t refactor -s utils -m "extract validation helpers"

# Performance improvement
npx @phantasm0009/commit-buddy -t perf -s api -m "optimize database queries" -d "Reduced query count by 60% using batch operations and caching"
```

### Testing
```bash
# Add tests
npx @phantasm0009/commit-buddy -t test -s auth -m "add unit tests for login service"

# Update tests
npx @phantasm0009/commit-buddy -t test -m "increase test coverage to 90%"
```

### Maintenance
```bash
# Dependency updates
npx @phantasm0009/commit-buddy -t chore -m "update npm dependencies"

# Build configuration
npx @phantasm0009/commit-buddy -t build -m "update webpack config for production"

# CI/CD changes
npx @phantasm0009/commit-buddy -t ci -m "add automated testing workflow"
```

## Configuration Examples

### Custom `.commit-buddy.json`
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
    "revert": "⏪",
    "hotfix": "🚑",
    "wip": "🚧"
  },
  "scopes": [
    "auth",
    "ui",
    "api",
    "core",
    "docs",
    "payment",
    "security",
    "performance"
  ],
  "allowEmptyScope": true,
  "maxMessageLength": 50
}
```

### Team Configuration
```json
{
  "types": {
    "feat": "✨",
    "fix": "🐛",
    "docs": "📝",
    "test": "✅",
    "refactor": "♻️"
  },
  "scopes": [
    "frontend",
    "backend",
    "database",
    "deployment"
  ],
  "allowEmptyScope": false,
  "maxMessageLength": 72
}
```

## Git Hooks Integration

### Pre-commit Hook
Create `.git/hooks/prepare-commit-msg`:
```bash
#!/bin/sh
exec < /dev/tty && npx @phantasm0009/commit-buddy
```

Make it executable:
```bash
chmod +x .git/hooks/prepare-commit-msg
```

## Workflow Integration

### GitHub Actions
```yaml
name: Validate Commits
on: [push, pull_request]
jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Validate commit messages
        run: npx @phantasm0009/commit-buddy --validate-history
```

### NPM Scripts
Add to your `package.json`:
```json
{
  "scripts": {
    "commit": "npx @phantasm0009/commit-buddy",
    "commit:quick": "npx @phantasm0009/commit-buddy -t",
    "commit:dry": "npx @phantasm0009/commit-buddy --dry-run"
  }
}
```

Then use:
```bash
npm run commit
```
