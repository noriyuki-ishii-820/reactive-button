(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{62:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),c=n.n(r),i=n(73),l=n(92),o=n(76),s=n(72),u=n(77),m=n(63),d=n.n(m),h=n(74),p=n(79),f=n(80),b=n(85),E="\nfunction App() {\n  const [state, setState] = useState('idle');\n\n  const onClickHandler = () => {\n    setState('loading');\n    setTimeout(() => {\n      setState('success');\n    }, 2000);\n  }\n\n  return (\n    <ReactiveButton\n      buttonState={state}\n      onClick={onClickHandler}\n    />\n  );\n}\n".trim(),x={ReactiveButton:h.a,useState:r.useState},v=[{title:"Reactive",description:c.a.createElement(c.a.Fragment,null,"Replacing traditional button with reactive behavior.")},{title:"Customizable",description:c.a.createElement(c.a.Fragment,null,"Comes with proper customization. Use the beautiful default themes or create your own.")},{title:"Not a rocket science",description:c.a.createElement(c.a.Fragment,null,"You know button? Use it just like a button. It's super easy and simple.")},{title:"Lightweight",description:c.a.createElement(c.a.Fragment,null,"Extremely small in size. Less than 20 KB with zero dependency.")},{title:"Flexible",description:c.a.createElement(c.a.Fragment,null,"Reactive button is an isolated component. Use it with any UI library.")},{title:"Progress Indicator",description:c.a.createElement(c.a.Fragment,null,"Don't just click button. See what is happening behind your button click.")}];function g(e){var t=e.title,n=e.description;return c.a.createElement("div",{className:Object(i.a)("col col--4 text--center p-4",d.a.feature)},c.a.createElement("h3",null,t),c.a.createElement("p",null,n))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e,n=Object(r.useState)(!1),m=n[0],w=n[1];return Object(r.useEffect)((function(){w(!0)}),[]),c.a.createElement(l.a,{title:""+t.title,description:""+t.tagline},c.a.createElement("header",{className:Object(i.a)("hero ",d.a.heroBanner)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text--center"},c.a.createElement("img",{alt:"Reactive Button",className:d.a.logo,src:Object(u.a)("img/logo/logo.png")})),c.a.createElement("h1",{className:"hero__title"},c.a.createElement("span",{className:d.a.heroProjectKeywords},"React"),c.a.createElement("span",{className:d.a.heroProjectKeywordsSecondary},"ive")," ",c.a.createElement("span",{className:d.a.heroProjectKeywords},"Button")),c.a.createElement("p",{className:"hero__subtitle"},t.tagline),c.a.createElement("div",{className:d.a.buttons},c.a.createElement(o.a,{className:Object(i.a)("",d.a.getStarted),to:Object(u.a)("docs/")},c.a.createElement(h.a,{style:{display:m?"block":"none"},color:"dark",size:"large",idleText:c.a.createElement("span",null,"Get Started \xa0\xa0",c.a.createElement(p.a,{icon:f.a})),width:"170px",height:"49px",className:"fadeIn"}))))),c.a.createElement("main",null,c.a.createElement("section",{className:d.a.exampleComponent},c.a.createElement("div",{className:d.a.exampleComponent__container},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--12"},c.a.createElement("div",{className:d.a.exampleComponent__item},c.a.createElement(b.a,{code:E,scope:x,height:"250px"}))))))),c.a.createElement("main",null,v&&v.length>0&&c.a.createElement("section",{className:d.a.features},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},v.map((function(e,t){return c.a.createElement(g,Object(a.a)({key:t},e))})))))))}},85:function(e,t,n){"use strict";var a=n(97),r=n(0),c=n.n(r),i=n(98),l=n(93),o=n(82),s=n(84);function u(){var e=Object(a.a)(["\n    display: block;\n    padding: 0.5rem;\n    background: ",";\n    color: ",";\n    white-space: pre-wrap;\n    text-align: left;\n    font-size: 0.9em;\n    font-family: 'Source Code Pro', monospace;\n    "]);return u=function(){return e},e}function m(){var e=Object(a.a)(["\n    position: relative;\n    padding: 1.5rem;\n    background: ",";\n    color: black;\n    height: auto;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n    flex-wrap: wrap;\n    ",";\n    "]);return m=function(){return e},e}function d(){var e=Object(a.a)(["\n    font-family: 'Source Code Pro', monospace;\n    font-size: 14px;\n    height: ",";\n    max-height: ",";\n    overflow: auto;\n    ",";\n    * > textarea:focus {\n        outline: none;\n    }\n    "]);return d=function(){return e},e}function h(){var e=Object(a.a)(["\n    flex-basis: ",";\n    width: ",";\n    max-width: ",";\n    @media (max-width: 600px) {\n        flex-basis: auto;\n        width: 100%;\n        max-width: 100%;\n        height: ",";\n        max-height: ",";\n    }\n    "]);return h=function(){return e},e}function p(){var e=Object(a.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: stretch;\n    align-items: stretch;\n    @media (max-width: 600px) {\n        flex-direction: column;\n    }\n    "]);return p=function(){return e},e}function f(){var e=Object(a.a)(["\n    border-radius: 3px;\n    box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);\n    overflow: hidden;\n    margin-bottom: 100px;\n    "]);return f=function(){return e},e}t.a=function(e){var t=e.noInline,n=e.code,a=e.scope,r=e.height,b=e.previewOnly,E=void 0!==b&&b,x=Object(o.a)().isDarkTheme,v=Object(i.b)(l.d)(f()),g=i.b.div(p()),w=Object(i.a)(h(),E?"100%":"50%",E?"100%":"50%",E?"100%":"50%",r,r),j=i.b.div(d(),r,r,w),y=Object(i.b)(l.c)(m(),x?"#232525":"#e3eaea",w),O=Object(i.b)(l.b)(u(),"#ff5555","#f8f8f2");return c.a.createElement(v,{code:n,noInline:t,theme:s.a,scope:a},c.a.createElement(g,null,!E&&c.a.createElement(j,null,c.a.createElement(l.a,null)),c.a.createElement(y,null)),c.a.createElement(O,null))}},95:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(87),i=n.n(c),l=n(78),o=n(72);t.a=function(e){var t=Object(a.useRef)(!1),c=Object(a.useRef)(null),s=Object(l.useHistory)(),u=Object(o.a)().siteConfig,m=(void 0===u?{}:u).baseUrl,d=function(){t.current||(Promise.all([fetch(m+"search-doc.json").then((function(e){return e.json()})),fetch(m+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(16),n.e(19)]).then(n.bind(null,106)),n.e(11).then(n.t.bind(null,104,7))]).then((function(e){!function(e,t,n){new n({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,n){var a=m+n.url;document.createElement("a").href=a,s.push(a)}})}(e[0],e[1],e[2].default)})),t.current=!0)},h=Object(a.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);