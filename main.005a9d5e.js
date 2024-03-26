parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ir8I":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,n,a=!0,u=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return a=t.done,t},e:function(t){u=!0,n=t},f:function(){try{a||null==s.return||s.return()}finally{if(u)throw n}}}}function e(t){return n(t)||s(t)||i(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function s(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function n(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function f(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}var h=function(){function r(t){u(this,r),this.inicialState=t,this.state=this.inicialState.map(function(t){return e(t)}),this.futureState=[],this.score=0,this.status="idle",this.startGame=!1}return f(r,[{key:"slide",value:function(t){for(var e=this.filterZero(t),r=0;r<e.length;r++)e[r]===e[r+1]&&(e[r]*=2,e[r+1]=0,this.score+=e[r]);for(e=this.filterZero(e);e.length<4;)e.push(0);return e}},{key:"filterZero",value:function(t){return t.filter(function(t){return 0!==t})}},{key:"isEqual",value:function(t,e){for(var r=0;r<t.length;r++)for(var i=0;i<t[r].length;i++)if(t[r][i]!==e[r][i])return!1;return!0}},{key:"moveLeft",value:function(){if(this.startGame){for(var t=0;t<4;t++){var r=e(this.state[t]);r=this.slide(r),this.futureState[t]=r}this.isEqual(this.futureState,this.state)||(this.state=this.futureState.map(function(t){return e(t)}),this.setTwo(),this.isWin(this.state),this.isLose()&&(this.status="lose"))}}},{key:"moveRight",value:function(){if(this.startGame){for(var t=0;t<4;t++){var r=e(this.state[t]);r.reverse(),(r=this.slide(r)).reverse(),this.futureState[t]=r}this.isEqual(this.futureState,this.state)||(this.state=this.futureState.map(function(t){return e(t)}),this.setTwo(),this.isWin(this.state),this.isLose()&&(this.status="lose"))}}},{key:"moveUp",value:function(){if(this.startGame){this.futureState=this.state.map(function(t){return e(t)});for(var t=0;t<4;t++){var r=[this.futureState[0][t],this.futureState[1][t],this.futureState[2][t],this.futureState[3][t]];r=this.slide(r);for(var i=0;i<4;i++)this.futureState[i][t]=r[i]}this.isEqual(this.futureState,this.state)||(this.state=this.futureState.map(function(t){return e(t)}),this.setTwo(),this.isWin(this.state),this.isLose()&&(this.status="lose"))}}},{key:"moveDown",value:function(){if(this.startGame){this.futureState=this.state.map(function(t){return e(t)});for(var t=0;t<4;t++){var r=[this.futureState[0][t],this.futureState[1][t],this.futureState[2][t],this.futureState[3][t]];r.reverse(),(r=this.slide(r)).reverse();for(var i=0;i<4;i++)this.futureState[i][t]=r[i]}this.isEqual(this.futureState,this.state)||(this.state=this.futureState.map(function(t){return e(t)}),this.setTwo(),this.isWin(this.state),this.isLose()&&(this.status="lose"))}}},{key:"start",value:function(){this.status="playing",this.startGame=!0,this.state=this.inicialState.map(function(t){return e(t)}),this.score=0,this.setTwo(),this.setTwo()}},{key:"restart",value:function(){this.status="idle",this.startGame=!1,this.state=this.inicialState.map(function(t){return e(t)}),this.score=0}},{key:"setTwo",value:function(){if(this.hasEmptyTile())for(var t=!1;!t;){var e=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());if(0===this.state[e][r]){var i=Math.random()<.9?2:4;this.state[e][r]=i,t=!0}}}},{key:"hasEmptyTile",value:function(){for(var t=0;t<4;t++)for(var e=0;e<4;e++)if(0===this.state[t][e])return!0;return!1}},{key:"isWin",value:function(t){var e=this;t.forEach(function(t){t.forEach(function(t){2048===t&&(e.status="win")})})}},{key:"isLose",value:function(){var e,r=t(this.state);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(i.some(function(t){return 0===t}))return!1;for(var s=0;s<i.length;s++)if(i[s]===i[s+1])return!1}}catch(o){r.e(o)}finally{r.f()}for(var n=0;n<4;n++)for(var a=[this.state[0][n],this.state[1][n],this.state[2][n],this.state[3][n]],u=0;u<a.length;u++)if(a[u]===a[u+1])return!1;return!0}},{key:"updateTile",value:function(t,e){t.innerText="",t.classList.value="",t.classList.add("field__cell"),e>0&&(t.innerText=e,t.classList.add("field__cell--"+e.toString()))}},{key:"updateScore",value:function(t){t.innerText=this.score}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state.map(function(t){return e(t)})}},{key:"getStatus",value:function(){return this.status}},{key:"setBestScore",value:function(t,e){(null===e||e<t)&&localStorage.setItem("user",t)}},{key:"getBestScore",value:function(){var t=localStorage.getItem("user");return null===t?0:t}}]),r}();module.exports=h;
},{}],"5X0I":[function(require,module,exports) {
"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=t(function e(t,a,i){n(this,e);var r=document.createElement("div");r.classList.add("field__cell"),t.append(r),this.x=a,this.y=i,r.id="".concat(this.y,"-").concat(this.x)});module.exports=a;
},{}],"4IYv":[function(require,module,exports) {
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function r(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function n(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}var t=require("./Cell.class"),i=4,a=i*i,o=function(){function r(n){e(this,r),this.cells=[];for(var o=0;o<a;o++)this.cells.push(new t(n,o%i,Math.floor(o/i)));this.size=i}return n(r,[{key:"initializeBoard",value:function(){for(var e=[],r=0;r<4;r++)e.push(Array(4).fill(0));return e}}]),r}();module.exports=o;
},{"./Cell.class":"5X0I"}],"6KIz":[function(require,module,exports) {
"use strict";var e=require("../modules/Game.class"),t=require("../modules/Grid.class"),s={score:document.querySelector('[data-score="score"]'),best:document.querySelector('[data-best="best"]'),start:document.querySelector(".button"),field:document.querySelector(".field"),messageWin:document.querySelector(".message__content--win"),messageLose:document.querySelector(".message__content--lose"),messageStart:document.querySelector(".message__content--start")},r=new t(s.field),a=0,o=new e(r.initializeBoard());function c(){for(var e=0;e<r.size;e++)for(var t=0;t<r.size;t++){var a=document.getElementById("".concat(e,"-").concat(t)),c=o.getState()[e][t];o.updateTile(a,c),s.best.innerText=o.getBestScore()}}s.score&&(s.score.innerText=o.getScore()),s.best&&(s.best.innerText=o.getBestScore()),c(),s.start.addEventListener("click",function(){"Start"===s.start.textContent&&(o.start(),c(),o.updateScore(s.score),s.messageStart.classList.add("hidden")),"Restart"===s.start.textContent&&("win"===o.getStatus()&&s.messageWin.classList.add("hidden"),"lose"===o.getStatus()&&s.messageLose.classList.add("hidden"),o.restart(),s.start.innerText="Start",s.start.classList.add("start"),s.start.classList.remove("restart"),a=0,c(),o.updateScore(s.score),s.messageStart.classList.remove("hidden"))}),document.addEventListener("keydown",function(e){"ArrowUp"!==e.key&&"ArrowDown"!==e.key||e.preventDefault()}),document.addEventListener("keyup",function(e){switch(o.getStatus()){case"playing":switch(e.code){case"ArrowLeft":o.moveLeft();break;case"ArrowRight":o.moveRight();break;case"ArrowUp":o.moveUp();break;case"ArrowDown":o.moveDown()}c(),a++;break;case"win":s.messageWin.classList.remove("hidden");break;case"lose":s.messageLose.classList.remove("hidden")}o.updateScore(s.score);var t=window.localStorage.getItem("user");o.setBestScore(o.getScore(),t),a>=1&&(s.start.innerText="Restart",s.start.classList.remove("start"),s.start.classList.add("restart"))});
},{"../modules/Game.class":"Ir8I","../modules/Grid.class":"4IYv"}]},{},["6KIz"], null)
//# sourceMappingURL=main.005a9d5e.js.map