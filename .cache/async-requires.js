// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-eiendom-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/eiendom.js" /* webpackChunkName: "component---src-pages-eiendom-js" */),
  "component---src-pages-eiendommer-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/eiendommer.js" /* webpackChunkName: "component---src-pages-eiendommer-js" */),
  "component---src-pages-index-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-kontakt-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/kontakt.js" /* webpackChunkName: "component---src-pages-kontakt-js" */),
  "component---src-pages-om-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/om.js" /* webpackChunkName: "component---src-pages-om-js" */),
  "component---src-pages-suksess-js": () => import("/home/kodefant/kode/kodefant-eiendom/src/pages/suksess.js" /* webpackChunkName: "component---src-pages-suksess-js" */)
}

exports.data = () => import("/home/kodefant/kode/kodefant-eiendom/.cache/data.json")

