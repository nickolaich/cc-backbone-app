define(['marionette', 'scheme/section/views/layout', 'scheme/section/collection', 'scheme/section/views/list',
        'scheme/question/views/list', 'scheme/question/collection', 'scheme/result/collection'],
    function(Marionette, SchemeLayoutView, SectionCollection, SchemeSectionsView,
    SchemeQuestionView, QuestionCollection, ResultCollection) {
        return Marionette.Controller.extend({

            initialize: function (options) {
                this.module = options.module;
            },

            showSections: function (schemeId, region) {
                var region = this.module.region;


                var sections = new SectionCollection([], {module : this.module});
                sections.updateUrl(schemeId);

                var schemeLayout = new SchemeLayoutView();
                region.show(schemeLayout);
                sections.fetch().then(function (response) {
                    schemeLayout.sections.show(new SchemeSectionsView({collection : sections, module : this.module}));
                });
            },

            expandSection: function(section, viewItem){
                var personId = 250063,
                    module = this.module;
                var questions = new QuestionCollection([], {module : module});
                if (viewItem.questions){
                    if (viewItem.questions.$el.is(":visible")){
                        viewItem.questions.$el.hide();
                    } else {
                        viewItem.questions.$el.show();
                    }
                } else {
                    questions.updateUrl(section.id);
                    questions.fetch().then(function (response) {

                        var resultCollection = new ResultCollection([], {module : module});
                        resultCollection.updateUrl(section.get('scheme_id'), section.id, personId);
                        resultCollection.fetch().then(function(){
                            var questionsView = new SchemeQuestionView(
                                {
                                    collection : questions,
                                    result : resultCollection,
                                    module : module
                                });
                            viewItem.addRegion("questions", ".questions");
                            viewItem.questions.show(questionsView);
                        });



                    });

                }

            }
        });
    });
