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

(function () {
  const style = document.createElement('style');
  style.textContent = `
    html {
      filter: invert(1) hue-rotate(180deg) contrast(0.8);
    }

    /** reverse filer for media elements */
    img, video, picture, canvas, iframe, embed {
      filter: invert(1) hue-rotate(180deg);
    }
  `;
  document.head.appendChild(style);
}());
