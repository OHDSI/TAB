import comp from "/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/links.html.vue"
const data = JSON.parse("{\"path\":\"/links.html\",\"title\":\"Reference Links\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Reference Links\"},\"headers\":[{\"level\":3,\"title\":\"General Links\",\"slug\":\"general-links\",\"link\":\"#general-links\",\"children\":[]},{\"level\":3,\"title\":\"Forum Communications\",\"slug\":\"forum-communications\",\"link\":\"#forum-communications\",\"children\":[]},{\"level\":3,\"title\":\"Common Data Model Links\",\"slug\":\"common-data-model-links\",\"link\":\"#common-data-model-links\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"links.md\"}")
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
