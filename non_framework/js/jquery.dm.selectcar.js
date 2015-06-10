/*!
 * jQuery Select Car plugin
 * Original author: dmitry
 * Comments: 
 */
 ;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "carSelector",
      defaults = {
          propertyName: "value"
      };

  // The actual plugin constructor
  function Plugin( element, options ) {
      this.element = element;

      // jQuery has an extend method that merges the
      // contents of two or more objects, storing the
      // result in the first object. The first object
      // is generally empty because we don't want to alter
      // the default options for future instances of the plugin
      this.options = $.extend( {}, defaults, options) ;

      this._defaults = defaults;
      this._name = pluginName;

      this.init();
  }

  Plugin.prototype = {

      init: function() {
          // Place initialization logic here
          // You already have access to the DOM element and
          // the options via the instance, e.g. this.element
          // and this.options
          // you can add more functions like the one below and
          // call them like so: this.yourOtherFunction(this.element, this.options).
          console.log("init fired ...")
          this.createMakesList(this.element);
          this.wireUpEvents();
          this.preselect();
      },
      wireUpEvents: function() {
          var self = this, modelYear = main.currentYear(); 

          $("[data-select-car='make']").change(function(e) {
            var selected =  $(e.target).find(':selected').val(), params;
            if (!!location.search) {
              console.group("check location search")
              console.log(selected)
              params = self.parseQueryString();
              var makeParam = selected === "Make" ? params["make"] : selected;
              console.log(makeParam)
              var modelParam = params["model"];
              self.createModelsList($('[data-select-car=model]'), makeParam, modelParam);
            } else {
              console.log("makes selected")
              //redo 1st arg below
              self.createModelsList($('[data-select-car=model]'), selected);              
            }


          })
          $("[data-select-car='model']").change(function(e) {
            var selected =  $(e.target).find(':selected').val();
            location.href = location.origin + '/non_framework/' + 'overview.html?make=' 
              + $('#car-makes').val() + '&model=' + selected + '&year=' + modelYear;

          })  
      },
      parseQueryString: function() {

              var str = window.location.search;
              var objURL = {};

              str.replace(
                  new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
                  function( $0, $1, $2, $3 ){
                      objURL[ $1 ] = $3;
                  }
              );
              return objURL;
      },
      preselect: function() {
        var self = this, params, makeParam;
        if (!!location.search) {
          console.log("preselecting make and model ...")
          
          params = self.parseQueryString();
          makeParam = params["make"];
          this.createMakesList(this.element, makeParam);
          $('#car-makes').change();
        }
      },
      createModelsList: function(el, selected, modelParam) {
        console.log("creating models list ...")
        var modelYear = main.currentYear(),
        modelsURL = main.baseServiceUrl + selected + '/models?year=' + modelYear + '&fmt=json&api_key=pavaa2wzx6fbzzv6et9n3n5a',
        optionString = '',
        $modelDropdown = $('[data-select-car=model]');
        console.log(modelsURL)
        $.getJSON(modelsURL, function(data) {
          $modelDropdown.empty().prop("disabled", false);
          $.each( data.models, function( key, value ) {
            var selected = value.niceName === modelParam ? "selected='selected'" : "";
            console.log(value.niceName);
            optionString += '<option ' + selected + ' value="' + value.niceName + 
            '" data-year="' +  value.years[value.years.length - 1].year +'">' + value.name + '</option>'; 
          });
          $modelDropdown.append('<option>Model</option>' + optionString);
        })
        
      },

      createMakesList: function(el, makeParam) {
        console.log("creating makes list")
        if($(el).data('selectCar') === 'make') {
          $.getJSON(main.makesUrl, function(data) {
            var optionString = '';
            $.each(data.makes, function(key, value) {
              var selected = value.niceName === makeParam ? "selected='selected'" : "";
                optionString += '<option ' + selected + ' value="' + value.niceName + '">' + 
                value.name+'</option>';
            })
            $(el).append(optionString);
          }) 
        }

      }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
      return this.each(function () {
          if (!$.data(this, "plugin_" + pluginName)) {
              $.data(this, "plugin_" + pluginName,
              new Plugin( this, options ));
          }
      });
  };


})( jQuery, window, document );

/*var createModelsList = function(dataArray) {
    $('#car-models').empty()
        .prop("disabled", false);
    var optionString = '', modelNames = [], latestYear;
    dataArray.forEach(function(index) {
        latestYear = index.years[index.years.length-1];

        latestYear.styles.forEach(function(index2) {
            if (modelNames.indexOf(index2.submodel.modelName) === -1) {
               modelNames.push(index2.submodel.modelName);
            }
        })

    })
    modelNames.forEach(function(modelName) {
        optionString += '<option value="" data-year="">' + modelName + '</option>';
    })
    $('#car-models').append('<option>Model</option>' + optionString);
  }; */