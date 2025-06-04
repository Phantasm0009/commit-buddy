# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-06-04

### Added
- ✨ Interactive commit message prompts
- 🎨 Emoji support for commit types
- 🔧 Configurable via `.commit-buddy.json`
- 📦 Support for conventional commits specification
- 🚀 Non-interactive mode for automation
- 🛠️ Git repository validation
- ⚡ Staged changes detection
- 📝 Comprehensive documentation and examples
- ✅ TypeScript support with full type definitions
- 🧪 Jest test suite
- 📦 Built-in commit types (feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert)
- 🎯 Scope validation and suggestion
- 💾 Configuration file support (global and local)
- 🌈 Customizable emoji mappings
- 📏 Message length validation
- 🔍 Breaking change detection
- 🏃‍♂️ Dry run mode for testing

### Features
- **Interactive Mode**: Step-by-step prompts for creating perfect commits
- **Non-Interactive Mode**: Quick commits via command line arguments
- **Configuration**: Customizable commit types, scopes, and validation rules
- **Validation**: Built-in validation for commit message format and content
- **Emoji Support**: Visual indicators for different commit types
- **Git Integration**: Seamless integration with git workflow
- **TypeScript**: Full TypeScript support with type definitions
- **Testing**: Comprehensive test suite with Jest

### Installation
```bash
npm install -g @phantasm0009/commit-buddy
```

### Usage
```bash
# Interactive mode
commit-buddy

# Non-interactive mode
commit-buddy -t feat -m "add new feature"
```

[Unreleased]: https://github.com/Phantasm0009/commit-buddy/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Phantasm0009/commit-buddy/releases/tag/v1.0.0
