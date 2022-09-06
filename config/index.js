const path = require("path");

const commonPostCSSConfig = {
  pxtransform: {
    enable: true,
    config: {}
  },
  autoprefixer: {
    enable: true,
    config: {}
  },
  cssModules: {
    enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
    config: {
      namingPattern: "module", // 转换模式，取值为 global/module
      generateScopedName: "[folder]_[local]_[hash:base64:5]"
    }
  }
}

const config = {
  projectName: "time-tracker",
  date: "2022-9-5",
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  compiler: {
    type: "webpack5",
    prebundle: {
      exclude: ['react-native'] // 修复编译时 react-native 引起的奇怪错误。
    },
  },
  sourceRoot: "src",
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
    IS_H5: process.env.TARO_ENV === "h5",
    IS_RN: process.env.TARO_ENV === "rn",
    IS_WEAPP: process.env.TARO_ENV === "weapp"
  },
  alias: {
    "$src": path.resolve(__dirname, "..", "src"),
    "$components": path.resolve(__dirname, "..", "src/components"),
    "$pages": path.resolve(__dirname, "..", "src/components/pages"),
    "$xuder": path.resolve(__dirname, "..", "src/components/xuder"),
    "$utils": path.resolve(__dirname, "..", "src/components/utils"),
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: "react",
  mini: {
    postcss: {
      ...commonPostCSSConfig,
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
    }
  },
  h5: {
    publicPath: "/Time-Tracker/",
    staticDirectory: "static",
    esnextModules: ["taro-ui"],
    postcss: {
      ...commonPostCSSConfig,
    }
  },
  rn: {
    output: {
      ios: "ios/main.jsbundle",
      iosAssetsDest: "ios",
      android: "android/index.android.bundle",
      androidAssetsDest: "android"
    }
  }
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === "development") {
    return merge({}, config, require("./dev"));
  }
  return merge({}, config, require("./prod"));
};
