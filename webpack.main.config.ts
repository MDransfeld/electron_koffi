import type { Configuration } from 'webpack';
import CopyPlugin from "copy-webpack-plugin"

import { rules } from './webpack.rules';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [new CopyPlugin({
    patterns:[
      {
        from: 'node_modules/koffi/build/2.3.10-beta.1/koffi_linux_x64/koffi.node',
        to: '../build/2.3.10-beta.1/koffi_linux_x64/',
      },
      {
        from: 'node_modules/koffi/build/2.3.10-beta.1/koffi_win32_x64/koffi.node',
        to: '../build/2.3.10-beta.1/koffi_win32_x64/',
      },
    ]
  })],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};
