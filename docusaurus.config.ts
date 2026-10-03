import type {PrismTheme} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// monochrome syntax themes: no colors, only ink and paper
const inkOnPaper: PrismTheme = {
  plain: {color: '#000000', backgroundColor: 'transparent'},
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {color: 'rgba(0,0,0,0.45)', fontStyle: 'italic'},
    },
    {types: ['punctuation'], style: {color: 'rgba(0,0,0,0.55)'}},
    {
      types: ['operator', 'entity', 'url'],
      style: {color: 'rgba(0,0,0,0.65)'},
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {color: '#000000', fontWeight: 'bold'},
    },
    {
      types: [
        'property',
        'tag',
        'constant',
        'symbol',
        'deleted',
        'boolean',
        'number',
        'selector',
        'attr-name',
        'string',
        'char',
        'builtin',
        'inserted',
        'function',
        'class-name',
        'regex',
        'variable',
        'important',
      ],
      style: {color: '#000000'},
    },
  ],
};

const paperOnInk: PrismTheme = {
  plain: {color: '#ffffff', backgroundColor: 'transparent'},
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {color: 'rgba(255,255,255,0.45)', fontStyle: 'italic'},
    },
    {types: ['punctuation'], style: {color: 'rgba(255,255,255,0.55)'}},
    {
      types: ['operator', 'entity', 'url'],
      style: {color: 'rgba(255,255,255,0.7)'},
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {color: '#ffffff', fontWeight: 'bold'},
    },
    {
      types: [
        'property',
        'tag',
        'constant',
        'symbol',
        'deleted',
        'boolean',
        'number',
        'selector',
        'attr-name',
        'string',
        'char',
        'builtin',
        'inserted',
        'function',
        'class-name',
        'regex',
        'variable',
        'important',
      ],
      style: {color: '#ffffff'},
    },
  ],
};

const config: Config = {
  title: 'Andrei Sherikhov',
  tagline: '18 y/o dev from Colombia. coding since i was 7.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://sherikxd.github.io',
  baseUrl: '/',

  organizationName: 'Sherikxd',
  projectName: 'portafoli',

  onBrokenLinks: 'throw',

  // black & white typography: Space Grotesk for everything, JetBrains Mono for labels
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;700&display=swap',
      crossOrigin: 'anonymous',
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false, // this site is a portfolio + blog, no docs section
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          postsPerPage: 6,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    metadata: [
      {name: 'author', content: 'Andrei Sherikhov'},
      {
        name: 'keywords',
        content:
          'Andrei Sherikhov, Sherikxd, developer, Colombia, AyudaEnCali, Aureo, fire detection, portfolio',
      },
    ],
    navbar: {
      title: 'sherikxd',
      logo: {
        alt: 'Andrei Sherikhov avatar',
        src: 'img/avatar.svg',
      },
      items: [
        {to: '/', label: 'home', position: 'left'},
        {to: '/#work', label: 'work', position: 'left'},
        {to: '/#achievements', label: 'wins', position: 'left'},
        {to: '/blog', label: 'blog', position: 'left'},
        {
          href: 'https://github.com/Sherikxd',
          label: 'github',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/',
          label: 'linkedin',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'me',
          items: [
            {label: 'home', to: '/'},
            {label: 'blog', to: '/blog'},
            {label: 'email me', href: 'mailto:sherikdev@gmail.com'},
          ],
        },
        {
          title: 'code',
          items: [
            {label: 'github', href: 'https://github.com/Sherikxd'},
            {label: 'aureo', href: 'https://github.com/Sherikxd/aureo'},
            {
              label: 'ayudaencali',
              href: 'https://github.com/Sherikxd/AyudaEnCali',
            },
            {
              label: 'fire detection',
              href: 'https://github.com/Sherikxd/deteccion-incendio-hackathon',
            },
          ],
        },
        {
          title: 'elsewhere',
          items: [
            {
              label: 'linkedin',
              href: 'https://www.linkedin.com/in/andrei-sherikhov-3a06582a7/',
            },
            {label: 'dev.to', href: 'https://dev.to/sherikxd'},
            {
              label: 'ethcali winners',
              href: 'https://www.ethcali.org/builders-tour/winners',
            },
          ],
        },
      ],
      copyright: `built with react bits + docusaurus · © ${new Date().getFullYear()} Andrei Sherikhov`,
    },
    prism: {
      theme: inkOnPaper,
      darkTheme: paperOnInk,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
