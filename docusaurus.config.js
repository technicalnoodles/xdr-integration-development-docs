// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import ScalarOptions from '@scalar/docusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cisco XDR Integration Resources',
  tagline: 'Create an integration with Cisco XDR',
  favicon: 'img/cisco-logo-transparent.png',

  // Set the production url of your site here
  url: 'https://technicalnoodles.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/xdr-integration-development-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Cisco', // Usually your GitHub org/user name.
  projectName: 'xdr-integration-development-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  // },

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'Enrich API',
        id: 'api/enrich',
        route:
          'https://technicalnoodles.github.io/xdr-integration-development-docs/api/enrich',
        showNavLink: true,
        configuration: {
          spec: {
            // Put the URL to your OpenAPI document here:
            url: '/api-specs/iroh-int-enrich.json',
          },
        },
      },
    ],
    [
      '@scalar/docusaurus',
      {
        label: 'Response API',
        id: 'api/response',
        route: '/api/response',
        showNavLink: true,
        configuration: {
          spec: {
            // Put the URL to your OpenAPI document here:
            url: '/api-specs/iroh-int-response.json',
          },
        },
      },
    ],
    [
      '@scalar/docusaurus',
      {
        label: 'Dashboard API',
        id: 'api/dashbaord',
        route: '/api/dashboard',
        showNavLink: true,
        configuration: {
          spec: {
            // Put the URL to your OpenAPI document here:
            url: '/api-specs/iroh-int-dashboard-web-service.json',
          },
        },
      },
    ],

    [
      '@scalar/docusaurus',
      {
        label: 'Private Intel API',
        id: 'api/private-intel',
        route: '/api/private-intel',
        configuration: {
          spec: {
            // Put the URL to your OpenAPI document here:
            url: '/api-specs/privateintel-service.json',
          },
        },
      },
    ],
    // [
    //   '@scalar/docusaurus',
    //   {
    //     label: 'Massive',
    //     id: 'api/massive',
    //     route: '/api/massive',
    //     configuration: {
    //       spec: {
    //         // Put the URL to your OpenAPI document here:
    //         url: '/api-specs/mass.json',
    //       },
    //     },
    //   },
    // ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: '',
          path: 'mdx-docs',
          routeBasePath: '/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Cisco XDR Integration Resources',
        logo: {
          alt: 'Cisco Logo',
          src: 'img/cisco-logo-transparent.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Integration Development',
          },

          {
            href: 'https://cisco.com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Cisco Systems.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
