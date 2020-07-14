/* eslint-disable */
export default class IE11Polyfills {
    constructor() {
        this.removePolyFill()
        this.assignPolyfill()
    }

    removePolyFill() {
        if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
    }

    assignPolyfill() {
        if (typeof Object.assign != 'function') {
            Object.assign = function(target, varArgs) {
                'use strict'

                if (target == null) throw new TypeError('Cannot convert undefined or null to object');
                const to = Object(target)

                for (var i = 1; i < arguments.length; i++) {
                    const nextSource = arguments[i]

                    if (nextSource != null) {
                        for (var nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) to[nextKey] = nextSource[nextKey]
                        }
                    }
                }

                return to
            }
        }
    }
}