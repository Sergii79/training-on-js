function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=e[o];return n}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _defineProperty(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),n.forEach((function(r){_defineProperty(e,r,o[r])}))}return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,r):void 0}}console.log("# Модуль 4. Заняття 8. Перебираючі методи масиву");var cars=[{make:"Honda",model:"CR-V",type:"suv",amount:14,price:24045,onSale:!0},{make:"Honda",model:"Accord",type:"sedan",amount:2,price:22455,onSale:!0},{make:"Mazda",model:"Mazda 6",type:"sedan",amount:8,price:24195,onSale:!1},{make:"Mazda",model:"CX-9",type:"suv",amount:7,price:31520,onSale:!0},{make:"Toyota",model:"4Runner",type:"suv",amount:19,price:34210,onSale:!1},{make:"Toyota",model:"Sequoia",type:"suv",amount:16,price:45560,onSale:!1},{make:"Toyota",model:"Tacoma",type:"truck",amount:4,price:24320,onSale:!0},{make:"Ford",model:"F-150",type:"truck",amount:11,price:27110,onSale:!0},{make:"Ford",model:"Fusion",type:"sedan",amount:13,price:22120,onSale:!0},{make:"Ford",model:"Explorer",type:"suv",amount:6,price:31660,onSale:!1}];console.log("---Example 1---");var getModels=function(e){return e.map((function(e){return e.model}))};console.log(getModels(cars)),console.log("---Example 2---");var applySale=function(e,r){return e.map((function(e){return _objectSpread({},e,{price:e.price-e.price*r})}))};console.log("---Example 3---"),console.log("---Example 4---");var getCarsOnSale=function(e){return e.filter((function(e){return e.onSale}))};console.log("---Example 5---"),console.log("---Example 6---");var numbers=[34,20,54,1,0];numbers.sort((function(e,r){return e>r?1:e<r?-1:0})),console.log(numbers),console.log("---Example 7---");var sortByModel=function(e,r){};console.log("---Example 8---");var getTotalAmount=function(e){return e.reduce((function(e,r,o,n){return 0===o&&(e.carsTotal=0,e.totalOnSale=0),e.carsTotal+=r.amount,r.onSale&&(e.totalOnSale+=1),e}),{})};console.log(getTotalAmount(cars)),console.log("---Example 9---");var getModelsOnSale=function(e){e.filter((function(e){return e.onSale})).map((function(e){return e.model}))};console.table(getModelsOnSale(cars)),console.log("---Example 10---");var getSortedCarsOnSale=function(e){return e.filter((function(e){return e.onSale})).sort((function(e,r){return e.price>r.price?1:e.price<r.price?-1:0}))};[100,34,20,500].sort((function(e,r){return e-r}));var tweets=[{id:"000",likes:5,tags:["js","nodejs"]},{id:"001",likes:2,tags:["html","css"]},{id:"002",likes:17,tags:["html","js","nodejs"]},{id:"003",likes:8,tags:["css","react"]},{id:"004",likes:0,tags:["js","nodejs","react"]}],getTags=function(e){return e.reduce((function(e,r){var o;return(o=e).push.apply(o,_toConsumableArray(r.tags)),e}),[])},tags=getTags(tweets),uniqueCallback=function(e,r,o,n){return n.indexOf(r)===o&&(e+=1),e},uniqueTagsAmount=tags.reduce(uniqueCallback,0),countTags=function(e){return e.reduce((function(e,r){return e[r]||(e[r]=0),e[r]+=1,e}),{})},tagCount=countTags(tags);console.log(tagCount);var array=["Jacob","William","Solomon","Artemis"];console.log(array[2]),console.log("------");
//# sourceMappingURL=08-module-4_iterative_methods_lesson-8.72881ba7.js.map
