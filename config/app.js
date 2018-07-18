module.exports = {

    /**
     * The `port` setting determines witch TCP port your app be deployed on.
      */

    port: 3000,


    /**
     * 
     * `views`
      */

    views: require('path').join(__basepath, 'app', 'views'),

    /**
     * 
     * `view-engine`
     * 
      */

    view_engine: "ejs"
}