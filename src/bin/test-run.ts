#!/usr/bin/env node

import { checkGitRepository, executeCommit } from '../lib/git';
import { loadConfig } from '../lib/config';
import chalk from 'chalk';

// Simple test run
async function main() {
  console.log(chalk.blue('🤖 Commit Buddy Test Script'));

  // Check if we're in a git repository
  if (!await checkGitRepository()) {
    console.error(chalk.red('❌ Not a git repository'));
    process.exit(1);
  }

  // Load config
  const config = loadConfig();
  console.log(chalk.green('✅ Config loaded successfully'));
  console.log(chalk.gray('Available commit types:'), Object.keys(config.types).join(', '));

  // Create a test commit using the dry run option
  const commitOptions = {
    type: 'test',
    scope: 'cli',
    message: 'verify commit-buddy is working',
    dryRun: true,
  };

  // Get emoji for the commit type
  const emoji = config.types[commitOptions.type] || '✅';
  
  // Execute the commit with dry run option
  await executeCommit(commitOptions, emoji);
}

main().catch(error => {
  console.error(chalk.red('❌ An error occurred:'));
  console.error(chalk.red(error instanceof Error ? error.message : String(error)));
  process.exit(1);
});
