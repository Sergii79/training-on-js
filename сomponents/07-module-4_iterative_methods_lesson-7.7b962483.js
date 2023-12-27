function _defineProperty(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function _objectSpread(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(o){_defineProperty(e,o,n[o])}))}return e}function logger(e){return!0}function createProduct(e,o){o(_objectSpread({},e,{id:Date.now()}))}function logProduct(e){console.log(e)}function logTotalPrice(e){console.log(e.price*e.quantity)}function doubleQuantity(e){var o=e.quantity;console.log(2*o)}console.log("Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach"),console.log("---Example 1---");var product={name:"Tomato",price:10,quantity:43};createProduct(product,doubleQuantity),createProduct({name:"🍎",price:30,quantity:3},logProduct),createProduct({name:"Tomato",price:10,quantity:43},logTotalPrice),console.log("---Example 2---");var TRANSACTION_LIMIT_FIRST=1e3,accountFirst={username:"Jacob",balance:400,withdraw:function(e,o,n){e>TRANSACTION_LIMIT_FIRST||e>this.balance?n({message:"сталась біда. Ліміт перевищено або грошей нема",status:"ERROR"}):o({status:"OK",message:"Операція withdraw успішна"})},deposit:function(e,o,n){e<=0||e>TRANSACTION_LIMIT_FIRST?n({message:"Deposit не вдався. Бо сума менше або дорівнює нуль. Або ліміт перевищено",status:"ERROR DEPOSIT"}):o({message:"Все гуд"})}};function handleSuccess(e){var o=e.message,n=e.status,t=void 0===n?"OK":n;console.log("".concat(t,": ").concat(o))}function handleError(e){var o=e.message,n=e.status;console.log("".concat(n,": ").concat(o))}function each(e,o){var n=[],t=!0,c=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var u=r.value;n.push(o(u))}}catch(e){c=!0,a=e}finally{try{t||null==l.return||l.return()}finally{if(c)throw a}}return n}accountFirst.withdraw(2e3,handleSuccess,handleError),accountFirst.withdraw(600,handleSuccess,handleError),accountFirst.withdraw(300,handleSuccess,handleError),console.log("---Example 3---");var numbers=[64,49,36,25,16],newNumbers=each(numbers,(function(e){return 2*e}));console.log(newNumbers),console.log(each([64,49,36,25,16],(function(e){return 2*e}))),console.log(each([64,49,36,25,16],(function(e){return e-10}))),console.log(each([64,49,36,25,16],(function(e){return Math.sqrt(e)}))),console.log(each([1.5,2.1,16.4,9.7,11.3],(function(e){return Math.ceil(e)}))),console.log(each([1.5,2.1,16.4,9.7,11.3],(function(e){return Math.floor(e)})));var users=[{name:"artem",age:30}],res=each(users,(function(e){return _objectSpread({},e,{name:e.name.toUpperCase()})}));console.log(res),console.log("---Example 4---");var fnName=function(e){return"a"};console.log("---Example 5---");var TRANSACTION_LIMIT=1e3,account={username:"Jacob",balance:400,withdraw:function(e,o,n){e>TRANSACTION_LIMIT?n("Amount should not exceed ".concat(TRANSACTION_LIMIT," credits")):e>this.balance?n("Amount can't exceed account balance of ".concat(this.balance," credits")):(this.balance-=e,o("Account balance: ".concat(this.balance)))},deposit:function(e,o,n){e>TRANSACTION_LIMIT?n("Amount should not exceed ".concat(TRANSACTION_LIMIT," credits")):e<=0?n("Amount must be more than 0 credits"):(this.balance+=e,o("Account balance: ".concat(this.balance)))}};function each(e,o){var n=[],t=!0,c=!1,a=void 0;try{for(var r,l=e[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var u=r.value;n.push(o(u))}}catch(e){c=!0,a=e}finally{try{t||null==l.return||l.return()}finally{if(c)throw a}}return n}function logItems(e){console.log(e),e.forEach((function(e){return console.log(e)}))}function printContactsInfo(e){var o=e.names,n=e.phones,t=o.split(","),c=n.split(",");t.forEach((function(e,o){console.log("".concat(t[o],": ").concat(c[o]))}))}function calсulateAverage(){for(var e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];var t=0;return o.forEach((function(e){return t+=e})),t/o.length}function processCall(e){var o=Math.random()>.5;console.log(o),o?console.log("З'єднуємо з ".concat(e,", очікуйте...")):console.log("Абонент ".concat(e," недоступний, залиште повідомлення."))}function greet(e){console.log("Ласкаво просимо ".concat(e,"."))}function registerGuest(e,o){console.log("Реєструємо гостя ".concat(e,".")),o(e)}console.log("---Example 6---"),console.log("---Example 7---"),console.log("---Example 8---"),console.log("---Example 9---"),console.log(calсulateAverage(1,2,3,4)),console.log(calсulateAverage(14,8,2)),console.log(calсulateAverage(27,43,2,8,36)),console.log("------"),processCall("Манго"),console.log("------"),console.log("------"),registerGuest("Манго",greet);
//# sourceMappingURL=07-module-4_iterative_methods_lesson-7.7b962483.js.map
