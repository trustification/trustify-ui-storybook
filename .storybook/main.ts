/** @type { import('@storybook/react-webpack5').StorybookConfig } */
import path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  staticDirs: [
    "../src/app/bgimages",
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          configFile: path.resolve(__dirname, "../tsconfig.json"),
          extensions: config.resolve.extensions,
        }),
      ];
    }
    if (config.module) {
      // remove svg from existing rule
      config.module.rules = config.module.rules?.map((rule: any) => {
        if (
          String(rule.test) ===
          String(
            /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/
          )
        ) {
          return {
            ...rule,
            test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
          };
        }

        return rule;
      });
    }

    return config;
  },
};
export default config;
