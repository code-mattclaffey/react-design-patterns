import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Typography
  fontBase: '"Poppins", "Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: '⚛️ React Design Patterns',
  brandUrl: 'https://example.com',
  brandTarget: '_self',
  //
  colorPrimary: '#ffffff',
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
  dark: theme
};

addons.setConfig({
  theme: themes.dark
});
