(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(167);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"Siden du prøver å finne eksisterer ikke.")))}},143:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return E}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(142),c=t.n(o);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var m=t(144),s=t.n(m);t.d(a,"PageRenderer",function(){return s.a});var u=t(34);t.d(a,"parsePath",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},144:function(e,a,t){var n;e.exports=(n=t(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Din Eiendomsbedrift med kodeFant"}}}}},147:function(e,a,t){"use strict";t.r(a);t(33);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),o=t(48),c=t(2),m=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=m},148:function(e,a,t){e.exports={topContainer:"headerTop-module--topContainer--3x6Pr container",headerTop:"headerTop-module--headerTop--VU9y-",react_icons:"headerTop-module--react_icons--2PfXx",topElements:"headerTop-module--topElements--TP7PX",topLeft:"headerTop-module--topLeft--rhg4Y",topRight:"headerTop-module--topRight--2NpUM",child:"headerTop-module--child--2YbaX"}},151:function(e,a,t){e.exports={headerBottom:"headerBottom-module--headerBottom--23kw9 container"}},154:function(e,a,t){e.exports={navLink:"headerNav-module--navLink--cetdO",nav:"headerNav-module--nav--aEIUM",navbar:"headerNav-module--navbar--3Geas",mobileMenuVisible:"headerNav-module--mobileMenuVisible--1c-78",active:"headerNav-module--active--1kSXt",hamburger:"headerNav-module--hamburger--3N0PQ",inMenu:"headerNav-module--inMenu--nv-WA",menuText:"headerNav-module--menuText--BvEr1",mobileOnly:"headerNav-module--mobileOnly--3eqSJ",mobileBrand:"headerNav-module--mobileBrand--FatYY headerNav-module--mobileOnly--3eqSJ"}},157:function(e,a,t){e.exports={brand:"logo-module--brand--2poag"}},160:function(e,a,t){e.exports={footer:"footer-module--footer--aI1t5",footerContainer:"footer-module--footerContainer--16TxU container",footerArea:"footer-module--footerArea--mW45R",contactInfo:"footer-module--contactInfo--ZdhRB",socialMedia:"footer-module--socialMedia--2SeAg",property:"footer-module--property--1RJIx",price:"footer-module--price--hBWNW",image:"footer-module--image--3dmha",galleryGrid:"footer-module--galleryGrid--2RK7f",galleryImage:"footer-module--galleryImage--1BM0o",copyright:"footer-module--copyright--1ra9Q",react_icons:"footer-module--react_icons--KcPyL"}},163:function(e,a,t){},165:function(e,a,t){},167:function(e,a,t){"use strict";var n=t(146),r=t(0),l=t.n(r),i=t(4),o=t.n(i),c=t(178),m=t.n(c),s=t(143),u=t(148),d=t.n(u),p=t(225),E=t(171),f=function(){return l.a.createElement(s.Link,{to:"kontakt"},l.a.createElement(E.h,null)," ",l.a.createElement("span",null,"Freserveien 39, 0195 Oslo"))},h=function(){return l.a.createElement("a",{href:"mailto:dineiendom@kodefant.no"},l.a.createElement(E.b,null)," ",l.a.createElement("span",null,"dineiendom@kodefant.no"))},v=function(){return l.a.createElement(s.Link,{to:"kontakt"},l.a.createElement(E.j,null)," ",l.a.createElement("span",null,"(+47) 413 999 420"))},g=function(){return l.a.createElement("a",{href:"https://www.facebook.com/kodefant/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E.c,null))},b=function(){return l.a.createElement("a",{href:"https://twitter.com/larsparsfromage",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E.m,null))},N=function(){return l.a.createElement("a",{href:"https://github.com/kodeFant/kodefant-eiendom",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(E.e,null))},y=function(){return l.a.createElement("div",{className:d.a.headerTop},l.a.createElement("div",{className:d.a.topContainer+" "+d.a.topElements},l.a.createElement(p.b.Provider,{value:{className:d.a.react_icons}},l.a.createElement("div",{className:d.a.topLeft},l.a.createElement("div",{className:d.a.child},l.a.createElement(f,null)),l.a.createElement("div",{className:d.a.child},l.a.createElement(h,null)),l.a.createElement("div",{className:d.a.child},l.a.createElement(v,null))),l.a.createElement("div",{className:d.a.topRight},l.a.createElement("div",{className:d.a.child},l.a.createElement(g,null)),l.a.createElement("div",{className:d.a.child},l.a.createElement(b,null)),l.a.createElement("div",{className:d.a.child},l.a.createElement(N,null))))))},k=t(151),T=t.n(k),M=t(7),w=t.n(M),x=(t(33),t(154)),C=t.n(x),I=t(179),V=t(157),P=t.n(V),q=function(e){return l.a.createElement("div",{className:P.a.brand,style:e.style},l.a.createElement("span",null,"Din"),l.a.createElement("br",null),"Eiendomsbedrift")};q.propTypes={style:o.a.object};var L=q,R=function(e){return l.a.createElement(s.Link,Object.assign({},e,{activeClassName:C.a.active,className:C.a.navLink}),e.children)},S=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).state={mobileMenuVisible:!1},a.handleClick=function(){a.setState({mobileMenuVisible:!a.state.mobileMenuVisible})},a}return w()(a,e),a.prototype.render=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:C.a.nav},l.a.createElement("div",{className:C.a.navbar+" "+(this.state.mobileMenuVisible?C.a.mobileMenuVisible:null)},l.a.createElement("div",{className:C.a.mobileBrand},l.a.createElement(L,null)),l.a.createElement(R,{to:"/"},"Hjem"),l.a.createElement(R,{to:"om"},"Om"),l.a.createElement(R,{to:"eiendommer"},"Eiendommer"),l.a.createElement(R,{to:"kontakt"},"Kontakt")),l.a.createElement("div",{className:C.a.hamburger+" "+(this.state.mobileMenuVisible?C.a.inMenu:null)}," ",l.a.createElement("span",{style:this.state.mobileMenuVisible?{display:"none"}:null,className:C.a.menuText,onClick:this.handleClick},"Meny"),l.a.createElement(I.HamburgerButton,{open:this.state.mobileMenuVisible,onClick:this.handleClick,width:this.state.mobileMenuVisible?40:18,height:this.state.mobileMenuVisible?30:15,strokeWidth:2,color:"#212121",animationDuration:.5}))))},a}(r.Component),B=function(){return l.a.createElement("div",{className:T.a.headerBottom},l.a.createElement(L,null),l.a.createElement("div",{className:T.a.nav},l.a.createElement(S,null)))},A=function(){return l.a.createElement("header",{style:{boxShadow:"0px 0px 3px 0px rgba(0, 0, 0, 0.75)"}},l.a.createElement(y,null),l.a.createElement(B,null))};A.propTypes={siteTitle:o.a.string};var j=A,G=t(160),_=t.n(G),F=function(){return l.a.createElement("div",{className:_.a.footerArea},l.a.createElement(L,null),l.a.createElement("p",null,"Din eiendomsbedrift bør presenteres så godt som mulig. Å bruke en webutvikler er en smart investering i det lange løp."),l.a.createElement("div",{className:_.a.contactInfo},l.a.createElement(p.b.Provider,{value:{className:_.a.react_icons}},l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(v,null))),l.a.createElement("div",{className:_.a.socialMedia},l.a.createElement(p.b.Provider,{value:{size:"1.1rem"}},l.a.createElement(g,null),l.a.createElement(b,null),l.a.createElement(N,null))))},O=function(){return l.a.createElement("div",{className:_.a.footerArea},l.a.createElement("h2",null,"Siste eiendommer"),l.a.createElement("hr",null),l.a.createElement("div",{className:"lastProperties"},l.a.createElement("div",{className:_.a.property},l.a.createElement("div",{className:_.a.image}),l.a.createElement("p",null,"Vestvendt familieleilighet med utsikt mot havet.",l.a.createElement("span",{className:_.a.price},"1,2 millioner"))),l.a.createElement("div",{className:_.a.property},l.a.createElement("div",{className:_.a.image}),l.a.createElement("p",null,"Vestvendt familieleilighet med utsikt mot havet.",l.a.createElement("span",{className:_.a.price},"1,2 millioner"))),l.a.createElement("div",{className:_.a.property},l.a.createElement("div",{className:_.a.image}),l.a.createElement("p",null,"Vestvendt familieleilighet med utsikt mot havet.",l.a.createElement("span",{className:_.a.price},"1,2 millioner")))))},D=function(){return l.a.createElement("div",{className:_.a.footerArea},l.a.createElement("h2",null,"Galleri"),l.a.createElement("hr",null),l.a.createElement("div",{className:_.a.galleryGrid},l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage}),l.a.createElement("div",{className:_.a.galleryImage})))},U=function(){return l.a.createElement("div",{className:_.a.footerArea},l.a.createElement("h2",null,"Nyhetsbrev"),l.a.createElement("hr",null),l.a.createElement("p",null,"Et nyhetsbrev krever litt innsats, men lar deg holde kontakt med boliginteresserte over tid."),l.a.createElement("form",null,l.a.createElement("input",{type:"email",placeholder:"Din epost"}),l.a.createElement("button",{onClick:function(e){return e.preventDefault()}},"Abonnér")),"(Kun for demonstrasjon. Det skjer ingen ting om du melder deg på dette nyhetsbrevet)")},Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:_.a.footer},l.a.createElement("div",{className:_.a.footerContainer},l.a.createElement(F,null),l.a.createElement(O,null),l.a.createElement(D,null),l.a.createElement(U,null))),l.a.createElement("div",{className:_.a.copyright},l.a.createElement("div",{className:"container"},"Alle rettigheter 2018 © Lars Lillo Ulvestad /"," ",l.a.createElement("a",{href:"https://kodefant.no"},"kodeFant"))))};Q.propTypes={siteTitle:o.a.string};var J=Q,W=(t(163),t(165)),K=t.n(W),X=function(e){var a=e.children;return l.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement("div",{className:K.a.grid},l.a.createElement(m.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},l.a.createElement("html",{lang:"en"})),l.a.createElement(j,{siteTitle:e.site.siteMetadata.title,gridClass:K.a.header}),l.a.createElement("div",null,a),l.a.createElement(J,{siteTitle:e.site.siteMetadata.title,gridClass:K.a.footer}))},data:n})};X.propTypes={children:o.a.node.isRequired};a.a=X}}]);
//# sourceMappingURL=component---src-pages-404-js-20dcb0089cd4dc9158ac.js.map