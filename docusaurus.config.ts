import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import type * as Redocusaurus from "redocusaurus";

const config: Config = {
  title: "BaseOne Documentation",
  tagline: "Idea to Fintech in minutes",
  favicon: "img/baseone-bg.png",

  // Set the production url of your site here
  url: "https://developer.baseone.co",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "BaseOne", // Usually your GitHub org/user name.
  projectName: "baseone-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/J-rayX/baseone-docs/tree/main/",
        },

        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/vgg/baseone/tree/main/packages/baseone-docs/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          // customCss: "./src/css/custom.css",
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
    // Redocusaurus config
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "virtual-accounts",
            route: "/api/va",
            spec: "api/va-yaml.yaml",
          },
          {
            id: "collect",
            route: "/api/collect",
            spec: "api/collect-yaml.yaml",
          },
          {
            id: "cards",
            route: "/api/card",
            spec: "api/card-yaml.yaml",
          },
          {
            id: "kyc",
            route: "/api/kyc",
            spec: "api/kyc-yaml.yaml",
          },
          {
            id: "payout",
            route: "/api/payout",
            spec: "api/payout-yaml.yaml",
          },
        ],
        theme: {
          // site colors
          primaryColor: "#1890ff",
        },
        // Options for ReDoc's scroll settings
        // options: {
        //   disableSearch: true,
        //   sideNavStyle: 'path-only',
        // },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api-docs",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./sidebars.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "BaseOne Documentation",
      logo: {
        alt: "BaseOne Logo",
        src: "img/baseone_logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          // position: "right",
          label: "Guides",
          to: "/docs",
        },
        {
          label: "API Reference",
          position: "left",
          to: "/api",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} BaseOne.co.`,
    },
    prism: {
      theme: prismThemes.github,
      // darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
