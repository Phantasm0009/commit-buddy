# CI/CD Workflow for Commit-Buddy

This document explains the Continuous Integration and Continuous Deployment (CI/CD) workflows set up for this project.

## GitHub Workflows

### 1. Test and Build Workflow

**File**: `.github/workflows/test.yml`

This workflow runs whenever:
- A pull request is opened or updated targeting the main branch
- Code is pushed to the main branch (except for documentation files)

**Jobs**:
- Runs on multiple Node.js versions (16, 18, and 20)
- Installs dependencies
- Runs linting checks
- Runs tests
- Builds the package

This ensures that all changes maintain compatibility and don't break the codebase.

### 2. Publish to npm Workflow

**File**: `.github/workflows/npm-publish.yml`

This workflow runs when:
- A new GitHub release is created
- Manually triggered via GitHub Actions UI

**Jobs**:
- Installs dependencies
- Runs linting checks and tests
- Builds the package
- Updates the version (if specified manually)
- Publishes the package to npm registry
- Creates a GitHub release (if triggered manually)

### 3. Code Coverage Workflow

**File**: `.github/workflows/coverage.yml`

This workflow runs on:
- Pushes to main branch
- Pull requests to main branch

**Jobs**:
- Generates test coverage reports
- Uploads the reports to Codecov
- Visualizes code coverage over time

### 4. Security Scan Workflow

**File**: `.github/workflows/security-scan.yml`

This workflow runs on:
- Pushes to main branch
- Pull requests to main branch
- Scheduled weekly runs (every Sunday)

**Jobs**:
- Runs npm audit to check for dependency vulnerabilities
- Uses Snyk to perform additional security scanning

### 5. Automated Release Workflow

**File**: `.github/workflows/release.yml`

This workflow is manually triggered with parameters:
- Version number
- Release type (patch, minor, major)

**Jobs**:
- Updates package version
- Updates changelog
- Creates a Git tag
- Pushes changes to repository
- Creates a GitHub release
- Publishes to npm registry

## Setting Up Required Secrets

For the workflows to function correctly, you need to add the following secrets to your GitHub repository:

### NPM Token (Required)

1. Generate an npm access token:
   - Log in to your npm account on https://www.npmjs.com/
   - Go to Account → Access Tokens
   - Create a new token with "Publish" permissions

2. Add the token as a GitHub secret:
   - Go to your GitHub repository
   - Click on "Settings" → "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your npm access token
   - Click "Add secret"

### Codecov Token (Optional)

1. Sign up for a Codecov account at https://codecov.io/
2. Add your GitHub repository to Codecov
3. Get your repository token
4. Add it as a GitHub secret with the name `CODECOV_TOKEN`

### Snyk Token (Optional)

1. Sign up for a Snyk account at https://snyk.io/
2. Get your API token from account settings
3. Add it as a GitHub secret with the name `SNYK_TOKEN`

## Publishing New Versions

### Option 1: GitHub Release
Create a new release on GitHub:
1. Go to "Releases" in your repository
2. Click "Draft a new release"
3. Create a new tag (e.g., `v1.0.1`)
4. Add release notes
5. Publish the release
6. The workflow will automatically publish to npm

### Option 2: Manual Trigger
Trigger the workflow manually:
1. Go to "Actions" in your repository
2. Select "Publish to npm" workflow
3. Click "Run workflow"
4. Optionally specify a version (e.g., `1.0.1`)
5. Click "Run workflow"
