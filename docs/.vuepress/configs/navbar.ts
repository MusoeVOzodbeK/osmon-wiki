import type { NavbarConfig } from "@vuepress/theme-default";

const navbar: NavbarConfig = [
  {
    text: "Ma'lumot",
    link: "/about/",
  },
  {
    text: "O'rganish",
    link: "/learn/",
  },
  {
    text: "Dasturchilar",
    children: [
      {
        text: "Rust",
        children: ["/devs/rust/readme.md", "/devs/rust/install.md"],
      },
      {
        text: "Qo'llanma",
        children: [
          "/reference/default-theme/config.md",
          "/reference/default-theme/frontmatter.md",
          "/reference/default-theme/components.md",
          "/reference/default-theme/markdown.md",
          "/reference/default-theme/styles.md",
          "/reference/default-theme/extending.md",
        ],
      },
    ],
  },
];

export default navbar;
