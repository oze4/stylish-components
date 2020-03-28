/**
 * Copyright (c) 2020
 *
 * Matt Oestreich
 * matthewpoestreich@gmail.com
 * https://mattoestreich.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import t,{Component as e}from"react";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return function(){var e,n=i(t);if(a()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)}}
/* TAKEN FROM STYLED COMPONENTS */
/* https://github.com/styled-components/styled-components/blob/v3.3.3/src/utils/generateAlphabeticName.js */var p=function(t){return String.fromCharCode(t+(t>25?39:97))},y=function(t){var e,n="";for(e=t;e>52;e=Math.floor(e/52))n=p(e%52)+n;return p(e%52)+n;
/* END TAKEN FROM STYLED COMPONENTS */},h=function(){return document.querySelector("style[data-stylish]")},d=function(){var t=document.createElement("style");t.setAttribute("data-stylish","stylin"),document.head.appendChild(t)};export default function(r){return function(i){for(var f=arguments.length,a=new Array(f>1?f-1:0),l=1;l<f;l++)a[l-1]=arguments[l];
return function(f){c(p,e);var l=s(p);function p(){return n(this,p),l.apply(this,arguments)}return o(p,[{key:"interpolateStyle",value:function(){var t=this,e=a.reduce((function(e,n,r){return e+("function"==typeof n?n(t.props):n)+i[r+1]}),i[0]),n=Math.floor(9999999999999*Math.random()),r=y(n),o=h();o||(d(),o=h()),this.element.setAttribute("class",r),o.textContent+=".".concat(r,"{").concat(e,"}")}},{key:"componentDidMount",value:function(){this.interpolateStyle()}},{key:"componentDidUpdate",value:function(){this.interpolateStyle()}},{key:"render",value:function(){var e=this;
return t.createElement(r,u({},this.props,{ref:function(t){return e.element=t}}))}}]),p}()}}
