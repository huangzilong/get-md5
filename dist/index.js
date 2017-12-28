'use strict';

var utils = require('./utils');
var path = require('path');
var colors = require('colors');
var md5String = require('blueimp-md5');
var md5File = require('md5-file');
var program = require('commander');

function showVersion() {
    console.log(utils.getVersion());
}

function getStringHash(value) {
    var hash = md5String(value);
    console.log('The hash of ' + value + ' is:');
    console.log(hash.red);
}

function getFileHash(path) {
    var hash = md5File.sync(path);
    console.log('The hash of ' + path + ' is:');
    console.log(hash.red);
}

program.usage('[options] <file ...>').option('-s, --string <value>', 'get a string hash', getStringHash).option('-f, --file <path>', 'get a file hash', getFileHash).option('-v, --verson', 'get version', showVersion).parse(process.argv);