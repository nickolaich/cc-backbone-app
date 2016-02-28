define('index', ['backbone', 'marionette', 'home/index', 'user/index', 'breadcrumb/index', 'auth/index', /*'person/index',*/ 'config'/*, 'socket/index'*/],
    function (Backbone, Marionette, HomeModule, UserModule, BreadCrumbModule, AuthModule, /*PersonModule,*/ Config/*, SocketModule*/) {
        // App objects
        SuperAdmin = new Marionette.Application();
        SuperAdmin.addRegions({
            mainRegion: "#app",
            navRegion: "#breadcrumb",
            menu: "#main-menu",
            content: "#content"
        });
console.log("111");
        $.ajaxSetup({
            headers: {
                token:localStorage.getItem('_token')
            },
            statusCode: {
                401: function () {
                    // Redirec the to the login page.
                    window.location.replace('/#login');

                }
            }
        });

        // Module loader
        SuperAdmin.addInitializer(function () {
            SuperAdmin.breadCrumbs = new BreadCrumbModule({
                app: SuperAdmin,
                initialData: {title: "Home"},
                region: SuperAdmin.navRegion
            });

            SuperAdmin.home = new HomeModule({app: SuperAdmin});

            SuperAdmin.refreshLayout();

            SuperAdmin.user = new UserModule({app: SuperAdmin});
            SuperAdmin.auth = new AuthModule({app : SuperAdmin});
            //SuperAdmin.person = new PersonModule({app : SuperAdmin});
            //SuperAdmin.socket = new SocketModule({app : SuperAdmin, auth : SuperAdmin.auth});
        });

        SuperAdmin.refreshLayout = function(){
            SuperAdmin.home.controller.mainLayout();
            SuperAdmin.home.controller.mainMenu();
            SuperAdmin.breadCrumbs.show();
        };



        // Breadcrumbs events
        SuperAdmin.addInitializer(function () {
            var crumbs = {
                home: {title: "Dashboard", trigger: "index:requested"},
                list: {title: "User Listing", trigger: "user:listing:requested"},
                persons:{title: "CMS", trigger: "person:listing:requested"}
            };

            SuperAdmin.on("user:selected", function (selectedUser) {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {title: selectedUser.get("name")}]);
            });
            SuperAdmin.on("user:editing", function (selectedUser) {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list, {title: "User editing " + selectedUser.get("name")}]);
            });
            SuperAdmin.on("user:listing:requested", function () {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.list]);
            });

            SuperAdmin.on("person:listing:requested", function () {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.persons, ]);
            });

            SuperAdmin.on("person:selected", function (person) {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.persons, {title: person.get("name")}]);
            });
            SuperAdmin.on("person:editing", function (person) {
                SuperAdmin.breadCrumbs.setCrumbs([crumbs.home, crumbs.persons, {title: "Person editing " + person.get("name")}]);
            });

            SuperAdmin.on("index:requested", function () {
                SuperAdmin.breadCrumbs.setCrumbs(crumbs.home);
            });

        });

        // User events
        SuperAdmin.addInitializer(function () {
            SuperAdmin.on("user:selected", function (selectedUser) {
                SuperAdmin.user.controller.showUserDetail(selectedUser);
            });
            SuperAdmin.on("user:editing", function (selectedUser) {
                SuperAdmin.user.controller.showUserEditor(selectedUser);
            });
            SuperAdmin.on("user:listing:requested", function () {
                SuperAdmin.user.controller.showUserList();
            });
        });

        // Person (CMS) events
        /*SuperAdmin.addInitializer(function () {
            SuperAdmin.on("person:selected", function (person) {
                SuperAdmin.person.controller.showPersonDetail(person);
            });
            SuperAdmin.on("person:editing", function (person) {
                SuperAdmin.person.controller.showPersonEditor(person);
            });
            SuperAdmin.on("person:listing:requested", function () {
                SuperAdmin.person.controller.showPersonList();
            });
            SuperAdmin.on("person:save", function (person) {
                SuperAdmin.person.controller.savePerson(person);
            });
        });*/

        // Auth events
        SuperAdmin.addInitializer(function () {
            SuperAdmin.on("auth:login:show", function () {
                SuperAdmin.auth.controller.showLoginForm();
            });

            SuperAdmin.on("auth:login:do", function (credentials) {
                SuperAdmin.auth.controller.loginDo(credentials);
            });

            SuperAdmin.on("auth:logout", function (credentials) {
                SuperAdmin.auth.controller.logout(credentials);
            });
        });

        // Home events
        SuperAdmin.addInitializer(function () {
            SuperAdmin.on("index:requested", function () {
                SuperAdmin.home.controller.showIndex();
            });
            // start app
            Backbone.history.start();

        });



        $(function () {console.log("START");
            SuperAdmin.start();
        });

        return SuperAdmin;

    });
