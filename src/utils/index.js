const path = require('path');
const fs = require('fs');
function getVersion(params) {
    const filepath = path.resolve(__dirname, '../package.json');
    const version = JSON.parse(fs.readFile(filepath)).version;
    return version;
}

module.exports = {
    getVersion,
}