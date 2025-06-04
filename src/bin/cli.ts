#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import { CommitOptions } from '../types';
import { promptForCommit } from '../lib/prompts';
import { executeCommit, checkGitRepository, checkStagedChanges } from '../lib/git';
import { validateCommitOptions } from '../lib/validation';
import { loadConfig } from '../lib/config';

const program = new Command();

program
  .name('commit-buddy')
  .description('A CLI tool for creating conventional commit messages')
  .version('1.0.0');

program
  .option('-t, --type <type>', 'commit type (feat, fix, docs, etc.)')
  .option('-s, --scope <scope>', 'commit scope (optional)')
  .option('-m, --message <message>', 'commit message')
  .option('-d, --description <description>', 'longer description (optional)')
  .option('-b, --breaking', 'mark as breaking change', false)
  .option('--dry-run', 'show the commit command without executing it', false)
  .option('--config <path>', 'path to config file')
  .action(async (options) => {
    try {
      // Check if we're in a git repository
      if (!await checkGitRepository()) {
        console.error(chalk.red('❌ Not a git repository'));
        process.exit(1);
      }
      
      // Check if there are staged changes (unless it's a dry run)
      if (!options.dryRun && !await checkStagedChanges()) {
        console.error(chalk.red('❌ No staged changes found'));
        console.log(chalk.gray('Stage some changes first with: git add <files>'));
        process.exit(1);
      }
      
      const config = loadConfig();
      let commitOptions: CommitOptions;
      
      // Interactive mode if no type provided
      if (!options.type) {
        console.log(chalk.blue('🚀 Starting interactive mode...\n'));
        const answers = await promptForCommit();
        commitOptions = {
          type: answers.type,
          scope: answers.scope || undefined,
          message: answers.message,
          description: answers.description || undefined,
          breaking: answers.breaking,
          dryRun: options.dryRun,
        };
      } else {
        // Non-interactive mode
        if (!options.message) {
          console.error(chalk.red('❌ Message is required when using non-interactive mode'));
          process.exit(1);
        }
        
        commitOptions = {
          type: options.type,
          scope: options.scope,
          message: options.message,
          description: options.description,
          breaking: options.breaking,
          dryRun: options.dryRun,
        };
      }
      
      // Validate options
      const validationErrors = validateCommitOptions(commitOptions);
      if (validationErrors.length > 0) {
        console.error(chalk.red('❌ Validation errors:'));
        validationErrors.forEach(error => console.error(chalk.red(`  • ${error}`)));
        process.exit(1);
      }
      
      // Get emoji for the commit type
      const emoji = config.types[commitOptions.type];
      
      // Execute the commit
      await executeCommit(commitOptions, emoji);
      
    } catch (error) {
      console.error(chalk.red('❌ An error occurred:'));
      console.error(chalk.red(error instanceof Error ? error.message : String(error)));
      process.exit(1);
    }
  });

// Show help by default if no arguments
if (process.argv.length === 2) {
  program.help();
}

program.parse();
