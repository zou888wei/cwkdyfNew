// const Day = require("dayjs")
// const debug = process.env.NODE_ENV === "development"

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_URL || "/",
  devServer: {
    port: 8080,
    /* 后面添加的代理 */
    proxy: {
      "/orgTest": {
        target: 'http://172.18.1.80/',
        changeOrigin: true,
        pathRewrite: {
          "^/orgTest": "/"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/plugins/element-ui/styles/common/var.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.optimization.splitChunks({
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial"
        },
        vue: {
          name: "vue",
          priority: 10,
          test: /[\\/]node_modules[\\/]_?(vue-router|vuex|vue)/
        },
        ui: {
          name: "ui",
          priority: 30,
          test: /[\\/]node_modules[\\/]_?(element-ui|el-tree-transfer)(.*)/
        },
        "vue-component-plugins": {
          name: "vue-component-plugins",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?(vue-)(.*)/
        }
      }
    })

    // config.plugin("define").tap(definitions => {
    //   Object.assign(definitions[0]["process.env"], {
    //     BUILD_TIME: `"${new Day().format("YYYY-MM-DD HH:mm:ss")}"`
    //   })
    //   return definitions
    // })

    // if (!debug) {
    //   /* 关闭预加载 */
    // }
    config.plugins.delete("prefetch").delete("preload")

    config.resolve.alias.set("vue$", "vue/dist/vue.esm.js")
  },
  productionSourceMap: false
}
