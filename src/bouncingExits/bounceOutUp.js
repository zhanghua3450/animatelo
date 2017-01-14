/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.bounceOutUp = function (selector, options) {
        var keyframeset = [
            {
                opacity: 1,
                transform: 'none',
                offset: 0
            },
            {
                transform: 'translate3d(0, -10px, 0)',
                offset: 0.2
            },
            {
                opacity: 1,
                transform: 'translate3d(0, 20px, 0)',
                offset: 0.4
            },
            {
                opacity: 1,
                transform: 'translate3d(0, 20px, 0)',
                offset: 0.45
            },
            {
                opacity: 0,
                transform: 'translate3d(0, -2000px, 0)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});