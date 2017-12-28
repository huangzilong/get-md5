const path = require('path');
function getVersion(params) {
    const filepath = path.resolve(__dirname, '../package.json');
    const version = JSON.parse(this.readFile(filepath)).version;
    return version;
}

module.exports = {
    getVersion,
}