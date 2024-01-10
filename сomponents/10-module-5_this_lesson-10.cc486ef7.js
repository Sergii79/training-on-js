function _checkPrivateRedeclaration(e,o){if(o.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function _classApplyDescriptorGet(e,o){return o.get?o.get.call(e):o.value}function _classApplyDescriptorSet(e,o,t){if(o.set)o.set.call(e,t);else{if(!o.writable)throw new TypeError("attempted to set read only private field");o.value=t}}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _classExtractFieldDescriptor(e,o,t){if(!o.has(e))throw new TypeError("attempted to "+t+" private field on non-instance");return o.get(e)}function _classPrivateFieldGet(e,o){return _classApplyDescriptorGet(e,_classExtractFieldDescriptor(e,o,"get"))}function _classPrivateFieldInit(e,o,t){_checkPrivateRedeclaration(e,o),o.set(e,t)}function _classPrivateFieldSet(e,o,t){return _classApplyDescriptorSet(e,_classExtractFieldDescriptor(e,o,"set"),t),t}function _defineProperties(e,o){for(var t=0;t<o.length;t++){var s=o[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function _createClass(e,o,t){return o&&_defineProperties(e.prototype,o),t&&_defineProperties(e,t),e}function _defineProperty(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}console.log("# Модуль 5. Заняття 10. Прототипи та класи"),console.log("---Example 1---");var Blogger=function(){"use strict";function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.email,s=o.age,l=o.numberOfPosts,i=o.topics;_classCallCheck(this,e),this.email=t,this.age=s,this.numberOfPosts=l,this.topics=i}return _createClass(e,[{key:"getInfo",value:function(){return"User ".concat(this.email," is ").concat(this.age," years old and has ").concat(this.numberOfPosts," posts")}},{key:"updatePostCount",value:function(e){this.numberOfPosts+=e}}]),e}(),blogger=new Blogger({email:"mango@mail.com",age:24,numberOfPosts:20,topics:["tech","cooking"]});console.log(blogger),console.log(blogger.getInfo()),blogger.updatePostCount(10),console.log(blogger.getInfo());var poly=new Blogger({email:"poly@mail.com",age:19,numberOfPosts:17,topics:["sports","gaming","health"]});console.log("---Example 2---");var Storage=function(){"use strict";function e(o){_classCallCheck(this,e),this._items=o}return _createClass(e,[{key:"getItems",value:function(){return this._items}},{key:"addItem",value:function(e){this._items.push(e)}},{key:"removeItem",value:function(e){var o=this._items.indexOf(e);o>-1&&this._items.splice(o,1)}}]),e}(),storage=new Storage(["🍎","🍋","🍇","🍑"]),items=storage.getItems();console.table(items),storage.addItem("🍌"),console.log("---Example 3---");var permission=!0,_login=new WeakMap,_email=new WeakMap,User=function(){"use strict";function e(o){var t=o.login,s=o.email;_classCallCheck(this,e),_classPrivateFieldInit(this,_login,{writable:!0,value:void 0}),_classPrivateFieldInit(this,_email,{writable:!0,value:void 0}),_classPrivateFieldSet(this,_login,t),_classPrivateFieldSet(this,_email,s)}return _createClass(e,[{key:"login",get:function(){return permission?_classPrivateFieldGet(this,_login):"нєєєє)"},set:function(e){e.length<5&&_classPrivateFieldSet(this,_login,e)}}]),e}(),mango=new User({login:"Mango",email:"mango@dog.woof"});console.log(mango.login),mango.login="dodo",console.log(mango.login);var polyNew=new User({login:"Poly",email:"poly@mail.com"});console.log(polyNew.login),polyNew.login="Polycutie",console.log(polyNew.login),console.log("---Example 4---");var Notes=function(){"use strict";function e(){_classCallCheck(this,e),this.items=[]}return _createClass(e,[{key:"addNote",value:function(e){this.items.push(e)}},{key:"removeNote",value:function(e){var o=this.items.findIndex((function(o){return o.text===e}));this.items.splice(o,1)}}]),e}();_defineProperty(Notes,"defaultText","ororororoor oro ro or o"),_defineProperty(Notes,"Priority",{LOW:"low",NORMAL:"normal",HIGH:"high"});var myNotes=new Notes;console.log(myNotes),myNotes.addNote({text:Notes.defaultText,priority:Notes.Priority.LOW}),console.log(myNotes.items),myNotes.addNote({text:"Моя друга замітка",priority:Notes.Priority.NORMAL}),console.log(myNotes.items),myNotes.removeNote("Моя друга замітка"),console.log(myNotes.items),console.log("---Example 5---");var Toggle=function(){"use strict";function e(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=o.isOpen,s=void 0!==t&&t;_classCallCheck(this,e),this.on=s}return _createClass(e,[{key:"toggle",value:function(){this.on=!this.on}}]),e}(),firstToggle=new Toggle({isOpen:!0});console.group("firstToggle"),console.log(firstToggle.on),firstToggle.toggle(),console.log(firstToggle.on),console.groupEnd("firstToggle");var secondToggle=new Toggle;console.group("secondToggle"),console.log(secondToggle.on),secondToggle.toggle(),console.log(secondToggle.on),console.groupEnd("secondToggle"),console.log("---Example---");
//# sourceMappingURL=10-module-5_this_lesson-10.cc486ef7.js.map
