import inquirer from 'inquirer';
import chalk from 'chalk';
import { CommitPromptAnswers, CommitType } from '../types';
import { DEFAULT_COMMIT_TYPES } from './constants';
import { loadConfig } from './config';

export async function promptForCommit(): Promise<CommitPromptAnswers> {
  const config = loadConfig();
  
  // Build commit types from config
  const commitTypes: CommitType[] = DEFAULT_COMMIT_TYPES.filter(
    type => config.types[type.type]
  ).map(type => ({
    ...type,
    emoji: config.types[type.type],
  }));
  
  console.log(chalk.blue('🤖 Welcome to Commit Buddy!'));
  console.log(chalk.gray('Let\'s create a conventional commit message together.\n'));
  
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select commit type:',
      choices: commitTypes.map(({ type, emoji, description }) => ({
        name: `${type.padEnd(8)} ${emoji}  ${description}`,
        value: type,
      })),
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Scope (optional):',
      when: () => config.allowEmptyScope !== false,
      validate: (input: string) => {
        if (config.scopes && input && !config.scopes.includes(input)) {
          return `Scope must be one of: ${config.scopes.join(', ')}`;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'message',
      message: 'Short message:',
      validate: (input: string) => {
        if (!input.trim()) {
          return 'Message is required';
        }
        if (config.maxMessageLength && input.length > config.maxMessageLength) {
          return `Message must be ${config.maxMessageLength} characters or less`;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'description',
      message: 'Longer description (optional):',
    },
    {
      type: 'confirm',
      name: 'breaking',
      message: 'Is this a breaking change?',
      default: false,
    },
  ]);
  
  return answers;
}
