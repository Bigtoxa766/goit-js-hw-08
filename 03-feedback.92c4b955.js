!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a.default(e,t,n[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var l,f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,m=/^0o[0-7]+$/i,p=parseInt,g="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=g||b||Function("return this")(),O=Object.prototype.toString,j=Math.max,w=Math.min,h=function(){return y.Date.now()};function x(e,t,n){var r,o,i,u,a,l,f=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var n=r,i=o;return r=o=void 0,f=t,u=e.apply(i,n)}function p(e){return f=e,a=setTimeout(b,t),s?m(e):u}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-f>=i}function b(){var e=h();if(g(e))return y(e);a=setTimeout(b,function(e){var n=t-(e-l);return d?w(n,i-(e-f)):n}(e))}function y(e){return a=void 0,v&&r?m(e):(r=o=void 0,u)}function O(){var e=h(),n=g(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return p(l);if(d)return a=setTimeout(b,t),m(l)}return void 0===a&&(a=setTimeout(b,t)),u}return t=S(t)||0,_(n)&&(s=!!n.leading,i=(d="maxWait"in n)?j(S(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),f=0,r=l=o=a=void 0},O.flush=function(){return void 0===a?u:y(h())},O}function _(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(_(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=_(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var r=v.test(t);return r||m.test(t)?p(t.slice(2),r?2:8):d.test(t)?NaN:+t}l=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(c);return _(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),x(e,t,{leading:r,maxWait:t,trailing:o})};var T,E=document.querySelector(".feedback-form"),M="feedback-form-state",N={email:"",message:""};E.addEventListener("submit",(function(e){e.preventDefault(),""!==E.email.value&&""!==E.message.value?(e.target.reset(),localStorage.removeItem(M),console.log(N)):alert("All fields must be filled")})),E.addEventListener("input",e(l)((function(t){N[t.target.name]=t.target.value,localStorage.setItem(M,JSON.stringify(e(i)({},N,{email:E.email.value,message:E.message.value})))}),500)),(T=JSON.parse(localStorage.getItem(M)))&&(E.email.value=T.email||"",E.message.value=T.message||""),console.log(E.email.value)}();
//# sourceMappingURL=03-feedback.92c4b955.js.map
