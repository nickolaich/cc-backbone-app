define(['marionette', 'user/views/list', 'user/views/layout', 'user/views/summary', 'user/views/detail', 'user/views/edit'],
    function(Marionette, UserListView, UserLayoutView, UserSummaryView, UserDetailView, UserEditorView) {
        return Marionette.Controller.extend({

            initialize: function (options) {
                this.module = options.module;
            },

            showUserList: function () {
                console.log("User List");
                var userListView = new UserListView({collection: this.module.collection});
                this.module.app.mainRegion.show(userListView);
                this.module.router.navigate("users");
                this.module.collection.fetch();
            },

            showUserDetail: function (selectedUser) {
                var layout = new UserLayoutView({model: selectedUser});
                this.module.app.mainRegion.show(layout);
                //this.module.app.mainContent(layout);
                layout.summary.show(new UserSummaryView({model: selectedUser}));
                layout.detail.show(new UserDetailView({model: selectedUser}));
                this.module.router.navigate("users/" + selectedUser.id);
            },

            showUserEditor: function (selectedUser) {
                var layout = new UserLayoutView({model: selectedUser});
                this.module.app.mainRegion.show(layout);
                layout.summary.show(new UserSummaryView({model: selectedUser}));
                layout.detail.show(new UserEditorView({model: selectedUser}));

                this.module.router.navigate("users/" + selectedUser.id + "/edit");
            }
        });
    });
