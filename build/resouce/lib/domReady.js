/**
 * @license RequireJS domReady 2.0.0 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/domReady for details
 */

define([],function(){"use strict";function n(n){var e;for(e=0;e<n.length;e++)n[e](l)}function e(){var e=u;r&&e.length&&(u=[],n(e))}function t(){r||(r=!0,a&&clearInterval(a),e())}function o(n){return r?n(l):u.push(n),o}var d,i,a,c="undefined"!=typeof window&&window.document,r=!c,l=c?document:null,u=[];if(c){if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1);else if(window.attachEvent){window.attachEvent("onload",t),i=document.createElement("div");try{d=null===window.frameElement}catch(n){}i.doScroll&&d&&window.external&&(a=setInterval(function(){try{i.doScroll(),t()}catch(n){}},30))}"complete"!==document.readyState&&"interactive"!==document.readyState||t()}return o.version="2.0.0",o.load=function(n,e,t,d){d.isBuild?t(null):o(t)},o});