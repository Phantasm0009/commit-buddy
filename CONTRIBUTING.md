# Contributing to Commit Buddy

Thank you for your interest in contributing to Commit Buddy! We welcome contributions from the community.

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/commit-buddy.git
   cd commit-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Run tests**
   ```bash
   npm test
   ```

5. **Test the CLI locally**
   ```bash
   npm start -- --help
   ```

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes**
   - Follow the existing code style
   - Add tests for new functionality
   - Update documentation as needed

3. **Test your changes**
   ```bash
   npm run build
   npm test
   npm run lint
   ```

4. **Commit your changes** (use the tool itself!)
   ```bash
   npm start -- -t feat -s core -m "add your feature description"
   ```

5. **Push and create a Pull Request**
   ```bash
   git push origin feat/your-feature-name
   ```

## Code Style

- Use TypeScript for all new code
- Follow the existing ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages using conventional commits

## Project Structure

```
src/
├── bin/
│   └── cli.ts          # CLI entry point
├── lib/
│   ├── config.ts       # Configuration loading
│   ├── constants.ts    # Default configurations
│   ├── git.ts          # Git operations
│   ├── prompts.ts      # Interactive prompts
│   └── validation.ts   # Input validation
├── types/
│   └── index.ts        # TypeScript type definitions
└── __tests__/
    ├── config.test.ts
    └── git.test.ts
```

## Adding New Features

### Adding a New Commit Type

1. Update `DEFAULT_COMMIT_TYPES` in `src/lib/constants.ts`
2. Add the emoji mapping to `DEFAULT_CONFIG.types`
3. Update documentation and examples
4. Add tests

### Adding Configuration Options

1. Update the `CommitConfig` interface in `src/types/index.ts`
2. Update `DEFAULT_CONFIG` in `src/lib/constants.ts`
3. Update validation logic in `src/lib/validation.ts`
4. Add tests and documentation

## Testing

- Write unit tests for all new functionality
- Use Jest for testing
- Aim for high test coverage
- Test both success and error scenarios

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## Documentation

- Update the README.md for major features
- Add examples to EXAMPLES.md
- Update the changelog (CHANGELOG.md)
- Add JSDoc comments for public APIs

## Release Process

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create a git tag
4. The CI will automatically publish to npm

## Questions?

If you have questions or need help, please:

1. Check existing issues on GitHub
2. Create a new issue with your question
3. Join our discussions

## Code of Conduct

Please be respectful and constructive in all interactions. We want to maintain a welcoming environment for all contributors.

## License

By contributing to Commit Buddy, you agree that your contributions will be licensed under the MIT License.
