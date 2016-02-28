define(['breadcrumb/collection', 'breadcrumb/views/list'],
    function(BreadCrumbCollection, BreadCrumbList) {
        return function (settings) {
            settings || (settings = {});
            var initialData = settings.initialData || [];
            var module = {};
            var collection = new BreadCrumbCollection(initialData);
            var region = settings.region;
            var view = new BreadCrumbList({collection: collection});

            module.app = settings.app || {};
            module.setCrumbs = function (data) {
                collection.reset(data);
            };

            collection.on("breadcrumb:selected", function (crumb) {
                module.app.trigger(crumb.get("trigger"));
            });

            module.show = function () {
                if (region) {
                    region.show(view);
                } else {
                    throw "Can't show breadcrumbs without specified region";
                }
            };

            return module;
        };
    });