const path = require('path');
const fs = require('fs');

module.exports = {
    readFile(p) {
        let rst = '';
        p = typeof p === 'object' ? path.join(p.dir, p.base) : p;
        try {
            rst = fs.readFileSync(p, 'utf-8');
        } catch (e) {
            rst = null;
        }
        return rst;
    },
    getVersion: function(params) {
        const filepath = path.resolve(__dirname, '../../package.json');
        const version = JSON.parse(this.readFile(filepath)).version;
        return version;
    }
};
