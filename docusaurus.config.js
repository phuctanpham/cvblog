// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Phuk, Marketing Technologist",
  tagline:
    "An Engineer interested in Customer Succes, SaaS and OpenSource. I believed to open more modern jobs and micro degrees by enterprise driven technologies",
  url: "https://phuctanpham.gihub.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "phuctanpham",
  projectName: "cvblog",

  customFields: {
    newsletter: {
      action: "http://newsletter.phamtanph.uk/add_subscriber",
      method: "post",
      emailFieldName: "member[email]",
      firstNameFieldName: "member[first_name]",
      submitButtonName: "member[subscribe]",
      tosURL: "https://www.getrevue.co/terms",
      privacyPolicyURL: "https://www.getrevue.co/privacy",
      serviceName: "Revue",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/phuctanpham/cvblog/tree/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Phuk`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo-small.png",
      metadata: [
        {
          name: "description",
          content:
            "I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",
        },
        {
          name: "keywords",
          content:
            "fullstack,frontend,backend,developer,engineer,go,golang,javascript,graphql,grpc,rest,react,reactjs,kubernetes,devops,cloud,cloud-native,cka,ckad,open-source,gophers,silesia",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        title: "Phuk",
        logo: {
          alt: "Phuk Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/projects", label: "Projects", position: "left" },
          { to: "/talks", label: "Talks", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Connect",
            items: [
              {
                label: "Email me",
                href: "mailto:contact+blog@phamtanph.uk",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/phuctanpham",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/phuctanpham",
              },
            ],
          },
          {
            title: "Discover",
            items: [
              {
                label: "About me",
                to: "/",
              },
              {
                label: "Projects",
                to: "/projects",
              },
              {
                label: "Talks",
                to: "/talks",
              },
            ],
          },
          {
            title: "Blog feed",
            items: [
              {
                label: "RSS",
                to: "/blog/rss.xml",
              },
              {
                label: "Atom",
                to: "/blog/atom.xml",
              },
              {
                label: "JSON",
                to: "/blog/feed.json",
              },
            ],
          },
        ],
        copyright: `Copyright © 2012-${new Date().getFullYear()} Phuk.`,
      },
      algolia: {
        appId: "QELP6WDIRO",
        apiKey: "99c3bf71f457a726bd66645abbfae17f",
        indexName: "phuk",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
