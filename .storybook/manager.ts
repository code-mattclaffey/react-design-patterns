import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'dark',

  // Typography
  fontBase: '"Poppins", "Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: '⚛️ React Design Patterns',
  brandUrl:
    'https://github.com/code-mattclaffey/react-design-patterns',
  brandTarget: '_blank',
  colorPrimary: '#3b82f6', // blue-500
  colorSecondary: '#A599E9', // code-500 from tailwind config

  // UI - matching main page blue-950 theme
  appBg: '#172554', // blue-950
  appContentBg: '#1e3a8a', // blue-900
  appPreviewBg: '#ffffff',
  appBorderColor: '#1e40af', // blue-800
  appBorderRadius: 8,

  // Text colors - matching main page
  textColor: '#ffffff',
  textInverseColor: '#1e293b', // slate-800

  // Toolbar colors - matching header
  barTextColor: '#cbd5e1', // slate-300
  barSelectedColor: '#ffffff',
  barHoverColor: '#ffffff',
  barBg: '#172554', // blue-950

  // Form colors
  inputBg: '#1e40af', // blue-800
  inputBorder: '#3b82f6', // blue-500
  inputTextColor: '#ffffff',
  inputBorderRadius: 6,

  // Buttons - matching CTA buttons
  buttonBg: '#2563eb', // blue-600
  buttonBorder: '#2563eb', // blue-600
  gridCellSize: 24
});

const themes = {
  dark: theme
};

addons.setConfig({
  theme: themes.dark
});
