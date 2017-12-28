'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var path = require('path');
var fs = require('fs');

module.exports = {
    readFile: function readFile(p) {
        var rst = '';
        p = (typeof p === 'undefined' ? 'undefined' : _typeof(p)) === 'object' ? path.join(p.dir, p.base) : p;
        try {
            rst = fs.readFileSync(p, 'utf-8');
        } catch (e) {
            rst = null;
        }
        return rst;
    },

    getVersion: function getVersion(params) {
        var filepath = path.resolve(__dirname, '../../package.json');
        var version = JSON.parse(this.readFile(filepath)).version;
        return version;
    }
};