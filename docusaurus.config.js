// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const { lightTheme, darkTheme } = require('./themes.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BASC',
  tagline: 'Accelerating AI safety research',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lucyfarnik.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/basc-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lucyfarnik', // Usually your GitHub org/user name.
  projectName: 'basc-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BASC',
        logo: {
          alt: 'BASC Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: '/about',
            label: 'About',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/lucyfarnik/basc-website',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'About',
            to: '/about',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bristol AI Safety Centre. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme,
      },
      themeConfig: {
        colorMode: {
          defaultMode: 'dark',
          respectPrefersColorScheme: true,
        },
        image: 'img/logo.png',
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
