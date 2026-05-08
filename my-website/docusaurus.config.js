// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

const simplePlantUML = require('@akebifiky/remark-simple-plantuml');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FoodsharApp',
  tagline: 'Technical documentation for FoodsharApp',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Portist.github.io',
  baseUrl: '/FoodsharApp/',

  organizationName: 'Portist',
  projectName: 'FoodsharApp',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [['drawio', {}]],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [simplePlantUML],
          editUrl:
            'https://github.com/Portist/FoodsharApp/edit/main/my-website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'FoodsharApp',
      logo: {
        alt: 'FoodsharApp Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/api/api-reference',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://github.com/Portist/FoodsharApp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'API Reference',
              to: '/docs/api/api-reference',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Portist/FoodsharApp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FoodsharApp. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;