function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var credentials={correctLogin:"admin",correctPassword:"123qwerty"},btnElem=document.querySelector("#myBtn"),modalElem=document.querySelector("#myModal"),modalContentElem=document.querySelector(".modal-content"),closeModalBtn=document.querySelector(".close"),newForm=createForm();modalContentElem.append(newForm);var Modal=function(){"use strict";function e(t){_classCallCheck(this,e),this.element=t}return _createClass(e,[{key:"open",value:function(){this.element.style.display="block"}},{key:"close",value:function(){this.element.style.display="none",btnElem.removeEventListener("click",openModalHandler),btnElem.remove()}}]),e}(),modal=new Modal(modalElem);function createForm(){var e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("input"),o=document.createElement("button");return t.name="login",n.name="password",n.type="password",o.type="submit",o.textContent="Ok",e.append(t),e.append(n),e.append(o),e}var openModalHandler=function(e){modal.open()},closeModalHandler=function(e){console.log("target",e.target),console.log("currentTarget",e.currentTarget),e.currentTarget===e.target&&modal.close()};btnElem.addEventListener("click",openModalHandler),closeModalBtn.addEventListener("click",closeModalHandler),modalElem.addEventListener("click",closeModalHandler),document.addEventListener("keydown",(function(e){"Escape"===e.code&&modal.close()})),newForm.addEventListener("submit",(function(e){e.preventDefault();var t={};new FormData(e.currentTarget).forEach((function(e,n){return t[n]=e})),t.login===credentials.correctLogin&&t.password===credentials.correctPassword?(newForm.remove(),modalContentElem.insertAdjacentHTML("beforeend","<h2>Вхід успішний</h2>")):newForm.insertAdjacentHTML("beforeend",'<p style="color: red">Логін або пароль не вірні</p>')}));var select=document.querySelector(".pizza-select"),textOutput=document.querySelector(".text-output"),valueOutput=document.querySelector(".value-output");function setOutput(){var e=select.value,t=select.selectedIndex,n=select.options[t].text;textOutput.textContent=n,valueOutput.textContent=e}setOutput(),select.addEventListener("change",setOutput);var textInput=document.querySelector(".text-input"),setFocusBtn=document.querySelector('[data-action="set"]'),removeFocusBtn=document.querySelector('[data-action="remove"]');setFocusBtn.addEventListener("click",(function(){textInput.focus()})),removeFocusBtn.addEventListener("click",(function(){textInput.blur()})),textInput.addEventListener("focus",(function(){textInput.value="This input has focus"})),textInput.addEventListener("blur",(function(){textInput.value=""}));
//# sourceMappingURL=12-module-6_dom-and-event_lesson-12.1bf60dfb.js.map
