import { validateCommitOptions } from '../lib/validation';
import { CommitOptions } from '../types';

// Mock the config to avoid ES module issues
jest.mock('../lib/config', () => ({
  loadConfig: () => ({
    types: {
      feat: '✨',
      fix: '🐛',
      docs: '📝',
    },
    maxMessageLength: 50,
    scopes: ['auth', 'ui', 'api'],
  }),
}));

describe('Validation', () => {
  describe('validateCommitOptions', () => {
    test('should pass validation for valid options', () => {
      const options: CommitOptions = {
        type: 'feat',
        scope: 'auth',
        message: 'add login feature',
        dryRun: false,
      };
      
      const errors = validateCommitOptions(options);
      expect(errors).toHaveLength(0);
    });
    
    test('should fail validation for invalid type', () => {
      const options: CommitOptions = {
        type: 'invalid',
        message: 'some message',
        dryRun: false,
      };
      
      const errors = validateCommitOptions(options);
      expect(errors).toContain('Invalid commit type: invalid');
    });
    
    test('should fail validation for empty message', () => {
      const options: CommitOptions = {
        type: 'feat',
        message: '',
        dryRun: false,
      };
      
      const errors = validateCommitOptions(options);
      expect(errors).toContain('Message is required');
    });
    
    test('should fail validation for message too long', () => {
      const options: CommitOptions = {
        type: 'feat',
        message: 'this is a very long message that exceeds the maximum length',
        dryRun: false,
      };
      
      const errors = validateCommitOptions(options);
      expect(errors).toContain('Message must be 50 characters or less');
    });
    
    test('should fail validation for invalid scope', () => {
      const options: CommitOptions = {
        type: 'feat',
        scope: 'invalid',
        message: 'some message',
        dryRun: false,
      };
      
      const errors = validateCommitOptions(options);
      expect(errors).toContain('Invalid scope: invalid. Must be one of: auth, ui, api');
    });
  });
});
