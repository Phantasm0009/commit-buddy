export interface CommitType {
  type: string;
  emoji: string;
  description: string;
}

export interface CommitConfig {
  types: Record<string, string>;
  scopes?: string[];
  allowEmptyScope?: boolean;
  maxMessageLength?: number;
}

export interface CommitOptions {
  type: string;
  scope?: string;
  message: string;
  description?: string;
  breaking?: boolean;
  dryRun?: boolean;
}

export interface CommitPromptAnswers {
  type: string;
  scope?: string;
  message: string;
  description?: string;
  breaking: boolean;
}
