import { CommitOptions } from '../types';
import { loadConfig } from './config';

export function validateCommitOptions(options: CommitOptions): string[] {
  const errors: string[] = [];
  const config = loadConfig();
  
  // Validate type
  if (!config.types[options.type]) {
    errors.push(`Invalid commit type: ${options.type}`);
  }
  
  // Validate scope
  if (config.scopes && options.scope && !config.scopes.includes(options.scope)) {
    errors.push(`Invalid scope: ${options.scope}. Must be one of: ${config.scopes.join(', ')}`);
  }
  
  // Validate message
  if (!options.message.trim()) {
    errors.push('Message is required');
  }
  
  if (config.maxMessageLength && options.message.length > config.maxMessageLength) {
    errors.push(`Message must be ${config.maxMessageLength} characters or less`);
  }
  
  return errors;
}
