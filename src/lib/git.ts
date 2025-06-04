import { execa } from 'execa';
import chalk from 'chalk';
import { CommitOptions } from '../types';

export function buildCommitMessage(options: CommitOptions, emoji?: string): string {
  const { type, scope, message, breaking } = options;
  
  let commitMessage = type;
  
  if (scope) {
    commitMessage += `(${scope})`;
  }
  
  if (breaking) {
    commitMessage += '!';
  }
  
  commitMessage += ': ';
  
  if (emoji) {
    commitMessage += `${emoji} `;
  }
  
  commitMessage += message;
  
  return commitMessage;
}

export async function executeCommit(options: CommitOptions, emoji?: string): Promise<void> {
  const commitMessage = buildCommitMessage(options, emoji);
  const args = ['commit', '-m', commitMessage];
  
  if (options.description) {
    args.push('-m', options.description);
  }
  
  if (options.dryRun) {
    console.log(chalk.cyan('Dry run mode - would execute:'));
    console.log(chalk.yellow(`git ${args.join(' ')}`));
    return;
  }
  
  try {
    await execa('git', args);
    console.log(chalk.green('✅ Commit created successfully!'));
    console.log(chalk.gray(`📝 ${commitMessage}`));
  } catch (error) {
    console.error(chalk.red('❌ Failed to create commit:'));
    console.error(chalk.red(error instanceof Error ? error.message : String(error)));
    process.exit(1);
  }
}

export async function checkGitRepository(): Promise<boolean> {
  try {
    await execa('git', ['rev-parse', '--git-dir']);
    return true;
  } catch {
    return false;
  }
}

export async function checkStagedChanges(): Promise<boolean> {
  try {
    const { stdout } = await execa('git', ['diff', '--cached', '--name-only']);
    return stdout.trim().length > 0;
  } catch {
    return false;
  }
}
