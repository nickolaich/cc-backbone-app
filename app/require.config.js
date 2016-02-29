require.config({
    baseUrl: '/app',
    out: 'main-bundle.js',
    include: "almond",
    name: "main",
    optimize: "none",
    paths: {
        jquery: '../bower_components/' + 'jquery/dist/jquery',
        jqueryui: '../bower_components/' + 'jquery-ui/jquery-ui',
        bootstrap: '../bower_components/' + 'bootstrap/dist/js/bootstrap',
        underscore: '../bower_components/' + 'underscore/underscore',
        backbone: '../bower_components/' + 'backbone/backbone',
        /*backbone_paginator: '../bower_components/' + 'backbone.paginator/lib/backbone.paginator',
        pageable: '../bower_components/' + 'backbone-pageable/lib/backbone-pageable',
        backgrid: '../bower_components/' + 'backgrid/lib/backgrid',
        backgrid_paginator: '../bower_components/' + 'backgrid-paginator/backgrid-paginator',
        backforms: '../bower_components/' + 'backbone-forms/distribution.amd/backbone-forms',
        stickit: '../bower_components/' + 'backbone.stickit/backbone.stickit',*/
        marionette: '../bower_components/' + 'marionette/lib/backbone.marionette',
        //socketio: '../bower_components/' + 'socket.io-client/socket.io',
        moment: '../bower_components/' + 'moment/moment',
        text: '../bower_components/' + 'text/text',
        i18n: '../bower_components/' + 'requirejs-i18n/i18n',
        md5: 'utils/' + 'md5'
    },
    wrapShim: true,
    shim: {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'/*, 'text', 'socketio'*/],
            exports: 'Backbone'
        },
        backbone_paginator: {
            deps: ['backbone'],
        },
        marionette: {
            deps: ['backbone', 'moment'],
            exports: 'Backbone.Marionette'
        },
        md5: {
            exports: 'MD5'
        },
        backgrid: {
            deps: ['backbone'],
            exports: 'Backgrid'
        },
        backgrid_paginator: {
            deps: ['backgrid', 'backbone_paginator'],
            exports: 'Backgrid.Extension.Paginator'
        }
    },
    text: {
        env: 'xhr'
    },
    config: {
        moment: {
            noGlobal: true
        },
        i18n: {
            locale: 'en'
        }
    }
});