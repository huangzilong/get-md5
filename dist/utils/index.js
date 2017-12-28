'use strict';

var path = require('path');
var fs = require('fs');
function getVersion(params) {
    var filepath = path.resolve(__dirname, '../package.json');
    var version = JSON.parse(fs.readFile(filepath)).version;
    return version;
}

module.exports = {
    getVersion: getVersion
};