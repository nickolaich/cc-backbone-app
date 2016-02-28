define(['marionette', 'grid/layout', 'grid/paginator', 'person/views/list', 'person/views/layout', 'person/views/detail',
    'scheme/index',
    'grid/simple-search'],
    function(Marionette, PersonGridLayout, GridPaginatorView, PersonListView, PersonLayoutView, PersonDetailView,
             SchemeModule,
             GridSimpleSearchView) {
        return Marionette.Controller.extend({

            initialize: function (options) {
                this.module = options.module;
            },

            /**
             * Show person list
             */
            showPersonList: function () {
                var layout = new PersonGridLayout();
                this.module.app.mainRegion.show(layout);

                var listView = new PersonListView({collection: this.module.collection});
                var paginator = new GridPaginatorView({collection: this.module.collection});
                layout.grid.show(listView);
                layout.paginator.show(paginator);

                var search = new GridSimpleSearchView({collection: this.module.collection});
                layout.simpleSearch.show(search);

                //this.module.app.mainRegion.show(listView);
                this.module.router.navigate("persons");
                this.module.collection.fetch({reset: true});

            },

            /**
             * Show person details
             * @param person
             */
            showPersonDetail: function(person){
                var layout = new PersonLayoutView({model: person});
                this.module.app.mainRegion.show(layout);
                layout.detail.show(new PersonDetailView({model: person}));


                var schemeModule = new SchemeModule({
                    app : this.module.app,
                    region: layout.scheme,
                    dataModel: person
                });
                schemeModule.app.trigger('section:list:requested', 88);

                this.module.router.navigate("persons/" + person.id);
            },

            /**
             * Save person details
             * @param person
             */
            savePerson: function(person){
                person.save();
            }
        });
    });
