(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(140),i=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(l.Link,{to:"/"},"Go back to the homepage"))}},140:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(139),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(141),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},141:function(e,t,a){var n;e.exports=(n=a(143))&&n.default||n},142:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},143:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(49),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},144:function(e,t,a){e.exports={border:"headerTop-module--border--1ND54",react_icons:"headerTop-module--react_icons--3G0ty",topElements:"headerTop-module--topElements--3o2m6",topLeft:"headerTop-module--topLeft--1NyP4",topRight:"headerTop-module--topRight--1gb47",child:"headerTop-module--child--3YnjY"}},147:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){"use strict";var n=a(142),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(152),s=a.n(c),u=a(140),d=a(144),m=a.n(d),p=a(166),f=a(153),h=function(){return l.a.createElement("div",{className:m.a.border},l.a.createElement("div",{className:"container "+m.a.topElements},l.a.createElement(p.b.Provider,{value:{className:m.a.react_icons}},l.a.createElement("div",{className:m.a.topLeft},l.a.createElement("div",{className:m.a.child},l.a.createElement(f.d,null)," ",l.a.createElement("span",null,"Freserveien 39, 0195 Oslo")),l.a.createElement("div",{className:m.a.child},l.a.createElement(f.a,null)," ",l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:dineiendom@kodefant.no"},"dineiendom@kodefant.no"))),l.a.createElement("div",{className:m.a.child},l.a.createElement(f.e,null)," ",l.a.createElement("span",null,"(+47) 413 999 420"))),l.a.createElement("div",{className:m.a.topRight},l.a.createElement("div",{className:m.a.child},l.a.createElement("a",{href:"https://www.facebook.com/kodefant/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(f.b,null))),l.a.createElement("div",{className:m.a.child},l.a.createElement("a",{href:"https://twitter.com/larsparsfromage",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(f.f,null))),l.a.createElement("div",{className:m.a.child},l.a.createElement("a",{href:"https://github.com/kodeFant/kodefant-eiendom",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(f.c,null)))))))},E=function(e){var t=e.siteTitle;return l.a.createElement("header",null,l.a.createElement(h,null),l.a.createElement("div",{className:"container"},t))};E.propTypes={siteTitle:o.a.string};var g=E,v=function(e){e.siteTitle;return l.a.createElement("footer",{className:"container"},"Footer")},y=(a(147),a(149)),b=a.n(y),w=function(e){var t=e.children;return l.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement("div",{className:b.a.grid},l.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(g,{siteTitle:e.site.siteMetadata.title,gridClass:b.a.header}),l.a.createElement("div",null,t),l.a.createElement(v,{siteTitle:e.site.siteMetadata.title,gridClass:b.a.footer}))},data:n})};w.propTypes={children:o.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-page-2-js-0eccf6f3288ef96f4a35.js.map