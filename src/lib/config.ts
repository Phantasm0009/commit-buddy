import { cosmiconfigSync } from 'cosmiconfig';
import { CommitConfig } from '../types';
import { DEFAULT_CONFIG } from './constants';

const moduleName = 'commit-buddy';

export function loadConfig(): CommitConfig {
  const explorer = cosmiconfigSync(moduleName);
  const result = explorer.search();
  
  if (result) {
    return { ...DEFAULT_CONFIG, ...result.config };
  }
  
  return DEFAULT_CONFIG;
}
