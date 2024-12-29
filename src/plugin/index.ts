import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
import { maBtn } from './ma-btn.ts';
import type { ThemeConfigType } from './types.ts';

export const MachiCatUI = plugin.withOptions(
  () => {
    return ({ addComponents, theme }) => {
      addComponents({
        ...maBtn({ theme })
      });
    };
  },
);

export const ThemeDefaults: ThemeConfigType = {
  colors: {
    primary: colors.blue[500],
    secondary: colors.slate[500],
    accent: colors.yellow[500],
    info: colors.blue[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    error: colors.red[500]
  },
  backgroundColor: {
    primary: colors.blue[500],
    secondary: colors.slate[500],
    accent: colors.yellow[500],
    info: colors.blue[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    error: colors.red[500]
  },
};

export type { ThemeConfigType };
