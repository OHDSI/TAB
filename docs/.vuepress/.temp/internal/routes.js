export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/2024-Meeting-Notes.html", { loader: () => import(/* webpackChunkName: "2024-Meeting-Notes.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/2024-Meeting-Notes.html.js"), meta: {"title":"2024 Meeting Notes"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"OHDSI TAB"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/links.html", { loader: () => import(/* webpackChunkName: "links.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/links.html.js"), meta: {"title":"Reference Links"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
