module.exports = {

    /**
     * The `port` setting determines witch TCP port your app be deployed on.
      */

    port: 4000,

    /**
     * 
     * `host`
     * 
      */

    host: "localhost",
    /**
     * 
     * `views`
      */

    views: require('path').join(__basepath, 'resources', 'views'),

    /**
     * 
     * `view-engine`
     * 
      */

    view_engine: "ejs",

    salt: 10
}