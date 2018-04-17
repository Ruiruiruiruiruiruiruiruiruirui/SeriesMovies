const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const pathSrc = (...paths) => path.join(__dirname, 'src', ...paths)
const pathBuild = (...paths) => path.join(__dirname, 'dist', ...paths)
const pathData = (...paths) => path.join(__dirname, 'data', ...paths)

const jsEntry = pathSrc('index.jsx')

// init config
const config = {
  context: pathSrc(),
  entry: ['react-hot-loader/patch', require.resolve('babel-polyfill'), jsEntry],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [pathSrc(), pathData(), 'node_modules']
  },
  module: {rules: []},
  plugins: []
}


// ----------------------------------------------------------
// output
config.output = {
  path: pathBuild(),
  filename: 'assets/js/[name].js'
}

// ----------------------------------------------------------
// dev server
config.devServer = {
  port: 1337,
  host: '0.0.0.0',
  compress: true,
  disableHostCheck: true
}

// ----------------------------------------------------------
// rules
// handle js/jsx
config.module.rules.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [['es2015', {modules: false}], 'react', "stage-0"]
      }
    }
  ]
})


config.module.rules.push({
  test: /\.md$/,
  use: [
    {
      loader: "babel-loader"
    },
    {
      loader: "axe-markdown-loader"
    }
  ]
})

config.module.rules.push({
  test: /\.css$/,
  exclude: /node_modules/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        sourceMap: true
      }
    }
  ]
})


config.module.rules.push(
  {
    test: /\.css$/,
    include: /node_modules/,
    use: ['style-loader', 'css-loader']
  }
)

// add rule to support json
config.module.rules.push({
  test: /\.(json)$/,
  use: [
    `json-loader/`
  ]
})

// ----------------------------------------------------------
// plugins
// show named module of hot reload
config.plugins.push(new webpack.NamedModulesPlugin())


// copy HTML entry file
config.plugins.push(new HtmlWebpackPlugin({
  filename: pathBuild('index.html'),
  template: pathSrc('index.html'),
  title: 'Book Discovery',
  appMountId: 'app',
  mobile: true,
  inject: false,
}))

// copy data folder
config.plugins.push(new CopyWebpackPlugin([{
  from: pathSrc('..', 'data'),
  to: pathBuild('data')
}]))

module.exports = config
