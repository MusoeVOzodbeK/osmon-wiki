import type { SidebarConfig } from "@vuepress/theme-default";

const sidebar: SidebarConfig = {
  '/devs/rust/': [
    {
      text: "Rust",
      children: [
        '/devs/rust/readme.md',
        '/devs/rust/install.md'
      ]
    }
  ]
};

export default sidebar;
