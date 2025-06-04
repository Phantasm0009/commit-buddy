import { DEFAULT_CONFIG } from '../lib/constants';

describe('Config', () => {
  test('should have all required commit types', () => {
    expect(DEFAULT_CONFIG.types).toHaveProperty('feat');
    expect(DEFAULT_CONFIG.types).toHaveProperty('fix');
    expect(DEFAULT_CONFIG.types).toHaveProperty('docs');
    expect(DEFAULT_CONFIG.types).toHaveProperty('style');
    expect(DEFAULT_CONFIG.types).toHaveProperty('refactor');
    expect(DEFAULT_CONFIG.types).toHaveProperty('test');
    expect(DEFAULT_CONFIG.types).toHaveProperty('chore');
  });
});
