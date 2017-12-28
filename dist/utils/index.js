'use strict';

var path = require('path');
function getVersion(params) {
    var filepath = path.resolve(__dirname, '../package.json');
    var version = JSON.parse(this.readFile(filepath)).version;
    return version;
}

module.exports = {
    getVersion: getVersion
};