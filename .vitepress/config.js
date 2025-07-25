import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Documentation Site',
  description: 'A VitePress documentation site',
  
  // Base URL for GitHub Pages deployment
  base: '/sense-table-doc/',
  
 
  
  themeConfig: {
    // Navigation menu
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],

    // Sidebar navigation
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Methods', link: '/api/methods' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SmooSenseAI/sense-table-doc' }
    ],

    // Footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024'
    },

    // Enable search
    search: {
      provider: 'local'
    }
  },

  // Clean URLs (remove .html)
  cleanUrls: true,

  // Last updated
  lastUpdated: true
}) 