import type { CSSRuleObject } from 'tailwindcss/types/config';

export type NestedCSSProperties = CSSRuleObject & {
  [key: string]: string | number | NestedCSSProperties | undefined
};

export interface ThemeConfigType {
  colors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    info?: string;
    success?: string;
    warning?: string;
    error?: string;
  };
  backgroundColor?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    info?: string;
    success?: string;
    warning?: string;
    error?: string;
  };
};
