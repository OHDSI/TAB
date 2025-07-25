import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/TAB/",
  theme: defaultTheme({
    logo: 'images/ohdsi-logo-colored.png',
    docsRepo: 'ohdsi/tab',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLink: true,
    lastUpdated: true
  }),
  contributors: true,
  title: 'OHDSI Technical Advisory Board'
})