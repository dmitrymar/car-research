/*!
 * jQuery Select Car plugin
 * Original author: dmitry
 * Comments: 
 */
 ;(function ( $, window, document, undefined ) {

  "use strict";

  var pluginName = "selectCar",
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
          this.createMakesList(this.element);
      },
      createModelsList: function(el, selected) {
        var modelYear = 2015; // do a script that calculates car model year October 1 to Sept 30
        var modelsURL = main.baseServiceUrl + selected + '/models?year=' + modelYear + '&fmt=json&api_key=pavaa2wzx6fbzzv6et9n3n5a';
        var optionString = '',
        $modelDropdown = $('[data-select-car=model]');
        $.getJSON(modelsURL, function(data) {
          $modelDropdown.empty().prop("disabled", false);
          $.each( data.models, function( key, value ) {
            optionString += '<option value="' + value.niceName + 
            '" data-year="' +  value.years[value.years.length - 1].year +'">' + value.name + '</option>'; 
          });
          $modelDropdown.append('<option>Model</option>' + optionString); 
          $('body').on('change', $modelDropdown, function(event) {
              location.href = location.origin + '/non_framework/' + 'overview.html?make=' 
              + $('#car-makes').val() + '&model=' + event.target.value + '&year=' + modelYear;

          })

        })

      },

      createMakesList: function(el, options) {
        var self = this;

        if($(el).data('selectCar') === 'make') {
          $.getJSON(main.makesUrl, function(data) {
            var optionString = '';
            $.each(data.makes, function(key, value) {
                optionString += '<option value="' + value.niceName + '">' + 
                value.name+'</option>';
            })
            $(el).append(optionString);

          })
          $(el).change(function(e) {
            var selected =  $(e.target).find(':selected').val();
            console.log(selected)
            //redo 1st arg below
            self.createModelsList($('[data-select-car=model]'), selected);
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

  // Plugin DATA-API
  $('[data-select-car]').each(function () {
      $(this).selectCar('init');
  });



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
