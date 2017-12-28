const utils = require('./utils');
var path = require('path');
var colors = require('colors');
const md5String = require('blueimp-md5');
const md5File = require('md5-file');
var program = require('commander');

function showVersion() {
    console.log(utils.getVersion());
}

function getStringHash(value) {
    const hash = md5String(value);
    console.log(`The hash of ${value} is:`);
    console.log(hash.red);
}

function getFileHash(path) {
    const hash = md5File.sync(path);
    console.log(`The hash of ${path} is:`);
    console.log(hash.red)
}

program
    .usage('[options] <file ...>')
    .option('-s, --string <value>', 'get a string hash', getStringHash)
    .option('-f, --file <path>', 'get a file hash', getFileHash)
    .option('-v, --verson', 'get version', showVersion)
    .parse(process.argv);