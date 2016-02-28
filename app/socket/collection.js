define(['backbone', 'socket/model', 'config'],
    function (Backbone, SocketModel, Config) {
        return Backbone.Collection.extend({
            model: SocketModel,
            initialize: function (data, options) {
                this.module = options.module;

                /*this.on("user:selected", function(md){
                 this.module.app.trigger("user:selected", md);
                 });

                 this.on("user:editing", function(md){
                 this.module.app.trigger("user:editing", md);
                 });*/

            },

            initialList: function () {

                // TODO:: read connected users from room 'dashboard'
                var initialData = [
                    /*new SocketModel({name: "Madison Lynch DVM", user_id: 6, email: "test@api.com"}),
                    new SocketModel({name: "Madison Lynch DVM22", user_id: 2, email: "test@api.com11"}),
                    new SocketModel({name: "Madison Lynch DVM2255", user_id: 1, email: "test@api.com1144"})*/
                ];

                //debugger;
                //var clients = this.module.socket.sockets.clients('dashboard');
                //console.log(clients);
                this.set(initialData);

            }
        });
    });