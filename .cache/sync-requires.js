// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/page-2.js"))
}

