
import  path from "path"
import  HtmlWebpackPlugin from "html-webpack-plugin" 
import  webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

type Mode = 'production' | "development"

interface EnvVariables  {
  mode:Mode, 
  port: number
}

export default (env:EnvVariables) => {

  const isDev = env.mode === "development"

  const config:webpack.Configuration = {
    mode:env.mode ?? "development",
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contnent.hash].js',
    },
    plugins: 
    [
      new HtmlWebpackPlugin({template:path.resolve(__dirname, 'public', 'index.html')}),
    isDev &&  new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin()
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
          !isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
            "css-loader",
            "sass-loader" ],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        { 
          test: /\.svg$/,
          loader: 'svg-inline-loader'}
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ?{
      port: env.port ?? 3000, 
      open: true
    }: undefined
    
  }

  return config
}