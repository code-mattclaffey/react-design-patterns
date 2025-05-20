import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: ['../public'],
  managerHead: (head, { configType }) => {
    if (configType === 'PRODUCTION') {
      return `
        ${head}
        <base href="/storybook/">
      `;
    }
  },
  async viteFinal(baseConfig, { configType }) {
    return mergeConfig(baseConfig, {
      ...(configType === 'PRODUCTION' ? { base: '/storybook/' } : {}),
      resolve: {
        alias: {
          '@shared': path.resolve(__dirname, '../src', 'shared')
        }
      }
    });
  }
};
export default config;
