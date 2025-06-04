#!/usr/bin/env node

/**
 * Simple script to help with publishing the package
 */

const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read package.json
const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
const currentVersion = packageJson.version;

console.log(`🚀 Commit-Buddy Publisher`);
console.log(`Current version: ${currentVersion}`);
console.log(`\nThis script will help you publish a new version of the package.\n`);

// Ask for new version
rl.question('Enter new version (leave empty to use current version): ', (newVersion) => {
  // If no new version entered, use current version
  const version = newVersion || currentVersion;
  
  if (version !== currentVersion) {
    // Update package.json
    packageJson.version = version;
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log(`\n✅ Updated package.json to version ${version}`);
  }
  
  // Ask for confirmation
  rl.question(`\nDo you want to publish version ${version}? (y/n): `, (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      try {
        // Clean and build
        console.log('\n🧹 Cleaning and building...');
        execSync('npm run build', { stdio: 'inherit' });
        
        // Run tests
        console.log('\n🧪 Running tests...');
        execSync('npm test', { stdio: 'inherit' });
        
        // Publish
        console.log('\n📦 Publishing to npm...');
        execSync('npm publish --access public', { stdio: 'inherit' });
        
        console.log(`\n🎉 Successfully published commit-buddy v${version}!`);
      } catch (error) {
        console.error(`\n❌ Error during publishing:`, error.message);
      }
    } else {
      console.log('\n❌ Publishing cancelled.');
    }
    
    rl.close();
  });
});
