// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kodefant/kode/eiendom/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/404.js")),
  "component---src-pages-eiendommer-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/eiendommer.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/index.js")),
  "component---src-pages-kontakt-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/kontakt.js")),
  "component---src-pages-om-js": preferDefault(require("/Users/kodefant/kode/eiendom/src/pages/om.js"))
}

