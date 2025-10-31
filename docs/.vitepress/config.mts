import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';

export default withMermaid(defineConfig({
  title: "OHDSI TAB",
  description: "OHDSI Technical Advisory Board",
  base: '/TAB/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ohdsi/tab' }
    ]
  }
}));
