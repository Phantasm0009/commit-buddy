#!/usr/bin/env node

/**
 * Script to update package version
 * Used in CI/CD workflows for automated versioning
 */

const fs = require('fs');
const path = require('path');

// Get version argument
const newVersion = process.argv[2];

if (!newVersion) {
  console.error('❌ No version specified. Usage: node version.js 1.2.3');
  process.exit(1);
}

// Validate version format
const versionRegex = /^\d+\.\d+\.\d+$/;
if (!versionRegex.test(newVersion)) {
  console.error('❌ Invalid version format. Must be in the format x.y.z (e.g., 1.2.3)');
  process.exit(1);
}

try {
  // Read package.json
  const packageJsonPath = path.join(__dirname, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const currentVersion = packageJson.version;

  // Update version
  packageJson.version = newVersion;
  
  // Write updated package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
  
  console.log(`✅ Updated version from ${currentVersion} to ${newVersion}`);
} catch (error) {
  console.error('❌ Error updating version:', error.message);
  process.exit(1);
}
