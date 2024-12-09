export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/2024-Meeting-Notes.html", { loader: () => import(/* webpackChunkName: "2024-Meeting-Notes.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/2024-Meeting-Notes.html.js"), meta: {"title":"2024 Meeting Notes"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"OHDSI TAB"} }],
  ["/links.html", { loader: () => import(/* webpackChunkName: "links.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/links.html.js"), meta: {"title":"Reference Links"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/fjd/Documents/OHDSI/tab/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
