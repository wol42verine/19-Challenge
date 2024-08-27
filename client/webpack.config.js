const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js', // Correct path
      install: './src/js/install.js' // Correct path
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
title: 'JATE',
      }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        fingerprints: false,
        inject: true,
        short_name: 'JATE',
        description: 'A simple text editor that works offline',
        background_color: '#ffffff',
        theme_color: '#31a9e1',
        start_url: '/',
        publicPath: '/',
        icons: [
          {
            src: path.resolve('./src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
      // new CopyWebpackPlugin({
      //   patterns: [
      //     { from: 'src/images', to: 'images' }
      //   ]
      // })
      
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/transform-runtime"],
            },
          },
        },
        // {
        //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
        //   type: 'asset/resource',
        // },
      ],
    },
    // optimization: {
    //   runtimeChunk: 'single',
    // },
  };
};