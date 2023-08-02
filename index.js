// ==UserScript==
// @name         dark mode for life
// @namespace    https://github.com/EastSun5566
// @version      0.0.1
// @description  enable dark mode with only one line css
// @author       Michael Wang
// @license      MIT
// @match        https://**
// @grant        none
// ==/UserScript==

// @ts-check

(function () {
  document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
}());
