function _arrayLikeToArray(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=r[e];return o}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _unsupportedIterableToArray(r,t){if(r){if("string"==typeof r)return _arrayLikeToArray(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(r,t):void 0}}console.log("Hello!");var colorPalette=document.querySelector(".color-palette"),output=document.querySelector(".output");function selectColor(r){if("BUTTON"===r.target.nodeName){var t=r.target.dataset.color;output.textContent="Selected color: ".concat(t),output.style.color=t}}function createPaletteItems(){for(var r,t=[],e=0;e<60;e++){var o=getRandomHexColor(),a=document.createElement("button");a.type="button",a.dataset.color=o,a.style.backgroundColor=o,a.classList.add("item"),t.push(a)}(r=colorPalette).append.apply(r,_toConsumableArray(t))}function getRandomHexColor(){for(var r="#",t=0;t<6;t++)r+="0123456789ABCDEF"[Math.floor(16*Math.random())];return r}colorPalette.addEventListener("click",selectColor),createPaletteItems();
//# sourceMappingURL=14-module-6_patterns-and-events_lesson-13.764c05c3.js.map
