import { addons } from '@storybook/manager-api';
import { ThemeVarsPartial } from '@storybook/theming';
import { create } from '@storybook/theming/create';

const baseThemeStyles: Partial<ThemeVarsPartial> = {
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: '⚛️ React Design Patterns',
  brandUrl: 'https://example.com',
  brandTarget: '_self',
  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2
};

const lightTheme = create({
  base: 'light',
  ...baseThemeStyles
});

const darkTheme = create({
  base: 'dark',
  ...baseThemeStyles,

  //
  colorPrimary: '#1E1E3F',
  colorSecondary: '#A599E9',

  // UI
  appBg: '#1E1E3F',
  appContentBg: '#2D2B55',
  appPreviewBg: '#ffffff',
  appBorderColor: '#2D2B55',
  appBorderRadius: 4,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
  barBg: '#1E1E3F',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#35356b',
  inputTextColor: '#1E1E3F',
  inputBorderRadius: 2,

  // Buttons
  buttonBg: '#35356b',
  buttonBorder: '#35356b',
  gridCellSize: 24
});

const themes = {
  light: lightTheme,
  dark: darkTheme,
  normal: lightTheme
};

addons.setConfig({
  theme: themes.dark
});
