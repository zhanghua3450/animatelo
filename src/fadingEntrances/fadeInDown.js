/*! Animate.js | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animate) {
    'use strict';
    animate.fadeInDown = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(0, -100%, 0)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'none',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
