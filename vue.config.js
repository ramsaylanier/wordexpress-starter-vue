const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const nodeExternals = require("webpack-node-externals");
const merge = require("lodash.merge");
const { theme } = require("./config/client.json");
const path = require("path");

console.log(`Current Theme: ${theme}`);

const TARGET_NODE = process.env.WEBPACK_TARGET === "node";

const createApiFile = TARGET_NODE
  ? "./create-api-server.js"
  : "./create-api-client.js";

const target = TARGET_NODE ? "server" : "client";

module.exports = {
  pluginOptions: {
    ssr: {
      entry: target => `./src/core/ssr/entry-${target}`
    }
  },
  configureWebpack: () => ({
    entry: `./src/core/ssr/entry-${target}`,
    target: TARGET_NODE ? "node" : "web",
    node: TARGET_NODE ? undefined : false,
    plugins: [
      TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin()
    ],
    externals: TARGET_NODE
      ? nodeExternals({
          whitelist: /\.css$/
        })
      : undefined,
    output: {
      libraryTarget: TARGET_NODE ? "commonjs2" : undefined
    },
    optimization: {
      splitChunks: undefined
    },
    resolve: {
      alias: {
        "create-api": createApiFile,
        "@": path.resolve(__dirname, `./src/themes/${theme}`),
        assets: path.resolve(__dirname, "./src/assets"),
        core: path.resolve(__dirname, "./src/core"),
        config: path.resolve(__dirname, "./config/client.json")
      }
    }
  }),
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap(options =>
        merge(options, {
          optimizeSSR: true
        })
      );
  }
};
