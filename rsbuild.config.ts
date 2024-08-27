import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginLess } from '@rsbuild/plugin-less';

export default defineConfig({
  plugins: [pluginVue(), pluginSass(), pluginLess()],
  html: {
    template: './index.html',
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
    define: {
      VERSION_PLACEHOLDER: JSON.stringify('1.0.0'),
    },
  },
  dev: {
    assetPrefix: true,
  },
  output: {
    externals: {
      '@alifd/next': 'var window.Next',
      '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
      '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
      '@alilc/lowcode-editor-core': 'var window.AliLowCodeEngine.common.editorCabin',
      '@alilc/lowcode-designer': 'var window.AliLowCodeEngine.common.designerCabin',
      '@alilc/lowcode-editor-skeleton':
        'var window.AliLowCodeEngine.common.skeletonCabin',
      '@knxcloud/lowcode-vue-renderer': 'var window.LCVueRenderer',
      '@knxcloud/lowcode-vue-simulator-renderer': 'var window.LCVueSimulatorRenderer',
      lodash: 'var window._',
      moment: 'var window.moment',
      'prop-types': 'var window.PropTypes',
      react: 'var window.React',
      'react-dom': 'var window.ReactDOM',
      vue: 'var window.Vue',
      'naive-ui': 'naive',
    },
  },
});
