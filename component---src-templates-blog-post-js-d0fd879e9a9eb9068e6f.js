(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7evw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV"),u={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=u},"Bp/N":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,n,o,i=l(u);function u(){return a(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(e.prototype,n),o&&c(e,o),u}(r.default.Component);e.CommentEmbed=p,p.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},p.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var r=u(n("q1tI")),o=u(n("17x9")),i=n("ZMnY");function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,o,u=d(a);function a(){return s(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),y.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&l(e.prototype,n),o&&l(e,o),a}(r.default.Component);e.DiscussionEmbed=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},UZsz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var r=u(n("q1tI")),o=u(n("17x9")),i=n("ZMnY");function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,t);var e,n,o,u=f(a);function a(){return c(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(e.prototype,n),o&&s(e,o),a}(r.default.Component);e.CommentCount=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var r=window.document.createElement("script");return r.async=!0,r.src=t,r.id=e,n.appendChild(r),r},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var r;return function(){var o=this,i=arguments,u=function(){r=null,n||t.apply(o,i)},a=n&&!r;window.clearTimeout(r),r=setTimeout(u,e),a&&t.apply(o,i)}},e.isReactElement=u,e.shallowComparison=function(t,e){var n,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,u=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return u=t.done,t},e:function(t){a=!0,o=t},f:function(){try{u||null==r.return||r.return()}finally{if(a)throw o}}}}(new Set(Object.keys(t),Object.keys(e)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(t[o]!==e[o]&&!u(t[o]))return!0}}catch(a){r.e(a)}finally{r.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return d}));var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),u=n("7evw"),a=n.n(u),c=n("6Gk8"),s=n("Bl7J"),l=n("vrFN"),f=n("p3AD");e.default=function(t){var e=t.data,n=t.pageContext,r=t.location,u=e.markdownRemark,d=e.site.siteMetadata.title,p=n.previous,m=n.next,y={url:"https://debamitra.github.io/debs-blog{location.pathname}",identifier:""+r.pathname,title:u.frontmatter.title};return o.a.createElement(s.a,{location:r,title:d},o.a.createElement(l.a,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{style:{marginTop:Object(f.a)(1),marginBottom:0}},u.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1)})},u.frontmatter.date," ",o.a.createElement("span",null," . ")," ",u.timeToRead," min read")),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:u.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement("footer",null,o.a.createElement(c.a,null))),o.a.createElement(a.a.DiscussionEmbed,{shortname:"debs-blog",config:y}),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,p&&o.a.createElement(i.Link,{to:p.fields.slug,rel:"prev"},"← ",p.frontmatter.title)),o.a.createElement("li",null,m&&o.a.createElement(i.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))};var d="1388475678"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d0fd879e9a9eb9068e6f.js.map