global.__basepath = process.cwd();

global.app = require('express')();

require('./app');

require('./app/kenel');

app.listen(_config('app.port'), function() {
    console.log(`Server activation on port ${_config('app.port')}`);
});