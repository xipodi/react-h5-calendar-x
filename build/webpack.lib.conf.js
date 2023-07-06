const merge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const resolve = p => path.resolve(__dirname, p)
module.exports = merge(baseConf, {
  entry: './src/components/index',
  output: {
    filename: 'index.js',
    path: resolve('../lib'),
    library: '@jd/react-h5-calendar-x',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    }
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
})
