import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
import type { CSSRuleObject } from 'tailwindcss/types/config';

export type NestedCSSProperties = CSSRuleObject & {
  [key: string]: string | number | NestedCSSProperties | undefined
};

export const MachiCatUI = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        '.ma-btn': {
          padding: `${theme('padding.2')} ${theme('padding.4')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
          cursor: 'pointer',
          
          // 禁用狀態
          '&[disabled]': {
            opacity: '0.5',
            cursor: 'not-allowed'
          },

          // 預設狀態
          '&-default': {
            backgroundColor: theme('colors.gray.200'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Primary 狀態
          '&-primary': {
            backgroundColor: theme('colors.primary'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Secondary 狀態
          '&-secondary': {
            backgroundColor: theme('colors.secondary'), 
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Accent 狀態
          '&-accent': {
            backgroundColor: theme('colors.accent'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Info 狀態
          '&-info': {
            backgroundColor: theme('colors.info'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Success 狀態
          '&-success': {
            backgroundColor: theme('colors.success'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Warning 狀態
          '&-warning': {
            backgroundColor: theme('colors.warning'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          },

          // Error 狀態
          '&-error': {
            backgroundColor: theme('colors.error'),
            color: theme('colors.white'),
            '&:hover': {
              opacity: '0.75'
            }
          }
        } as NestedCSSProperties
      })
    }
  }
);

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

export const ThemeDefaults: ThemeConfigType = {
  colors: {
    primary: colors.blue[500],
    secondary: colors.slate[500],
    accent: colors.yellow[500],
    info: colors.blue[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    error: colors.red[500],
  },
  backgroundColor: {
    primary: colors.blue[500],
    secondary: colors.slate[500],
    accent: colors.yellow[500],
    info: colors.blue[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    error: colors.red[500],
  },
};
