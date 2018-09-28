// var open = require('open');

global.__basepath = process.cwd();

global.app = require('express')();

require('./app');

require('./app/kenel');

app.listen(process.env.PORT || _config('app.port'),_config('app.host'), function() {
    console.log(`Server activation on port ${_config('app.port')}`);
    // open(`http://${_config('app.host')}:${_config('app.port')}`);
});
