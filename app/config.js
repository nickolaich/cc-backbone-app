define([],
    function () {
        return {
            baseUrl: 'http://ccpn-api/v1/',
            getModelUrl: function (moduleName){
                return this.baseUrl + moduleName;
            },
            socketServerUrl: 'http://localhost:3001/'
        };
    });