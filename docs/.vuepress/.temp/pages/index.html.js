import comp from "/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"OHDSI TAB\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"OHDSI TAB\",\"heroText\":\"OHDSI TAB\",\"heroImage\":\"images/ohdsi-logo-colored.png\",\"tagline\":\"Observational Health Data Sciences & Informatics Technical Advisory Board\",\"actions\":[{\"text\":\"What is OHDSI?\",\"link\":\"https://www.ohdsi.org\",\"type\":\"primary\"},{\"text\":\"2024 Meeting Notes\",\"link\":\"/2024-Meeting-Notes.md\",\"type\":\"primary\"}],\"footer\":\"Apache 2.0 Licensed | Copyright © 2024 OHDSI\"},\"headers\":[],\"git\":{\"updatedTime\":1733761528000,\"contributors\":[{\"name\":\"Frank DeFalco\",\"username\":\"Frank DeFalco\",\"email\":\"fdefalco@its.jnj.com\",\"commits\":1,\"url\":\"https://github.com/Frank DeFalco\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
