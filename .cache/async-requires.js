// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-jsx": () => import("/home/kodefant/kode/eiendom/src/pages/404.jsx" /* webpackChunkName: "component---src-pages-404-jsx" */),
  "component---src-pages-index-jsx": () => import("/home/kodefant/kode/eiendom/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-page-2-jsx": () => import("/home/kodefant/kode/eiendom/src/pages/page-2.jsx" /* webpackChunkName: "component---src-pages-page-2-jsx" */)
}

exports.data = () => import("/home/kodefant/kode/eiendom/.cache/data.json")

