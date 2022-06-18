title: 'ScratchTools Docs',
  url: 'https://STForScratch.github.io',
  baseUrl: '/New-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'ScratchTools',
  projectName: 'docs',
  trailingSlash: false,
  favicon: 'https://cdn.glitch.global/cb2bf217-ffc5-4d43-a8ef-956942c7aa4d/favicon.png?v=1655008522709',
    plugins: [
    '@docusaurus/plugin-content-blog',
    '@docusaurus/plugin-content-pages',
  ],
  themes: ['@docusaurus/theme-classic'],
  themeConfig: {
    navbar: {
      title: 'ScratchTools Docs',
      items: [
        {
          href: 'https://github.com/STForScratch/ScratchTools/pulls/',
          label: 'Develop',
          position: 'left'
        },
        {
          href: 'https://tools.scratchstatus.org/',
          label: 'Download',
          position: 'left'
        },
        {
          href: 'https://tools.scratchstatus.org/',
          label: 'ScratchTools',
          position: 'right'
        },
        {
          href: 'https://github.com/STForScratch/ScratchTools/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  ],
};
