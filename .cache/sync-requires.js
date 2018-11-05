// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/home/kodefant/kode/eiendom/src/pages/404.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/kodefant/kode/eiendom/src/pages/index.jsx")),
  "component---src-pages-page-2-jsx": preferDefault(require("/home/kodefant/kode/eiendom/src/pages/page-2.jsx"))
}

