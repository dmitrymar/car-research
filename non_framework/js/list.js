(function ($) {
  "use strict"; 

  var App = {
    init: function () {
      this.cacheElements();
      this.bindEvents();
      this.create();
    },
    cacheElements: function () {
      this.car = {
        make: {
          name: "Ford",
          niceName: "ford"          
        },
        models: [],
        trims: []
      };

    },
    bindEvents: function () {

    },
    getModelDetails: function(make, models) {
      console.log("getModelDetails")
      if (models.length > 5) {
        var modelsRequested = 0
        setInterval(function() {
          var totalModels = modelsRequested + 5;
          totalModels = totalModels > models.length ? models.length : totalModels;
          for (var i = modelsRequested; i < totalModels; i++) {
            var model = models[i].niceName
            // $.get(main.trims(make, model), function(modelresult) {
            //   App.car.trims.push(modelresult)
            //   console.log(App.car.trims)
            // })
            modelsRequested++;
          };
        }, 3000)          
      } else {
        //no interval model detail request
      }
    },
    create: function () {
      var make = this.car.make.niceName;
      //get models list
      $.get(main.models(make), function(result) {
        App.car.models = result.models;
        var models = App.car.models;
        var modelsCount = result.modelsCount;

        var modelsRequested = modelsCount < 5 ? modelsCount : 5;


        //get details
        App.getModelDetails(make, models)





        // $.each(models, function(modelkey, modelvalue) {
        //   var model = modelvalue.niceName;
        //   $.get(main.trims(make, model), function(modelresult) {
        //     App.car.trims.push(modelresult)
        //     console.log(App.car.trims)
        //   })
        // })

      }) 

    }
  };

  App.init();

}(window.jQuery));
