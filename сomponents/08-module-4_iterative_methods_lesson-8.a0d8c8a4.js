function _arrayLikeToArray(e,o){(null==o||o>e.length)&&(o=e.length);for(var r=0,n=new Array(o);r<o;r++)n[r]=e[r];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _defineProperty(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(o){_defineProperty(e,o,r[o])}))}return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,o){if(e){if("string"==typeof e)return _arrayLikeToArray(e,o);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,o):void 0}}console.log("# Модуль 4. Заняття 8. Перебираючі методи масиву");var cars=[{make:"Honda",model:"CR-V",type:"suv",amount:14,price:24045,onSale:!0},{make:"Honda",model:"Accord",type:"sedan",amount:2,price:22455,onSale:!0},{make:"Mazda",model:"Mazda 6",type:"sedan",amount:8,price:24195,onSale:!1},{make:"Mazda",model:"CX-9",type:"suv",amount:7,price:31520,onSale:!0},{make:"Toyota",model:"4Runner",type:"suv",amount:19,price:34210,onSale:!1},{make:"Toyota",model:"Sequoia",type:"suv",amount:16,price:45560,onSale:!1},{make:"Toyota",model:"Tacoma",type:"truck",amount:4,price:24320,onSale:!0},{make:"Ford",model:"F-150",type:"truck",amount:11,price:27110,onSale:!0},{make:"Ford",model:"Fusion",type:"sedan",amount:13,price:22120,onSale:!0},{make:"Ford",model:"Explorer",type:"suv",amount:6,price:31660,onSale:!1}];console.log("---Example 1---");var getModels=function(e){return e.map((function(e){return e.model}))};console.log(getModels(cars)),console.log("---Example 2---");var applySale=function(e,o){return e.map((function(e){return _objectSpread({},e,{price:e.price-e.price*o})}))};console.log("---Example 3---"),console.log("---Example 4---");var getCarsOnSale=function(e){return e.filter((function(e){return e.onSale}))};console.log("---Example 5---"),console.log("---Example 6---");var numbers=[34,20,54,1,0];numbers.sort((function(e,o){return e>o?1:e<o?-1:0})),console.log(numbers),console.log("---Example 7---");var sortByModel=function(e,o){};console.log("---Example 8---");var getTotalAmount=function(e){return e.reduce((function(e,o,r,n){return 0===r&&(e.carsTotal=0,e.totalOnSale=0),e.carsTotal+=o.amount,o.onSale&&(e.totalOnSale+=1),e}),{})};console.log(getTotalAmount(cars)),console.log("---Example 9---");var getModelsOnSale=function(e){e.filter((function(e){return e.onSale})).map((function(e){return e.model}))};console.table(getModelsOnSale(cars)),console.log("---Example 10---");var getSortedCarsOnSale=function(e){return e.filter((function(e){return e.onSale})).sort((function(e,o){return e.price>o.price?1:e.price<o.price?-1:0}))};[100,34,20,500].sort((function(e,o){return e-o}));var tweets=[{id:"000",likes:5,tags:["js","nodejs"]},{id:"001",likes:2,tags:["html","css"]},{id:"002",likes:17,tags:["html","js","nodejs"]},{id:"003",likes:8,tags:["css","react"]},{id:"004",likes:0,tags:["js","nodejs","react"]}],getTags=function(e){return e.reduce((function(e,o){var r;return(r=e).push.apply(r,_toConsumableArray(o.tags)),e}),[])},tags=getTags(tweets),uniqueCallback=function(e,o,r,n){return n.indexOf(o)===r&&(e+=1),e},uniqueTagsAmount=tags.reduce(uniqueCallback,0),countTags=function(e){return e.reduce((function(e,o){return e[o]||(e[o]=0),e[o]+=1,e}),{})},tagCount=countTags(tags);console.log(tagCount);var array=["Jacob","William","Solomon","Artemis"];function makePizza(e,o){console.log("Pizza ".concat(e," is being prepared, please wait...")),o(e)}console.log(array[2]),console.log("------"),makePizza("Royal Grand",(function(e){console.log("Delivering pizza ".concat(e,"."))})),makePizza("Ultracheese",(function(e){console.log("Eating pizza ".concat(e,"."))}));
//# sourceMappingURL=08-module-4_iterative_methods_lesson-8.a0d8c8a4.js.map
