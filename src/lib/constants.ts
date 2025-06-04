import { CommitConfig, CommitType } from '../types';

export const DEFAULT_COMMIT_TYPES: CommitType[] = [
  { type: 'feat', emoji: '✨', description: 'A new feature' },
  { type: 'fix', emoji: '🐛', description: 'A bug fix' },
  { type: 'docs', emoji: '📝', description: 'Documentation changes' },
  { type: 'style', emoji: '🎨', description: 'Code style updates (formatting, etc.)' },
  { type: 'refactor', emoji: '♻️', description: 'Code refactoring' },
  { type: 'test', emoji: '✅', description: 'Tests' },
  { type: 'chore', emoji: '🔧', description: 'Maintenance tasks' },
  { type: 'perf', emoji: '⚡', description: 'Performance improvements' },
  { type: 'ci', emoji: '👷', description: 'CI/CD changes' },
  { type: 'build', emoji: '📦', description: 'Build system changes' },
  { type: 'revert', emoji: '⏪', description: 'Revert changes' },
];

export const DEFAULT_CONFIG: CommitConfig = {
  types: {
    feat: '✨',
    fix: '🐛',
    docs: '📝',
    style: '🎨',
    refactor: '♻️',
    test: '✅',
    chore: '🔧',
    perf: '⚡',
    ci: '👷',
    build: '📦',
    revert: '⏪',
  },
  allowEmptyScope: true,
  maxMessageLength: 72,
};
