!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r),r.register("hKHmD",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o,n){o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n;return e}})),r.register("cZ2Ha",(function(e,o){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,o){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}}));var l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(o){i.default(e,o,n[o])}))}return e};var a,i=(a=r("hKHmD"))&&a.__esModule?a:{default:a};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,o){if(null==e)return{};var n,t,r=s.default(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r};var s=function(e){return e&&e.__esModule?e:{default:e}}(r("cZ2Ha"));function u(e){var o=e.weight,n=e.height,t=Number(o.replace(",",".")),r=Number(n.replace(",","."));return Number((t/Math.pow(r,2)).toFixed(1))}console.log("Модуль 3 Заняття 6. Деструктуризація та rest/spread"),console.log("---Example 1---"),console.log(u({weight:"88,3",height:"1.75"})),console.log(u({weight:"68,3",height:"1.65"})),console.log(u({weight:"118,3",height:"1.95"})),console.log("---Example 2---");function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,n=e.surname,t=e.age,r=void 0===t?"unknow":t;console.log("User is ".concat(o," ").concat(n,", his age is ").concat(r))}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"No argument";console.log(e)}function d(){console.log("hello")}f({name:"John",surname:"Smith",age:24}),f(),d(),d(),d(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.names,n=void 0===o?"":o,t=e.phones,r=void 0===t?"":t;console.log(n,r);for(var l=n.split(","),a=r.split(","),i=0;i<l.length;i+=1)console.log("".concat(l[i],": ").concat(a[i]))}({names:"Jacob,William,Solomon,Artemis",phones:"89001234567,89001112233,890055566377,890055566300"}),console.log("---Example 3---");console.log("---Example 4---");console.log("---Example 5---"),console.log("---Example 6---");var g,p,m,b,h=(p=(g={id:1,firstName:"Jacob",lastName:"Mercer",email:"j.mercer@mail.com",friendCount:40,friends:{Anton:"best",Ivan:"so so"}}).firstName,m=g.lastName,g.friends,b=e(c)(g,["firstName","lastName","friends"]),e(l)({},b,{fullName:"".concat(p," ").concat(m)}));console.log(h)}();
//# sourceMappingURL=06-module-3_object_Lesson-6.a3b9ed7e.js.map
