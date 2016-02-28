define(['config', 'socketio', 'socket/controller', 'socket/collection'],
    function(Config, socketio, SocketController, SocketCollection) {
        return function (settings) {
            settings || (settings = {});


            var module = {};
            module.app = settings.app || {};
            module.auth = settings.auth || {};

            // controller
            module.controller = new SocketController({module: module});
            module.socket = socketio(Config.socketServerUrl);
            module.controller.listenSockets();

            console.log(module.socket.io);//.sockets.clients('chatroom1')


            module.collection = new SocketCollection([], {module:module});
            module.collection.initialList();

            var curUser = module.auth.user();
            if (module.auth.token() && curUser){
                module.controller.userOnline(curUser);
            }

            return module;
        };
    });