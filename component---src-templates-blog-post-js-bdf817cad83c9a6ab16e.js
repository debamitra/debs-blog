(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5YLH":function(e,t,n){"use strict";(function(e,r,o){n.d(t,"a",(function(){return u}));var i=n("hX4C"),a="undefined"!=typeof Deno,s=!(a||void 0===e||!e.process||"string"!=typeof r||e.origin&&"string"==typeof e.origin),u=(a&&Deno.build.os,s?o.cwd:a&&Deno.cwd,s?o.exit:a&&Deno.exit,function(){return i.a&&i.a.supports&&i.a.supports("color","var(--c)")?Object(i.d)():n.e(18).then(n.t.bind(null,"dcJa",7)).then((function(){return(i.j.$cssShim$=i.l.__cssshim)?i.j.$cssShim$.i():0}))})}).call(this,n("yLpj"),"node_modules\\@deckdeckgo\\highlight-code\\dist\\esm-es5\\patch-cf9bdeea.js",n("8oxB"))},"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),t.default=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV"),a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,o,i=l(a);function a(){return s(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(t.prototype,n),o&&u(t,o),a}(r.default.Component);t.CommentEmbed=$,$.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},$.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,o,a=d(s);function s(){return c(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),m.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),s}(r.default.Component);t.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=a(n("q1tI")),o=a(n("17x9")),i=n("ZMnY");function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var o=$(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,o,a=f(s);function s(){return u(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,i.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&c(t.prototype,n),o&&c(t,o),s}(r.default.Component);t.CommentCount=m,m.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},s=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),s&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}(new Set(Object.keys(e),Object.keys(t)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e[o]!==t[o]&&!a(e[o]))return!0}}catch(s){r.e(s)}finally{r.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},hX4C:function(e,t,n){"use strict";(function(e,r,o){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return R})),n.d(t,"e",(function(){return Ee})),n.d(t,"f",(function(){return se})),n.d(t,"g",(function(){return w})),n.d(t,"h",(function(){return ae})),n.d(t,"i",(function(){return q})),n.d(t,"j",(function(){return S})),n.d(t,"k",(function(){return Oe})),n.d(t,"l",(function(){return v}));var i,a,s,u,c=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},d=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r},$="deckdeckgo-highlight-code",p=!1,m=!1,h=!1,y=0,g=!1,v="undefined"!=typeof window?window:{},b=v.CSS,w=v.document||{head:{}},S={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},E=function(){return(w.head.attachShadow+"").indexOf("[native")>-1}(),R=function(e){return Promise.resolve(e)},C=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),O=function(e,t,n,r){n&&n.map((function(n){var r=n[0],o=n[1],i=n[2],a=_(e,r),s=j(t,i),u=k(r);S.ael(a,o,s,u),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return S.rel(a,o,s,u)}))}))},j=function(e,t){return function(n){256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}},_=function(e,t){return 4&t?w:e},k=function(e){return 0!=(2&e)},I=function(e,t){return void 0===t&&(t=""),function(){}},N=new WeakMap,P=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=I(0,t.$tagName$),i=function(e,t,n,r){var o=x(t),i=Pe.get(o);if(e=11===e.nodeType?e:w,i)if("string"==typeof i){e=e.head||e;var a=N.get(e),s=void 0;if(a||N.set(e,a=new Set),!a.has(o)){if(S.$cssShim$){var u=(s=S.$cssShim$.createHostStyle(r,o,i,!!(10&t.$flags$)))["s-sc"];u&&(o=u,a=null)}else(s=w.createElement("style")).innerHTML=i;e.insertBefore(s,e.querySelector("link")),a&&a.add(o)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=d(e.adoptedStyleSheets,[i]));return o}(E&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},x=function(e,t){return"sc-"+e.$tagName$},T={},D=function(e){return"object"===(e=typeof e)||"function"===e},M="undefined"!=typeof Deno,L=!(M||void 0===e||!e.process||"string"!=typeof r||e.origin&&"string"==typeof e.origin),q=(M&&Deno.build.os,L?o.cwd:M&&Deno.cwd,L?o.exit:M&&Deno.exit,function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=null,i=null,a=!1,s=!1,u=[],c=function t(n){for(var r=0;r<n.length;r++)o=n[r],Array.isArray(o)?t(o):null!=o&&"boolean"!=typeof o&&((a="function"!=typeof e&&!D(o))&&(o=String(o)),a&&s?u[u.length-1].$text$+=o:u.push(a?A(null,o):o),s=a)};if(c(n),t){t.name&&(i=t.name);var l=t.className||t.class;l&&(t.class="object"!=typeof l?l:Object.keys(l).filter((function(e){return l[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,u,U);var f=A(e,null);return f.$attrs$=t,u.length>0&&(f.$children$=u),f.$name$=i,f}),A=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$name$:null};return n},B={},U={forEach:function(e,t){return e.map(H).forEach(t)},map:function(e,t){return e.map(H).map(t).map(z)}},H=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},z=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),q.apply(void 0,d([e.vtag,t],e.vchildren||[]))}var n=A(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},Q=function(e,t,n,r,o,i){if(n!==r){var a=_e(e,t),s=t.toLowerCase();if("class"===t){var u=e.classList,c=W(n),l=W(r);u.remove.apply(u,c.filter((function(e){return e&&!l.includes(e)}))),u.add.apply(u,l.filter((function(e){return e&&!c.includes(e)})))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var f in r)n&&r[f]===n[f]||(f.includes("-")?e.style.setProperty(f,r[f]):e.style[f]=r[f])}else if(a||"o"!==t[0]||"n"!==t[1]){var d=D(r);if((a||d&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var $=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==$||(e[t]=$)}}catch(p){}null==r||!1===r?!1===r&&""!==e.getAttribute(t)||e.removeAttribute(t):(!a||4&i||o)&&!d&&(r=!0===r?"":r,e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):_e(v,s)?s.slice(2):s[2]+t.slice(3),n&&S.rel(e,t,n,!1),r&&S.ael(e,t,r,!1)}},V=/\s/,W=function(e){return e?e.split(V):[]},Z=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||T,a=t.$attrs$||T;for(r in i)r in a||Q(o,r,i[r],void 0,n,t.$flags$);for(r in a)Q(o,r,i[r],a[r],n,t.$flags$)},Y=function e(t,n,r,o){var i,c,l,f=n.$children$[r],d=0;if(p||(h=!0,"slot"===f.$tag$&&(a&&o.classList.add(a+"-s"),f.$flags$|=f.$children$?2:1)),null!==f.$text$)i=f.$elm$=w.createTextNode(f.$text$);else if(1&f.$flags$)i=f.$elm$=w.createTextNode("");else if(i=f.$elm$=w.createElement(2&f.$flags$?"slot-fb":f.$tag$),Z(null,f,!1),null!=a&&i["s-si"]!==a&&i.classList.add(i["s-si"]=a),f.$children$)for(d=0;d<f.$children$.length;++d)(c=e(t,f,d,i))&&i.appendChild(c);return i["s-hn"]=u,3&f.$flags$&&(i["s-sr"]=!0,i["s-cr"]=s,i["s-sn"]=f.$name$||"",(l=t&&t.$children$&&t.$children$[r])&&l.$tag$===f.$tag$&&t.$elm$&&G(t.$elm$,!1)),i},G=function e(t,n){S.$flags$|=1;for(var r=t.childNodes,o=r.length-1;o>=0;o--){var i=r[o];i["s-hn"]!==u&&i["s-ol"]&&(te(i).insertBefore(i,ee(i)),i["s-ol"].remove(),i["s-ol"]=void 0,h=!0),n&&e(i,n)}S.$flags$&=-2},X=function(e,t,n,r,o,i){var a,s=e["s-cr"]&&e["s-cr"].parentNode||e;for(s.shadowRoot&&s.tagName===u&&(s=s.shadowRoot);o<=i;++o)r[o]&&(a=Y(null,n,o,e))&&(r[o].$elm$=a,s.insertBefore(a,ee(t)))},J=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,m=!0,o["s-ol"]?o["s-ol"].remove():G(o,!0),o.remove())},F=function(e,t,n,r){for(var o,i=0,a=0,s=t.length-1,u=t[0],c=t[s],l=r.length-1,f=r[0],d=r[l];i<=s&&a<=l;)null==u?u=t[++i]:null==c?c=t[--s]:null==f?f=r[++a]:null==d?d=r[--l]:K(u,f)?(ne(u,f),u=t[++i],f=r[++a]):K(c,d)?(ne(c,d),c=t[--s],d=r[--l]):K(u,d)?("slot"!==u.$tag$&&"slot"!==d.$tag$||G(u.$elm$.parentNode,!1),ne(u,d),e.insertBefore(u.$elm$,c.$elm$.nextSibling),u=t[++i],d=r[--l]):K(c,f)?("slot"!==u.$tag$&&"slot"!==d.$tag$||G(c.$elm$.parentNode,!1),ne(c,f),e.insertBefore(c.$elm$,u.$elm$),c=t[--s],f=r[++a]):(o=Y(t&&t[a],n,a,e),f=r[++a],o&&te(u.$elm$).insertBefore(o,ee(u.$elm$)));i>s?X(e,null==r[l+1]?null:r[l+1].$elm$,n,r,a,l):a>l&&J(t,i,s)},K=function(e,t){return e.$tag$===t.$tag$&&("slot"!==e.$tag$||e.$name$===t.$name$)},ee=function(e){return e&&e["s-ol"]||e},te=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode},ne=function(e,t){var n,r=t.$elm$=e.$elm$,o=e.$children$,i=t.$children$,a=t.$tag$,s=t.$text$;null===s?("slot"===a||Z(e,t,!1),null!==o&&null!==i?F(r,o,t,i):null!==i?(null!==e.$text$&&(r.textContent=""),X(r,null,t,i,0,i.length-1)):null!==o&&J(o,0,o.length-1)):(n=r["s-cr"])?n.parentNode.textContent=s:e.$text$!==s&&(r.data=s)},re=[],oe=function(e,t){return 1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t},ie=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||A(null,null),c=(n=t)&&n.$tag$===B?t:q(null,null,t);if(u=r.tagName,o.$attrsToReflect$&&(c.$attrs$=c.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return c.$attrs$[n]=r[t]}))),c.$tag$=null,c.$flags$|=4,e.$vnode$=c,c.$elm$=i.$elm$=r.shadowRoot||r,a=r["s-sc"],s=r["s-cr"],p=E&&0!=(1&o.$flags$),m=!1,ne(i,c),S.$flags$|=1,h){!function e(t){for(var n,r,o,i,a,s,u=0,c=t.childNodes,l=c.length;u<l;u++){if((n=c[u])["s-sr"]&&(r=n["s-cr"]))for(o=r.parentNode.childNodes,i=n["s-sn"],s=o.length-1;s>=0;s--)(r=o[s])["s-cn"]||r["s-nr"]||r["s-hn"]===n["s-hn"]||(oe(r,i)?(a=re.find((function(e){return e.$nodeToRelocate$===r})),m=!0,r["s-sn"]=r["s-sn"]||i,a?a.$slotRefNode$=n:re.push({$slotRefNode$:n,$nodeToRelocate$:r}),r["s-sr"]&&re.map((function(e){oe(e.$nodeToRelocate$,r["s-sn"])&&(a=re.find((function(e){return e.$nodeToRelocate$===r})))&&!e.$slotRefNode$&&(e.$slotRefNode$=a.$slotRefNode$)}))):re.some((function(e){return e.$nodeToRelocate$===r}))||re.push({$nodeToRelocate$:r}));1===n.nodeType&&e(n)}}(c.$elm$);for(var l=void 0,f=void 0,d=void 0,$=void 0,y=void 0,g=void 0,v=0;v<re.length;v++)(f=(l=re[v]).$nodeToRelocate$)["s-ol"]||((d=w.createTextNode(""))["s-nr"]=f,f.parentNode.insertBefore(f["s-ol"]=d,f));for(v=0;v<re.length;v++)if(f=(l=re[v]).$nodeToRelocate$,l.$slotRefNode$){for($=l.$slotRefNode$.parentNode,y=l.$slotRefNode$.nextSibling,d=f["s-ol"];d=d.previousSibling;)if((g=d["s-nr"])&&g["s-sn"]===f["s-sn"]&&$===g.parentNode&&(!(g=g.nextSibling)||!g["s-nr"])){y=g;break}(!y&&$!==f.parentNode||f.nextSibling!==y)&&f!==y&&(!f["s-hn"]&&f["s-ol"]&&(f["s-hn"]=f["s-ol"].parentNode.nodeName),$.insertBefore(f,y))}else 1===f.nodeType&&(f.hidden=!0)}m&&function e(t){var n,r,o,i,a,s,u=t.childNodes;for(r=0,o=u.length;r<o;r++)if(1===(n=u[r]).nodeType){if(n["s-sr"])for(a=n["s-sn"],n.hidden=!1,i=0;i<o;i++)if(u[i]["s-hn"]!==n["s-hn"])if(s=u[i].nodeType,""!==a){if(1===s&&a===u[i].getAttribute("slot")){n.hidden=!0;break}}else if(1===s||3===s&&""!==u[i].textContent.trim()){n.hidden=!0;break}e(n)}}(c.$elm$),S.$flags$&=-2,re.length=0},ae=function(e){return Ce(e).$hostElement$},se=function(e,t,n){var r=ae(e);return{emit:function(e){return ue(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},ue=function(e,t,n){var r=S.ce(t,n);return e.dispatchEvent(r),r},ce=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},le=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ce(e,e.$ancestorComponent$);return Be((function(){return fe(e,t)}))}e.$flags$|=512},fe=function(e,t){var n,r=I(0,e.$cmpMeta$.$tagName$),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=e[0],n=e[1];return he(o,t,n)})),e.$queuedListeners$=null),n=he(o,"componentWillLoad")),r(),ye(n,(function(){return de(e,o,t)}))},de=function(e,t,n){var r=e.$hostElement$,o=I(0,e.$cmpMeta$.$tagName$),i=r["s-rc"];n&&P(e);var a=I(0,e.$cmpMeta$.$tagName$);ie(e,$e(e,t)),S.$cssShim$&&S.$cssShim$.updateHost(r),i&&(i.map((function(e){return e()})),r["s-rc"]=void 0),a(),o();var s=r["s-p"],u=function(){return pe(e)};0===s.length?u():(Promise.all(s).then(u),e.$flags$|=4,s.length=0)},$e=function(e,t){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2}catch(n){ke(n)}return t},pe=function(e){var t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,r=I(0,t),o=e.$lazyInstance$,i=e.$ancestorComponent$;64&e.$flags$?(he(o,"componentDidUpdate"),r()):(e.$flags$|=64,ge(n),he(o,"componentDidLoad"),r(),e.$onReadyResolve$(n),i||me()),e.$onInstanceResolve$(n),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&Ae((function(){return le(e,!1)})),e.$flags$&=-517},me=function(e){ge(w.documentElement),S.$flags$|=2,Ae((function(){return ue(v,"appload",{detail:{namespace:$}})}))},he=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){ke(r)}},ye=function(e,t){return e&&e.then?e.then(t):t()},ge=function(e){return e.classList.add("hydrated")},ve=function(e,t,n,r){var o,i,a=Ce(e),s=a.$instanceValues$.get(t),u=a.$flags$,c=a.$lazyInstance$;if(o=n,i=r.$members$[t][0],n=null==o||D(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o,!(8&u&&void 0!==s||n===s)&&(a.$instanceValues$.set(t,n),c)){if(r.$watchers$&&128&u){var l=r.$watchers$[t];l&&l.map((function(e){try{c[e](n,s,t)}catch(r){ke(r)}}))}2==(18&u)&&le(a,!1)}},be=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],i=e[1][0];31&i||2&n&&32&i?Object.defineProperty(o,r,{get:function(){return e=r,Ce(this).$instanceValues$.get(e);var e},set:function(e){ve(this,r,e,t)},configurable:!0,enumerable:!0}):1&n&&64&i&&Object.defineProperty(o,r,{value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Ce(this);return n.$onInstancePromise$.then((function(){var t;return(t=n.$lazyInstance$)[r].apply(t,e)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;S.jmp((function(){var t=i.get(e);r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var n=e[0],r=e[1],o=r[1]||n;return i.set(o,n),512&r[0]&&t.$attrsToReflect$.push([n,o]),o}))}}return e},we=function(e,t,r,o,i){return l(void 0,void 0,void 0,(function(){var e,o,a,s,u,c,l;return f(this,(function(f){switch(f.label){case 0:return 0!=(32&t.$flags$)?[3,5]:(t.$flags$|=32,(i=Ne(r)).then?(e=function(){},[4,i]):[3,2]);case 1:i=f.sent(),e(),f.label=2;case 2:i.isProxied||(r.$watchers$=i.watchers,be(i,r,2),i.isProxied=!0),o=I(0,r.$tagName$),t.$flags$|=8;try{new i(t)}catch(d){ke(d)}return t.$flags$&=-9,t.$flags$|=128,o(),i.style?(a=i.style,s=x(r),Pe.has(s)?[3,5]:(u=I(0,r.$tagName$),8&r.$flags$?[4,Promise.all([n.e(4),n.e(43)]).then(n.bind(null,"K3Mr")).then((function(e){return e.scopeCss(a,s,!1)}))]:[3,4])):[3,5];case 3:a=f.sent(),f.label=4;case 4:!function(e,t,n){var r=Pe.get(e);C&&n?(r=r||new CSSStyleSheet).replace(t):r=t,Pe.set(e,r)}(s,a,!!(1&r.$flags$)),u(),f.label=5;case 5:return c=t.$ancestorComponent$,l=function(){return le(t,!0)},c&&c["s-rc"]?c["s-rc"].push(l):l(),[2]}}))}))},Se=function(e){var t=e["s-cr"]=w.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},Ee=function(e,t){void 0===t&&(t={});var n,r=I(),o=[],i=t.exclude||[],a=v.customElements,s=w.head,u=s.querySelector("meta[charset]"),l=w.createElement("style"),f=[],d=!0;Object.assign(S,t),S.$resourcesUrl$=new URL(t.resourcesUrl||"./",w.baseURI).href,t.syncQueue&&(S.$flags$|=4),e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};r.$members$=t[2],r.$listeners$=t[3],r.$attrsToReflect$=[],r.$watchers$={},!E&&1&r.$flags$&&(r.$flags$|=8);var s=r.$tagName$,u=function(e){function t(t){var n=e.call(this,t)||this;return je(t=n,r),1&r.$flags$&&(E?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t)),n}return c(t,e),t.prototype.connectedCallback=function(){var e=this;n&&(clearTimeout(n),n=null),d?f.push(this):S.jmp((function(){return function(e){if(0==(1&S.$flags$)){var t=Ce(e),n=t.$cmpMeta$,r=I(0,n.$tagName$);if(1&t.$flags$)O(e,t,n.$listeners$);else{t.$flags$|=1,12&n.$flags$&&Se(e);for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ce(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=t[0];if(31&t[1][0]&&e.hasOwnProperty(n)){var r=e[n];delete e[n],e[n]=r}})),Ae((function(){return we(0,t,n)}))}r()}}(e)}))},t.prototype.disconnectedCallback=function(){var e=this;S.jmp((function(){return function(e){if(0==(1&S.$flags$)){var t=Ce(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0),S.$cssShim$&&S.$cssShim$.removeHost(e)}}(e)}))},t.prototype.forceUpdate=function(){var e;e=Ce(this),e.$hostElement$.isConnected&&2==(18&e.$flags$)&&le(e,!1)},t.prototype.componentOnReady=function(){return Ce(this).$onReadyPromise$},t}(HTMLElement);r.$lazyBundleId$=e[0],i.includes(s)||a.get(s)||(o.push(s),a.define(s,be(u,r,1)))}))})),l.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),s.insertBefore(l,u?u.nextSibling:s.firstChild),d=!1,f.length?f.map((function(e){return e.connectedCallback()})):S.jmp((function(){return n=setTimeout(me,30)})),r()},Re=new WeakMap,Ce=function(e){return Re.get(e)},Oe=function(e,t){return Re.set(t.$lazyInstance$=e,t)},je=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],O(e,n,t.$listeners$),Re.set(e,n)},_e=function(e,t){return t in e},ke=function(e){return console.error(e)},Ie=new Map,Ne=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=Ie.get(i);return a?a[o]:n("wOqf")("./"+i+".entry.js").then((function(e){return Ie.set(i,e),e[o]}),ke)},Pe=new Map,xe=[],Te=[],De=[],Me=function(e,t){return function(n){e.push(n),g||(g=!0,t&&4&S.$flags$?Ae(qe):S.raf(qe))}},Le=function(e,t){for(var n=0,r=0;n<e.length&&(r=performance.now())<t;)try{e[n++](r)}catch(o){ke(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},qe=function e(){y++,function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){ke(n)}e.length=0}(xe);var t=2==(6&S.$flags$)?performance.now()+14*Math.ceil(.1*y):1/0;Le(Te,t),Le(De,t),Te.length>0&&(De.push.apply(De,Te),Te.length=0),(g=xe.length+Te.length+De.length>0)?S.raf(e):y=0},Ae=function(e){return R().then(e)},Be=Me(Te,!0)}).call(this,n("yLpj"),"node_modules\\@deckdeckgo\\highlight-code\\dist\\esm-es5\\index-90f57bcb.js",n("8oxB"))},wOqf:function(e,t,n){var r={"./deckgo-highlight-code.entry.js":["ThaY",21]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="wOqf",e.exports=o},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return h}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("7evw"),s=n.n(a),u=n("6Gk8"),c=n("Bl7J"),l=n("vrFN"),f=n("p3AD"),d=n("d+8V");var $,p=n("hX4C"),m=n("5YLH");!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():Object(m.a)().then((function(){return Object(p.e)([["deckgo-highlight-code",[[1,"deckgo-highlight-code",{src:[1],anchor:[1],anchorZoom:[1,"anchor-zoom"],hideAnchor:[4,"hide-anchor"],language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],theme:[513],editing:[32],themeStyle:[32],languagesToLoad:[32],loaded:[32],load:[64],findNextAnchor:[64],zoomCode:[64]},[[4,"prismLanguageLoaded","languageLoaded"]]]]]],$)}));t.default=function(e){var t=e.data,n=e.pageContext,r=e.location,a=t.markdownRemark,$=t.site.siteMetadata.title,p=n.previous,m=n.next,h={url:"https://debamitra.github.io/debs-blog{location.pathname}",identifier:""+r.pathname,title:a.frontmatter.title};return o.a.createElement(c.a,{location:r,title:$},o.a.createElement(l.a,{title:a.frontmatter.title,description:a.frontmatter.description||a.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{style:{marginTop:Object(f.a)(1),marginBottom:0}},a.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1)})},a.frontmatter.date," ",o.a.createElement("span",null," . ")," ",a.timeToRead," min read",a.frontmatter.tags&&a.frontmatter.tags.length>0?" - ":"",o.a.createElement(d.a,null,a.frontmatter.tags))),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement("footer",null,o.a.createElement(u.a,null))),o.a.createElement(s.a.DiscussionEmbed,{shortname:"debs-blog",config:h}),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,p&&o.a.createElement(i.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),o.a.createElement("li",null,m&&o.a.createElement(i.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))};var h="1493876223"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bdf817cad83c9a6ab16e.js.map