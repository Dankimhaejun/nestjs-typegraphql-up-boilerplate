/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals');
const terserPlugin = require('terser-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const dotEnvPlugin = require('dotenv-webpack');

module.exports = function (options) {
  return {
    ...options,
    entry: ['./src/main.ts'],
    watch: false,
    resolve: {
      extensions: ['.ts', '.js', '.jade'],
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        ...options.module.rules,
        {
          test: /\.handlebars$/,
          loader: 'handlebars-loader',
          options: {
            knownHelpersOnly: false,
            inlineRequires: /\/assets\/(:?images|audio|video)\//gi,
            partialDirs: [path.join(__dirname, './src/views/email/partials')],
          },
        },
      ],
    },
    plugins: [
      ...options.plugins,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
      new dotEnvPlugin({
        path: './config/development/.env',
        safe: true,
        systemvars: true,
        silent: true,
        defaults: false,
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'dev',
        'process.env.DEBUG': 'debug',
      }),
      new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    ],
  };
};
