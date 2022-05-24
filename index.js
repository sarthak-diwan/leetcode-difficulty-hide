// ==UserScript==
// @name         Leetcode Difficulty Hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       s4r7h4k
// @match        https://leetcode.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
    waitForElm('.css-10o4wqw').then((ele)=>{
        ele.firstChild.style['display'] = 'none'
    })
    
    // Your code here...
})();
