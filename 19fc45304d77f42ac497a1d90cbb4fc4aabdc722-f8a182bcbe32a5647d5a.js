(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9o1B":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("aZJH"),a=(r=i)&&r.__esModule?r:{default:r},u=n("Eb/5");function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l={title:"Wordpress Theme 2016",baseFontSize:"16px",baseLineHeight:1.75,scaleRatio:2.5,googleFonts:[{name:"Montserrat",styles:["700"]},{name:"Merriweather",styles:["400","400i","700","700i","900","900i"]}],headerFontFamily:["Merriweather","Georgia","serif"],bodyFontFamily:["Merriweather","Georgia","serif"],bodyColor:"hsla(0,0%,0%,0.9)",headerWeight:900,bodyWeight:400,boldWeight:700,overrideStyles:function(t,e){var n,r=t.adjustFontSizeTo,i=t.scale,l=t.rhythm;return c(n={h1:{fontFamily:["Montserrat","sans-serif"].join(",")},blockquote:o({},i(.2),{color:(0,a.default)(41),fontStyle:"italic",paddingLeft:l(13/16),marginLeft:l(-1),borderLeft:l(3/16)+" solid "+(0,a.default)(10)}),"blockquote > :last-child":{marginBottom:0},"blockquote cite":o({},r(e.baseFontSize),{color:e.bodyColor,fontWeight:e.bodyWeight}),"blockquote cite:before":{content:'"— "'},ul:{listStyle:"disc"},"ul,ol":{marginLeft:0}},u.MOBILE_MEDIA_QUERY,{"ul,ol":{marginLeft:l(1)},blockquote:{marginLeft:l(-3/4),marginRight:0,paddingLeft:l(9/16)}}),c(n,"h1,h2,h3,h4,h5,h6",{marginTop:l(2)}),c(n,"h4",{letterSpacing:"0.140625em",textTransform:"uppercase"}),c(n,"h6",{fontStyle:"italic"}),c(n,"a",{boxShadow:"0 1px 0 0 currentColor",color:"#007acc",textDecoration:"none"}),c(n,"a:hover,a:active",{boxShadow:"none"}),c(n,"mark,ins",{background:"#007acc",color:"white",padding:l(1/16)+" "+l(1/8),textDecoration:"none"}),n}};e.default=l},Bl7J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("p3AD");e.a=function(t){var e,n=t.location,r=t.title,u=t.children;return e="/debs-blog/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(a.b)(1.5),{marginBottom:Object(a.a)(1.5),marginTop:0})},o.a.createElement(i.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(i.Link,{style:{boxShadow:"none",color:"inherit"},to:"/"},"← Back to Home")),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(a.a)(24),padding:Object(a.a)(1.5)+" "+Object(a.a)(3/4)}},o.a.createElement("header",null,e),o.a.createElement("main",null,u),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))}},"Eb/5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.LARGER_DISPLAY_WIDTH="1600px",e.LARGE_DISPLAY_WIDTH="1280px",e.DEFAULT_WIDTH="980px",e.TABLET_WIDTH="768px",e.MOBILE_WIDTH="480px",e.LARGER_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1600px)",e.LARGE_DISPLAY_MEDIA_QUERY="@media only screen and (max-width:1280px)",e.DEFAULT_MEDIA_QUERY="@media only screen and (max-width:980px)",e.TABLET_MEDIA_QUERY="@media only screen and (max-width:768px)",e.MOBILE_MEDIA_QUERY="@media only screen and (max-width:480px)",e.MIN_LARGER_DISPLAY_MEDIA_QUERY="@media (min-width:1600px)",e.MIN_LARGE_DISPLAY_MEDIA_QUERY="@media (min-width:1280px)",e.MIN_DEFAULT_MEDIA_QUERY="@media (min-width:980px)",e.MIN_TABLET_MEDIA_QUERY="@media (min-width:768px)",e.MIN_MOBILE_MEDIA_QUERY="@media (min-width:480px)"},aZJH:function(t,e){function n(t){return!isNaN(parseFloat(t))&&isFinite(t)}t.exports=function(t,e,r){if(void 0===e&&(e=0),void 0===r&&(r=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!n(e))throw new Error("Hue is not a number");if(!n(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var o=0;if(0!==e){o=19.92978+-.3651759*t+.001737214*Math.pow(t,2)}var i=0;return r?(i=t/100,t="100%,"):(i=(100-t)/100,t="0%,"),"hsla("+e+","+o+"%,"+t+i+")"}},mBog:function(t,e,n){(function(e){var n,r,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,r,u=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))i.call(n,l)&&(u[l]=n[l]);if(o){r=o(n);for(var s=0;s<r.length;s++)a.call(n,r[s])&&(u[r[s]]=n[r[s]])}}return u},c=function(t,e){e||(e=[0,""]),t=String(t);var n=parseFloat(t,10);return e[0]=n,e[1]=t.match(/[\d.\-\+]*\s*(.*)/)[1]||"",e},l=function(t){return c(t)[0]},s=function(t){return null==t&&(t=t),function(e,n,r,o){null==r&&(r=t),null==o&&(o=r);var i=c(e)[1];if(i===n)return e;var a=l(e);if("px"!==i)if("em"===i)a=l(e)*l(r);else if("rem"===i)a=l(e)*l(t);else{if("ex"!==i)return e;a=l(e)*l(r)*2}var u=a;if("px"!==n)if("em"===n)u=a/l(o);else if("rem"===n)u=a/l(t);else{if("ex"!==n)return e;u=a/l(o)/2}return parseFloat(u.toFixed(5))+n}},f=c,h=function(t){return f(t)[1]},p=function(t){return f(t)[0]},d={baseFontSize:"16px",baseLineHeight:1.5,rhythmUnit:"rem",defaultRhythmBorderWidth:"1px",defaultRhythmBorderStyle:"solid",roundToNearestHalfLine:!0,minLinePadding:"2px"},b=function(t,e){var n,r=s(e.baseFontSize),o=p(r(t,"px")),i=p(e.baseLineHeightInPx),a=p(r(e.minLinePadding,"px"));return(n=e.roundToNearestHalfLine?Math.ceil(2*o/i)/2:Math.ceil(o/i))*i-o<2*a&&(n+=e.roundToNearestHalfLine?.5:1),n},g=function(t){var e=s(t.baseFontSize);return function(n,r,o){null==n&&(n=1),null==r&&(r=t.baseFontSize),null==o&&(o=0);var i=n*p(t.baseLineHeightInPx)-o+"px",a=e(i,t.rhythmUnit,r);return"px"===h(a)&&(a=Math.floor(p(a))+h(a)),parseFloat(p(a).toFixed(5))+h(a)}},y=Object.prototype.toString;function v(t){return!isNaN(parseFloat(t))&&isFinite(t)}n=function(t){return"number"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Number]"==y.call(t)},r={"minor second":16/15,"major second":9/8,"minor third":1.2,"major third":4/3,"diminished fourth":Math.sqrt(2),"perfect fifth":1.5,"minor sixth":1.6,golden:1.61803398875,phi:1.61803398875,"major sixth":5/3,"minor seventh":16/9,"major seventh":15/8,octave:2,"major tenth":2.5,"major eleventh":8/3,"major twelfth":3,"double octave":4};var m=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=!1),"cool"===e?e=237:"slate"===e?e=122:"warm"===e&&(e=69),!v(e))throw new Error("Hue is not a number");if(!v(t))throw new Error("Lightness is not a number");t>100&&(t=100),t<0&&(t=0);var r=0;0!==e&&(r=19.92978+-.3651759*t+.001737214*Math.pow(t,2));var o=0;return n?(o=t/100,t="100%,"):(o=(100-t)/100,t="0%,"),"hsla("+e+","+r+"%,"+t+o+")"},_="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function j(t,e){return t(e={exports:{}},e.exports),e.exports}var w,x="object"==typeof _&&_&&_.Object===Object&&_,O="object"==typeof self&&self&&self.Object===Object&&self,S=x||O||Function("return this")(),F=S.Symbol,z=Object.prototype,E=z.hasOwnProperty,L=z.toString,k=F?F.toStringTag:void 0,A=Object.prototype.toString,M=F?F.toStringTag:void 0,T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":M&&M in Object(t)?function(t){var e=E.call(t,k),n=t[k];try{t[k]=void 0;var r=!0}catch(t){}var o=L.call(t);return r&&(e?t[k]=n:delete t[k]),o}(t):function(t){return A.call(t)}(t)},B=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},I=function(t){if(!B(t))return!1;var e=T(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},P=S["__core-js_shared__"],D=(w=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+w:"",R=Function.prototype.toString,H=function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""},W=/^\[object .+?Constructor\]$/,N=Function.prototype,U=Object.prototype,C=RegExp("^"+N.toString.call(U.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y=function(t){return!(!B(t)||function(t){return!!D&&D in t}(t))&&(I(t)?C:W).test(H(t))},q=function(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Y(n)?n:void 0},$=function(){try{var t=q(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Q=function(t,e,n){"__proto__"==e&&$?$(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},G=function(t,e){return t===e||t!=t&&e!=e},J=Object.prototype.hasOwnProperty,V=function(t,e,n){var r=t[e];J.call(t,e)&&G(r,n)&&(void 0!==n||e in t)||Q(t,e,n)},Z=Array.isArray,K=function(t){return null!=t&&"object"==typeof t},X=function(t){return"symbol"==typeof t||K(t)&&"[object Symbol]"==T(t)},tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,et=/^\w*$/,nt=function(t,e){if(Z(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!X(t))||et.test(t)||!tt.test(t)||null!=e&&t in Object(e)},rt=q(Object,"create"),ot=Object.prototype.hasOwnProperty,it=Object.prototype.hasOwnProperty;function at(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}at.prototype.clear=function(){this.__data__=rt?rt(null):{},this.size=0},at.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},at.prototype.get=function(t){var e=this.__data__;if(rt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return ot.call(e,t)?e[t]:void 0},at.prototype.has=function(t){var e=this.__data__;return rt?void 0!==e[t]:it.call(e,t)},at.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=rt&&void 0===e?"__lodash_hash_undefined__":e,this};var ut=at,ct=function(t,e){for(var n=t.length;n--;)if(G(t[n][0],e))return n;return-1},lt=Array.prototype.splice;function st(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}st.prototype.clear=function(){this.__data__=[],this.size=0},st.prototype.delete=function(t){var e=this.__data__,n=ct(e,t);return!(n<0||(n==e.length-1?e.pop():lt.call(e,n,1),--this.size,0))},st.prototype.get=function(t){var e=this.__data__,n=ct(e,t);return n<0?void 0:e[n][1]},st.prototype.has=function(t){return ct(this.__data__,t)>-1},st.prototype.set=function(t,e){var n=this.__data__,r=ct(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};var ft=st,ht=q(S,"Map"),pt=function(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map};function dt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dt.prototype.clear=function(){this.size=0,this.__data__={hash:new ut,map:new(ht||ft),string:new ut}},dt.prototype.delete=function(t){var e=pt(this,t).delete(t);return this.size-=e?1:0,e},dt.prototype.get=function(t){return pt(this,t).get(t)},dt.prototype.has=function(t){return pt(this,t).has(t)},dt.prototype.set=function(t,e){var n=pt(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};var bt=dt;function gt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(gt.Cache||bt),n}gt.Cache=bt;var yt=gt,vt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,mt=/\\(\\)?/g,_t=function(t){var e=yt((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(vt,(function(t,n,r,o){e.push(r?o.replace(mt,"$1"):n||t)})),e}),(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}(),jt=F?F.prototype:void 0,wt=jt?jt.toString:void 0,xt=function t(e){if("string"==typeof e)return e;if(Z(e))return function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}(e,t)+"";if(X(e))return wt?wt.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},Ot=function(t,e){return Z(t)?t:nt(t,e)?[t]:_t(function(t){return null==t?"":xt(t)}(t))},St=/^(?:0|[1-9]\d*)$/,Ft=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&St.test(t))&&t>-1&&t%1==0&&t<e},zt=function(t){if("string"==typeof t||X(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},Et=function(t,e,n){return null==t?t:function(t,e,n,r){if(!B(t))return t;for(var o=-1,i=(e=Ot(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=zt(e[o]),l=n;if(o!=a){var s=u[c];void 0===(l=r?r(s,c,u):void 0)&&(l=B(s)?s:Ft(e[o+1])?[]:{})}V(u,c,l),u=u[c]}return t}(t,e,n)},Lt=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},kt=function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[++r];if(!1===e(o[u],u,o))break}return t},At=function(t){return K(t)&&"[object Arguments]"==T(t)},Mt=Object.prototype,Tt=Mt.hasOwnProperty,Bt=Mt.propertyIsEnumerable,It=At(function(){return arguments}())?At:function(t){return K(t)&&Tt.call(t,"callee")&&!Bt.call(t,"callee")},Pt=function(){return!1},Dt=j((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?S.Buffer:void 0;t.exports=(o?o.isBuffer:void 0)||Pt})),Rt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Ht={};Ht["[object Float32Array]"]=Ht["[object Float64Array]"]=Ht["[object Int8Array]"]=Ht["[object Int16Array]"]=Ht["[object Int32Array]"]=Ht["[object Uint8Array]"]=Ht["[object Uint8ClampedArray]"]=Ht["[object Uint16Array]"]=Ht["[object Uint32Array]"]=!0,Ht["[object Arguments]"]=Ht["[object Array]"]=Ht["[object ArrayBuffer]"]=Ht["[object Boolean]"]=Ht["[object DataView]"]=Ht["[object Date]"]=Ht["[object Error]"]=Ht["[object Function]"]=Ht["[object Map]"]=Ht["[object Number]"]=Ht["[object Object]"]=Ht["[object RegExp]"]=Ht["[object Set]"]=Ht["[object String]"]=Ht["[object WeakMap]"]=!1;var Wt=j((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&x.process,i=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i})),Nt=Wt&&Wt.isTypedArray,Ut=Nt?function(t){return function(e){return t(e)}}(Nt):function(t){return K(t)&&Rt(t.length)&&!!Ht[T(t)]},Ct=Object.prototype.hasOwnProperty,Yt=function(t,e){var n=Z(t),r=!n&&It(t),o=!n&&!r&&Dt(t),i=!n&&!r&&!o&&Ut(t),a=n||r||o||i,u=a?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],c=u.length;for(var l in t)!e&&!Ct.call(t,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Ft(l,c))||u.push(l);return u},qt=Object.prototype,$t=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||qt)},Qt=function(t,e){return function(n){return t(e(n))}},Gt=Qt(Object.keys,Object),Jt=Object.prototype.hasOwnProperty,Vt=function(t){return null!=t&&Rt(t.length)&&!I(t)},Zt=function(t){return Vt(t)?Yt(t):function(t){if(!$t(t))return Gt(t);var e=[];for(var n in Object(t))Jt.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)},Kt=function(t,e){if(null==t)return t;if(!Vt(t))return function(t,e){return t&&kt(t,e,Zt)}(t,e);for(var n=t.length,r=-1,o=Object(t);++r<n&&!1!==e(o[r],r,o););return t},Xt=function(t){return t},te=function(t,e){return(Z(t)?Lt:Kt)(t,function(t){return"function"==typeof t?t:Xt}(e))};function ee(t){var e=this.__data__=new ft(t);this.size=e.size}ee.prototype.clear=function(){this.__data__=new ft,this.size=0},ee.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},ee.prototype.get=function(t){return this.__data__.get(t)},ee.prototype.has=function(t){return this.__data__.has(t)},ee.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ft){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new bt(r)}return n.set(t,e),this.size=n.size,this};var ne=ee,re=function(t,e,n){(void 0===n||G(t[e],n))&&(void 0!==n||e in t)||Q(t,e,n)},oe=j((function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?S.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}})),ie=S.Uint8Array,ae=function(t,e){var n=e?function(t){var e=new t.constructor(t.byteLength);return new ie(e).set(new ie(t)),e}(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},ue=Object.create,ce=function(){function t(){}return function(e){if(!B(e))return{};if(ue)return ue(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),le=Qt(Object.getPrototypeOf,Object),se=Function.prototype,fe=Object.prototype,he=se.toString,pe=fe.hasOwnProperty,de=he.call(Object),be=function(t,e){return"__proto__"==e?void 0:t[e]},ge=Object.prototype.hasOwnProperty,ye=function(t){if(!B(t))return function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}(t);var e=$t(t),n=[];for(var r in t)("constructor"!=r||!e&&ge.call(t,r))&&n.push(r);return n},ve=function(t){return Vt(t)?Yt(t,!0):ye(t)},me=function(t){return function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?Q(n,u,c):V(n,u,c)}return n}(t,ve(t))},_e=function(t,e,n,r,o,i,a){var u=be(t,n),c=be(e,n),l=a.get(c);if(l)re(t,n,l);else{var s=i?i(u,c,n+"",t,e,a):void 0,f=void 0===s;if(f){var h=Z(c),p=!h&&Dt(c),d=!h&&!p&&Ut(c);s=c,h||p||d?Z(u)?s=u:function(t){return K(t)&&Vt(t)}(u)?s=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}(u):p?(f=!1,s=oe(c,!0)):d?(f=!1,s=ae(c,!0)):s=[]:function(t){if(!K(t)||"[object Object]"!=T(t))return!1;var e=le(t);if(null===e)return!0;var n=pe.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&he.call(n)==de}(c)||It(c)?(s=u,It(u)?s=me(u):(!B(u)||r&&I(u))&&(s=function(t){return"function"!=typeof t.constructor||$t(t)?{}:ce(le(t))}(c))):f=!1}f&&(a.set(c,s),o(s,c,r,i,a),a.delete(c)),re(t,n,s)}},je=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},we=Math.max,xe=function(t){return function(){return t}},Oe=Date.now,Se=function(t){var e=0,n=0;return function(){var r=Oe(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}($?function(t,e){return $(t,"toString",{configurable:!0,enumerable:!1,value:xe(e),writable:!0})}:Xt),Fe=function(t,e){return Se(function(t,e,n){return e=we(void 0===e?t.length-1:e,0),function(){for(var r=arguments,o=-1,i=we(r.length-e,0),a=Array(i);++o<i;)a[o]=r[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=r[o];return u[e]=n(a),je(t,this,u)}}(t,e,Xt),t+"")},ze=function(t){return Fe((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&function(t,e,n){if(!B(n))return!1;var r=typeof e;return!!("number"==r?Vt(n)&&Ft(e,n.length):"string"==r&&e in n)&&G(n[e],t)}(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=Object(e);++r<o;){var u=n[r];u&&t(e,u,r)}return e}))}((function(t,e,n){!function t(e,n,r,o,i){e!==n&&kt(n,(function(a,u){if(B(a))i||(i=new ne),_e(e,n,u,r,t,o,i);else{var c=o?o(be(e,u),a,u+"",e,n,i):void 0;void 0===c&&(c=a),re(e,u,c)}}),ve)}(t,e,n)})),Ee=function(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n};function Le(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new bt;++e<n;)this.add(t[e])}Le.prototype.add=Le.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Le.prototype.has=function(t){return this.__data__.has(t)};var ke=Le,Ae=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1},Me=function(t,e){return t.has(e)},Te=function(t,e,n,r,o,i){var a=1&n,u=t.length,c=e.length;if(u!=c&&!(a&&c>u))return!1;var l=i.get(t);if(l&&i.get(e))return l==e;var s=-1,f=!0,h=2&n?new ke:void 0;for(i.set(t,e),i.set(e,t);++s<u;){var p=t[s],d=e[s];if(r)var b=a?r(d,p,s,e,t,i):r(p,d,s,t,e,i);if(void 0!==b){if(b)continue;f=!1;break}if(h){if(!Ae(e,(function(t,e){if(!Me(h,e)&&(p===t||o(p,t,n,r,i)))return h.push(e)}))){f=!1;break}}else if(p!==d&&!o(p,d,n,r,i)){f=!1;break}}return i.delete(t),i.delete(e),f},Be=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n},Ie=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n},Pe=F?F.prototype:void 0,De=Pe?Pe.valueOf:void 0,Re=Object.prototype.propertyIsEnumerable,He=Object.getOwnPropertySymbols,We=He?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}(He(t),(function(e){return Re.call(t,e)})))}:function(){return[]},Ne=function(t){return function(t,e,n){var r=e(t);return Z(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Zt,We)},Ue=Object.prototype.hasOwnProperty,Ce=q(S,"DataView"),Ye=q(S,"Promise"),qe=q(S,"Set"),$e=q(S,"WeakMap"),Qe=H(Ce),Ge=H(ht),Je=H(Ye),Ve=H(qe),Ze=H($e),Ke=T;(Ce&&"[object DataView]"!=Ke(new Ce(new ArrayBuffer(1)))||ht&&"[object Map]"!=Ke(new ht)||Ye&&"[object Promise]"!=Ke(Ye.resolve())||qe&&"[object Set]"!=Ke(new qe)||$e&&"[object WeakMap]"!=Ke(new $e))&&(Ke=function(t){var e=T(t),n="[object Object]"==e?t.constructor:void 0,r=n?H(n):"";if(r)switch(r){case Qe:return"[object DataView]";case Ge:return"[object Map]";case Je:return"[object Promise]";case Ve:return"[object Set]";case Ze:return"[object WeakMap]"}return e});var Xe,tn=Ke,en="[object Arguments]",nn="[object Array]",rn="[object Object]",on=Object.prototype.hasOwnProperty,an=function(t,e,n,r,o,i){var a=Z(t),u=Z(e),c=a?nn:tn(t),l=u?nn:tn(e),s=(c=c==en?rn:c)==rn,f=(l=l==en?rn:l)==rn,h=c==l;if(h&&Dt(t)){if(!Dt(e))return!1;a=!0,s=!1}if(h&&!s)return i||(i=new ne),a||Ut(t)?Te(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new ie(t),new ie(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return G(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=Be;case"[object Set]":if(u||(u=Ie),t.size!=e.size&&!(1&r))return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var l=Te(u(t),u(e),r,o,i,a);return a.delete(t),l;case"[object Symbol]":if(De)return De.call(t)==De.call(e)}return!1}(t,e,c,n,r,o,i);if(!(1&n)){var p=s&&on.call(t,"__wrapped__"),d=f&&on.call(e,"__wrapped__");if(p||d){var b=p?t.value():t,g=d?e.value():e;return i||(i=new ne),o(b,g,n,r,i)}}return!!h&&(i||(i=new ne),function(t,e,n,r,o,i){var a=1&n,u=Ne(t),c=u.length;if(c!=Ne(e).length&&!a)return!1;for(var l=c;l--;){var s=u[l];if(!(a?s in e:Ue.call(e,s)))return!1}var f=i.get(t);if(f&&i.get(e))return f==e;var h=!0;i.set(t,e),i.set(e,t);for(var p=a;++l<c;){var d=t[s=u[l]],b=e[s];if(r)var g=a?r(b,d,s,e,t,i):r(d,b,s,t,e,i);if(!(void 0===g?d===b||o(d,b,n,r,i):g)){h=!1;break}p||(p="constructor"==s)}if(h&&!p){var y=t.constructor,v=e.constructor;y!=v&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v)&&(h=!1)}return i.delete(t),i.delete(e),h}(t,e,n,r,o,i))},un=function t(e,n,r,o,i){return e===n||(null==e||null==n||!K(e)&&!K(n)?e!=e&&n!=n:an(e,n,r,o,t,i))},cn=function(t){return t==t&&!B(t)},ln=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},sn=function(t){var e=function(t){for(var e=Zt(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,cn(o)]}return e}(t);return 1==e.length&&e[0][2]?ln(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=Object(t);o--;){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<i;){var c=(u=n[o])[0],l=t[c],s=u[1];if(a&&u[2]){if(void 0===l&&!(c in t))return!1}else{var f=new ne;if(r)var h=r(l,s,c,t,e,f);if(!(void 0===h?un(s,l,3,r,f):h))return!1}}return!0}(n,t,e)}},fn=function(t,e){for(var n=0,r=(e=Ot(e,t)).length;null!=t&&n<r;)t=t[zt(e[n++])];return n&&n==r?t:void 0},hn=function(t,e){return null!=t&&e in Object(t)},pn=function(t,e){return null!=t&&function(t,e,n){for(var r=-1,o=(e=Ot(e,t)).length,i=!1;++r<o;){var a=zt(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Rt(o)&&Ft(a,o)&&(Z(t)||It(t))}(t,e,hn)},dn=function(t,e){return nt(t)&&cn(e)?ln(zt(t),e):function(n){var r=function(t,e,n){var r=null==t?void 0:fn(t,e);return void 0===r?n:r}(n,t);return void 0===r&&r===e?pn(n,t):un(e,r,3)}},bn=function(t){return nt(t)?function(t){return function(e){return null==e?void 0:e[t]}}(zt(t)):function(t){return function(e){return fn(e,t)}}(t)},gn=function(t){return"function"==typeof t?t:null==t?Xt:"object"==typeof t?Z(t)?dn(t[0],t[1]):sn(t):bn(t)},yn=function(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n},vn=function(t,e,n){var r=Z(t)?Ee:yn,o=arguments.length<3;return r(t,gn(e),n,o,Kt)},mn=function(t,e,n){var r;return void 0===t&&(t={}),r=Z(e)?e:[e],te(r,(function(e){te(n,(function(n,r){Et(t,e+"."+r,n)}))})),t},_n=["inherit","default","serif","sans-serif","monospace","fantasy","cursive","-apple-system"],jn=function(t){return-1!==_n.indexOf(t)?t:"'"+t+"'"},wn=(Xe=j((function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default="html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}"})))&&Xe.__esModule&&Object.prototype.hasOwnProperty.call(Xe,"default")?Xe.default:Xe;t.exports=function(t){var e,o,i,a,c=u({},{baseFontSize:"16px",baseLineHeight:1.45,headerLineHeight:1.1,scaleRatio:2,googleFonts:[],headerFontFamily:["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],bodyFontFamily:["georgia","serif"],headerColor:"inherit",bodyColor:"hsla(0,0%,0%,0.8)",headerWeight:"bold",bodyWeight:"normal",boldWeight:"bold",includeNormalize:!0,blockMarginBottom:1},t),l=(e=c,o=JSON.parse(JSON.stringify(d)),i=Object.assign({},o,e),a=s(i.baseFontSize),h(i.baseLineHeight)?(p(a(i.baseFontSize,"px")),i.baseLineHeightInPx=a(i.baseLineHeight,"px")):i.baseLineHeightInPx=p(i.baseFontSize)*i.baseLineHeight+"px",{rhythm:g(i),establishBaseline:function(){return s((t=i).baseFontSize),{fontSize:p(t.baseFontSize)/16*100+"%",lineHeight:t.baseLineHeight.toString()};var t},linesForFontSize:function(t){return b(t,i)},adjustFontSizeTo:function(t,e,n){return null==e&&(e="auto"),function(t,e,n,r){null==n&&(n=r.baseFontSize),"%"===h(t)&&(t=p(r.baseFontSize)*(p(t)/100)+"px");var o=s(r.baseFontSize);t=o(t,"px",n=o(n,"px"));var i=g(r);return"auto"===e&&(e=b(t,r)),{fontSize:o(t,r.rhythmUnit,n),lineHeight:i(e,n)}}(t,e,n,i)}});return l.scale=function(t){var e=parseInt(c.baseFontSize,10),o=function(t,e){var o;return null==t&&(t=0),null==e&&(e="golden"),o=n(e)?e:null!=r[e]?r[e]:r.golden,Math.pow(o,t)}(t,c.scaleRatio)*e+"px";return l.adjustFontSizeTo(o)},Object.assign({},{options:c},l,{createStyles:function(){return this.toString()},toJSON:function(){return function(t,e){var n={},r=t.establishBaseline();n=mn(n,"html",{font:r.fontSize+"/"+r.lineHeight+" "+e.bodyFontFamily.map(jn).join(","),boxSizing:"border-box",overflowY:"scroll"}),n=mn(n,["*","*:before","*:after"],{boxSizing:"inherit"}),n=mn(n,"body",{color:e.bodyColor,fontFamily:e.bodyFontFamily.map(jn).join(","),fontWeight:e.bodyWeight,wordWrap:"break-word",fontKerning:"normal",MozFontFeatureSettings:'"kern", "liga", "clig", "calt"',msFontFeatureSettings:'"kern", "liga", "clig", "calt"',WebkitFontFeatureSettings:'"kern", "liga", "clig", "calt"',fontFeatureSettings:'"kern", "liga", "clig", "calt"'}),n=mn(n,"img",{maxWidth:"100%"});var o;o=function(t){return"number"==typeof t||K(t)&&"[object Number]"==T(t)}(e.blockMarginBottom)?t.rhythm(e.blockMarginBottom):function(t){return"string"==typeof t||!Z(t)&&K(t)&&"[object String]"==T(t)}(e.blockMarginBottom)?e.blockMarginBottom:t.rhythm(1),n=mn(n,["h1","h2","h3","h4","h5","h6","hgroup","ul","ol","dl","dd","p","figure","pre","table","fieldset","blockquote","form","noscript","iframe","img","hr","address"],{marginLeft:0,marginRight:0,marginTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,paddingTop:0,marginBottom:o}),n=mn(n,"blockquote",{marginRight:t.rhythm(1),marginBottom:o,marginLeft:t.rhythm(1)}),n=mn(n,["b","strong","dt","th"],{fontWeight:e.boldWeight}),n=mn(n,"hr",{background:m(80),border:"none",height:"1px",marginBottom:"calc("+o+" - 1px)"}),n=mn(n,["ol","ul"],{listStylePosition:"outside",listStyleImage:"none",marginLeft:t.rhythm(1)}),n=mn(n,"li",{marginBottom:"calc("+o+" / 2)"}),n=mn(n,["ol li","ul li"],{paddingLeft:0}),n=mn(n,["li > ol","li > ul"],{marginLeft:t.rhythm(1),marginBottom:"calc("+o+" / 2)",marginTop:"calc("+o+" / 2)"}),n=mn(n,["blockquote *:last-child","li *:last-child","p *:last-child"],{marginBottom:0}),n=mn(n,["li > p"],{marginBottom:"calc("+o+" / 2)"}),n=mn(n,["code","kbd","pre","samp"],Object.assign({},t.adjustFontSizeTo("85%"))),(n=mn(n,["abbr","acronym"],{borderBottom:"1px dotted "+m(50),cursor:"help"}))["abbr[title]"]={borderBottom:"1px dotted "+m(50),cursor:"help",textDecoration:"none"},n=mn(n,["table"],Object.assign({},t.adjustFontSizeTo(e.baseFontSize),{borderCollapse:"collapse",width:"100%"})),n=mn(n,["thead"],{textAlign:"left"}),n=mn(n,["td,th"],{textAlign:"left",borderBottom:"1px solid "+m(88),fontFeatureSettings:'"tnum"',MozFontFeatureSettings:'"tnum"',msFontFeatureSettings:'"tnum"',WebkitFontFeatureSettings:'"tnum"',paddingLeft:t.rhythm(2/3),paddingRight:t.rhythm(2/3),paddingTop:t.rhythm(.5),paddingBottom:"calc("+t.rhythm(.5)+" - 1px)"}),n=mn(n,"th:first-child,td:first-child",{paddingLeft:0}),n=mn(n,"th:last-child,td:last-child",{paddingRight:0}),n=mn(n,["h1","h2","h3","h4","h5","h6"],{color:e.headerColor,fontFamily:e.headerFontFamily.map(jn).join(","),fontWeight:e.headerWeight,textRendering:"optimizeLegibility"});var i=t.scale(1),a=t.scale(.6),u=t.scale(.4),c=t.scale(0),l=t.scale(-.2),s=t.scale(-.3);return te([i,a,u,c,l,s],(function(t,r){n=Et(n,"h"+(r+1)+".fontSize",t.fontSize),n=Et(n,"h"+(r+1)+".lineHeight",e.headerLineHeight)})),Z(e.plugins)&&(n=vn(e.plugins,(function(n,r){return ze(n,r(t,e,n))}),n)),e.overrideStyles&&I(e.overrideStyles)&&(n=ze(n,e.overrideStyles(t,e,n))),e.overrideThemeStyles&&I(e.overrideThemeStyles)&&(n=ze(n,e.overrideThemeStyles(t,e,n))),n}(l,c)},toString:function(){return function(t,e,n){var r=function t(e){return vn(e,(function(e,n,r){return e+=r+"{",te(n,(function(n,r){if(B(n)){var o={};o[r]=n,e+=t(o)}else{var i=function(t,e){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/([a-z\d])([A-Z])/g,"$1"+(e=void 0===e?"_":e)+"$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g,"$1"+e+"$2").toLowerCase()}(r,"-")+":"+n+";";["Webkit","ms","Moz","O"].forEach((function(t){r.slice(0,t.length)===t&&(i="-"+i)})),e+=i}})),e+="}"}),"")}(n);return e.includeNormalize&&(r=""+wn+r),r}(0,c,this.toJSON())},injectStyles:function(){if("undefined"!=typeof document)if(document.getElementById("typography.js"))document.getElementById("typography.js").innerHTML=this.toString();else{var t=document.createElement("style");t.id="typography.js",t.innerHTML=this.toString();var e=document.head;e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}}})}}).call(this,n("yLpj"))},p3AD:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n("mBog"),o=n.n(r),i=n("9o1B"),a=n.n(i);a.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete a.a.googleFonts;var u=new o.a(a.a);var c=u.rhythm,l=u.scale},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=19fc45304d77f42ac497a1d90cbb4fc4aabdc722-f8a182bcbe32a5647d5a.js.map