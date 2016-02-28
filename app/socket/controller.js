define(['marionette', 'config'],
    function (Marionette, Config) {
        return Marionette.Controller.extend({

            onlineRoom: 'dashboard',

            initialize: function (options) {
                var that = this;
                that.module = options.module;
                that.routes = {
                    'user_online' : {
                        path : '/sockets/user/online',
                        callback: function(data) {
                            //console.log("callback", data);
                            that.module.app.trigger('notify:user:online', data);
                        }
                    },

                    'user_dashboard': {
                        path : '/sockets/user/dashboard',
                        callback: function(data) {
                            //console.log("callback", data);
                            that.module.app.trigger('notify:user:dashboard', data);
                        }
                    }
                };
            },

            listenSockets: function(){
                var that = this;
                for (i in that.routes) {
                    var info = that.routes[i];
                    that.module.socket.on(info.path, info.callback);
                }
            },

            // User is online. broadcast event
            userOnline: function(user){
                this.emit('user_online', user);
                //console.log(this.module.socket);
                //this.module.socket.join(this.onlineRoom);
            },

            // Emit event
            emit: function(event, data) {
                console.log("emited " + event, data);
                this.module.socket.emit(this.routes[event].path, data);

            },

            // Broadcast event
            broadcast: function(event, data) {
                console.log("broadcasted " + event, data);
                this.module.socket.broadcast.emit(this.routes[event].path, data);

            }

        });
    });

