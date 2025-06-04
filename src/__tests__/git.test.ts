import { buildCommitMessage } from '../lib/git';
import { CommitOptions } from '../types';

// Mock execa to avoid ES module issues in tests
jest.mock('execa');

describe('Git utilities', () => {
  describe('buildCommitMessage', () => {
    test('should build a basic commit message', () => {
      const options: CommitOptions = {
        type: 'feat',
        message: 'add new feature',
        dryRun: false,
      };
      
      const result = buildCommitMessage(options, '✨');
      expect(result).toBe('feat: ✨ add new feature');
    });
    
    test('should include scope when provided', () => {
      const options: CommitOptions = {
        type: 'fix',
        scope: 'auth',
        message: 'resolve login issue',
        dryRun: false,
      };
      
      const result = buildCommitMessage(options, '🐛');
      expect(result).toBe('fix(auth): 🐛 resolve login issue');
    });
    
    test('should add breaking change indicator', () => {
      const options: CommitOptions = {
        type: 'feat',
        scope: 'api',
        message: 'update user endpoint',
        breaking: true,
        dryRun: false,
      };
      
      const result = buildCommitMessage(options, '✨');
      expect(result).toBe('feat(api)!: ✨ update user endpoint');
    });
    
    test('should work without emoji', () => {
      const options: CommitOptions = {
        type: 'docs',
        message: 'update README',
        dryRun: false,
      };
      
      const result = buildCommitMessage(options);
      expect(result).toBe('docs: update README');
    });
  });
});
