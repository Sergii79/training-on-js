var btnElem=document.querySelector("#myBtn"),modalElem=document.querySelector("#myModal"),closeModalBtn=document.querySelector(".close"),openModalHandler=function(e){console.log("button clicked",e),modalElem.style.display="block"},closeModalHandler=function(e){console.log("modal cloce",e),console.log(e.target),console.log(e.currentTarget),e.currentTarget===e.target&&(modalElem.style.display="none")};btnElem.addEventListener("click",openModalHandler),closeModalBtn.addEventListener("click",closeModalHandler),modalElem.addEventListener("click",closeModalHandler);
//# sourceMappingURL=12-module-6_dom-and-event_lesson-12.6446024e.js.map
