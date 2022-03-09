import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import theme from "./configs/theme";
import plugins from "./configs/plugins";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "uz",
  title: "Osmon Wiki",
  description: "Osmon Dasturlash Tili Wikipediasi",
  theme: "@vuepress/theme-default",
  themeConfig: theme,
  // @ts-ignore
  plugins,
});
