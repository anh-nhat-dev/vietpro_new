const fs = require('fs');
const path = require('path');

module.exports = function(dir) {

    const files = fs.readdirSync(dir);

    let filelist = [];

    files.forEach(file => {
        if (fs.statSync(path.join(dir,file)).isFile()) {
            filelist.push(file.replace('.js', ''));
        }
    });

    return filelist;
}