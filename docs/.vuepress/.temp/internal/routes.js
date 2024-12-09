export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/2024-Meeting-Notes.html", { loader: () => import(/* webpackChunkName: "2024-Meeting-Notes.html" */"D:/github/TAB/docs/.vuepress/.temp/pages/2024-Meeting-Notes.html.js"), meta: {"title":"2024 Meeting Notes"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/TAB/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/TAB/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
