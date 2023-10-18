const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin(
      {
        includeAliases: ['crypto', 'Buffer', 'stream']
      })],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/day-pass" : "/day-pass",
  devServer: {
    https: true,
    port: 8080,
  },
})
