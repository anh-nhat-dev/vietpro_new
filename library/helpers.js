
const path = require('path');
const walkSync = require('./walkSync');
const _ = require('lodash');

app.loadConfigs = function(){

    global.__config = {};

    let dir = path.join(__basepath, 'config');

    let config = walkSync(dir);

    config.forEach(file => {
        __config[file] = require(path.join(dir,file));
    });

}

app.loadControllers = function() {

    global.controller = {}

    let dir = path.join(__basepath, 'app', 'controllers');

    let config = walkSync(dir);

    config.forEach(file => {
        controller[file] = require(path.join(dir,file));
    });

}

app.loadMiddlewares = function() {

    global.middleware = {}

    let dir = path.join(__basepath, 'app', 'middlewares');

    let config = walkSync(dir);

    config.forEach(file => {
        middleware[file] = require(path.join(dir,file));
    });

}

app.loadModels = function() {

    global.model = {}

    let dir = path.join(__basepath, 'app', 'models');

    let config = walkSync(dir);

    config.forEach(file => {
        model[file] = require(path.join(dir,file));
    });

}

global._config = function(name) {

    try {
        var  value = _.get(__config, name);
    } catch (err) {
        return null;
    }

    return typeof value != "undefined" ? value : null;
} 