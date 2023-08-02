// ==UserScript==
// @name         Dark mode
// @namespace    https://github.com/EastSun5566
// @version      0.0.4
// @description  Enable dark mode with only one line of CSS
// @author       Michael Wang
// @license      MIT
// @match        *://*/*
// @grant        none
// ==/UserScript==

// @ts-check

(function () {
  document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
}());
