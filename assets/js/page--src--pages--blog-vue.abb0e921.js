(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8tYL":function(t,a,e){"use strict";e.r(a);var i=e("Kw5r"),s=e("DOVJ"),n=(e("Y6W1"),e("VTBJ")),l=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),r={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,i=a.data,r=a.parent,c=e.info,u=e.showLinks,d=e.showNavigation,p=e.ariaLabel,g=function(t,a){var e=t.currentPage,i=void 0===e?1:e,s=t.totalPages,n=void 0===s?1:s,l=Math.ceil(a/2),r=Math.floor(i-l),o=Math.floor(i+l);n<=a?(r=0,o=n):i<=l?(r=0,o=a):i+l>=n&&(r=n-a,o=n);for(var c=[],u=r+1;u<=o;u++)c.push(u);return{current:i,total:n,start:r,end:o,pages:c}}(c,e.range),f=g.current,v=g.total,b=g.pages,C=g.start,L=g.end,y=Object(l.d)(r.$route),h=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(l=e.ariaCurrentLabel);var c={to:o(y,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,r],attrs:Object(n.a)(Object(n.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":f===a})},[i])},S=u?b.map((function(t){return h(t,t,e.ariaLinkLabel)})):[];if(d){var k=e.firstLabel,m=e.prevLabel,_=e.nextLabel,x=e.lastLabel,P=e.ariaFirstLabel,w=e.ariaPrevLabel,j=e.ariaNextLabel,N=e.ariaLastLabel,O=e.firstClass,B=e.prevClass,A=e.nextClass,$=e.lastClass,D=e.navClass;f>1&&S.unshift(h(f-1,m,w,[B,D])),C>0&&S.unshift(h(1,k,P,[O,D])),f<v&&S.push(h(f+1,_,j,[A,D])),L<v&&S.push(h(v,x,N,[$,D]))}return S.length<2?null:t("nav",Object(n.a)(Object(n.a)({},i),{},{attrs:{role:"navigation","aria-label":p}}),S)}};function o(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(l.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var c={metaInfo:{title:"Blog"},components:{Pager:r}},u=e("KHd+"),d=i.a.config.optionMergeStrategies.computed,p={articles:{totalCount:1,pageInfo:{totalPages:1,currentPage:1,isFirst:!0,isLast:!0},edges:[{node:{id:"dd44a4941ce357a20836bde09bbb0273",title:"A cool title",subtitle:"A cool title",path:"/blog/test/",cover:"https://www.fillmurray.com/1920/1080"}}]}},g=function(t){var a=t.options;a.__staticData?a.__staticData.data=p:(a.__staticData=i.a.observable({data:p}),a.computed=d({$static:function(){return a.__staticData.data}},a.computed))},f=Object(u.a)(c,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("section",{staticClass:"hero is-primary"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n          Blog\n        ")]),e("h2",{staticClass:"subtitle"},[t._v("\n          Nos articles\n        ")])])])]),e("section",{staticClass:"section",attrs:{id:"content"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},t._l(t.$static.articles.edges,(function(a){return e("div",{key:a.node.id,staticClass:"column is-4-desktop is-6-tablet"},[e("g-link",{attrs:{to:a.node.path}},[e("div",{staticClass:"card"},["null"!==a.node.cover?e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{attrs:{src:a.node.cover,alt:"Product 2 Name"}})])]):t._e(),e("div",{staticClass:"card-content"},[e("p",{staticClass:"title has-text-black is-4"},[t._v(t._s(a.node.title)+"\n                ")]),e("p",{staticClass:"subtitle is-4"},[t._v(t._s(a.node.subtitle))])])])])],1)})),0),e("Pager",{attrs:{info:t.$static.articles.pageInfo}})],1)])])}),[],!1,null,null,null);"function"==typeof g&&g(f);a.default=f.exports}}]);