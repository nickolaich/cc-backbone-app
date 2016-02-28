define(['marionette', 'home/views/layout', 'home/views/index', 'home/views/menu', 'home/views/action-log'],
    function(Marionette, HomeLayoutView, HomeIndexView, MenuView, ActionLogView) {
        return Marionette.Controller.extend({
            initialize: function (options) {
                this.module = options.module;
            },

            mainLayout: function(){
                var layout = new HomeLayoutView({module:this.module});
                this.module.app.content.show(layout);
            },

            mainMenu: function(){
                this.module.app.menu.show(new MenuView({module:this.module}));
            },

            showIndex: function () {
                var layout = new HomeIndexView({module:this.module});
                this.module.app.mainRegion.show(layout);


                if (typeof this.module.app.socket === 'object') {
                    layout.actionLog.show(new ActionLogView({collection: this.module.app.socket.collection}));
                }


                this.module.router.navigate("");
            },

            addOnlineUserToDashboard: function(user){

                console.log("addOnlineUserToDashboard", user);

                //console.log(this.module.app.mainRegion.actionLog);//.actionLog.show("11111");
                //var actionLayout = this.module.app.mainRegion.currentView.regionManager.get('actionLog');
                //actionLayout.show(new ActionLogView({module:this.module}));
                this.module.app.socket.collection.add(user);
            },

            updateDashboardList: function(data){
                console.log("updateDashboardList", data);
                this.module.app.socket.collection.set(data);
            }
        });
    });