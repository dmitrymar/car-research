(function ($) {
  "use strict"; 

  //learn how to use config
  //Instead of App.Somefunction come up with something better 

  var util = {
    getStylesURL: function () {
      var search = location.search.substring(1);
      var searchObj = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                       function(key, value) { return key===""?value:decodeURIComponent(value) }):{}    
      var stylesURL = main.baseServiceUrl + searchObj.make + '/' + searchObj.model + '/' + 
      searchObj.year + '/' + 'styles?state=new&view=full&fmt=json&api_key=' + main.apiKey;
      return stylesURL;
    },
    convert2$: function(arg) {
      return arg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    },
    // find lowest or highest number in array by passing "min" or "max"
    inArray: function(minmax, array) {
      return Math[minmax].apply(Math, array)
    }
  };

  var App = {
    init: function () {
      this.carStyles = {};
      this.filteredCarStyles = {};
      this.cacheElements();
      this.bindEvents();
      this.create();
    },
    cacheElements: function () {
      //this.specsTemplate = Handlebars.compile($('#specs-template').html());
      this.compiledSpecsTmpl = Handlebars.templates['specs'];
    },
    bindEvents: function () {
      $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
          if (App.filteredCarStyles.trimCount > App.filteredCarStyles.totalTrimsDisplayed) {
            $("#loadingTrims").removeClass("hidden");
            App.loadMoreTrims();
          }
        }
      });
    },
    create: function () {
      this.xhrGetStyles = $.get(util.getStylesURL());
      $.when( this.xhrGetStyles )
      .done( function(result) { 
        App.populateStyles(result);
      })
      .fail(function() {
        console.log( "Could not get styles" );
      });
    },
    render: function () {
      //render specs table
      $('#specs-placeholder').html(this.compiledSpecsTmpl(this.filteredCarStyles));
      $("#trimCount").prepend(this.filteredCarStyles.trimCount);
      $("#title-placeholder").prepend(this.filteredCarStyles.title);
    },
    populateStyles: function (result) {
      console.log("populateStyles")
      this.carStyles = result;
      this.filteredCarStyles.make = this.carStyles.styles[0].make.name;
      this.filteredCarStyles.model = this.carStyles.styles[0].model.name;
      this.filteredCarStyles.year = this.carStyles.styles[0].year.year;
      this.filteredCarStyles.trimCount = this.carStyles.stylesCount;
      this.filteredCarStyles.trims = this.carStyles.styles;
      this.filteredCarStyles.displayTrims = this.filteredCarStyles.trims.slice(0, main.maxVisibleTrims);
      this.filteredCarStyles.totalTrimsDisplayed = main.maxVisibleTrims;  
      this.filteredCarStyles.hasPics = main.hasPics;
      this.filteredCarStyles.MSRPS = []; 
      this.filteredCarStyles.cityMPGS = []; 
      this.filteredCarStyles.hwyMPGS = [];  
      this.filteredCarStyles.engines = []; 
      this.filteredCarStyles.transmissionType = [];
      this.filteredCarStyles.trimIDs = []; 
      this.filteredCarStyles.bodyStyles = []; 
      this.filteredCarStyles.driveTrains = [];
      this.filteredCarStyles.title = this.filteredCarStyles.year + ' ' + this.filteredCarStyles.make + ' ' + this.filteredCarStyles.model;
      this.filteredCarStyles.trimPics = [];
      this.filteredCarStyles.transmissions = [];
      this.filteredCarStyles.galleryPics = [];
      this.filteredCarStyles.trims[0].pic = "";
      this.iterateOverTrims();
      this.render();
    },
    createCustomProperites: function (trimKey, value) {
      console.log("createCustomProperites")
      var fcs = this.filteredCarStyles;

      //Create MSRP list
      fcs.MSRPS.push(value.price.baseMSRP);
      fcs.lowestMSRP = util.convert2$(util.inArray("min", fcs.MSRPS));
      fcs.highestMSRP = util.convert2$(util.inArray("max", fcs.MSRPS));

      //Create engines list
      var hp = value.engine.hasOwnProperty('horsepower') ? value.engine.horsepower+'-hp, ' : '',
      engineSize = value.engine.hasOwnProperty('size')
      ? value.engine.size + '-liter ' + value.engine.cylinder + '-cylinder ': '',
      engineString = hp + engineSize, speeds, transmissionSpecs;

      if (value.engine.type === 'electric') {
          engineString = hp + 'electric';
      } else if (value.engine.type === 'hybrid') {
          engineString += "hybrid";
      } else {
          engineString += value.engine.type;
      }

      fcs.engines.push(engineString);
      fcs.engines = $.unique(fcs.engines);

      //Create MPG properties
      if (value.hasOwnProperty('MPG')) {
          fcs.cityMPGS.push(value.MPG.city);
          fcs.hwyMPGS.push(value.MPG.highway);
      }

      if (fcs.cityMPGS[0]) {
        var lowestCityMPG = util.inArray("min", fcs.cityMPGS);
        var highestCityMPG = util.inArray("max", fcs.cityMPGS);
        var lowestHwyMPG = util.inArray("min", fcs.hwyMPGS);
        var highestHwyMPG = util.inArray("max", fcs.hwyMPGS);

        fcs.cityMPG = $.unique(fcs.cityMPGS).length > 1 ? lowestCityMPG + '-' + highestCityMPG : fcs.cityMPGS[0];
        fcs.hwyMPG = $.unique(fcs.hwyMPGS).length > 1 ? lowestHwyMPG + '-' + highestHwyMPG : fcs.hwyMPGS[0];
        fcs.hasMPG = true;
      } else {
        fcs.hasMPG = false;
      }

      //Create body styles
      if (fcs.bodyStyles.indexOf(value.categories.vehicleStyle) === -1) {
        fcs.galleryPics.push({"bodyStyle": value.categories.vehicleStyle,"id": value.id})
      }
      fcs.bodyStyles.push(value.categories.vehicleStyle);
      fcs.bodyStyles = $.unique(fcs.bodyStyles);

      //Create transminssions list
      fcs.transmissionType = value.transmission.transmissionType;

      fcs.transmissionType = fcs.transmissionType === 'DIRECT_DRIVE' 
      ? 'direct-drive' : fcs.transmissionType === 'AUTOMATED_MANUAL' 
      ? 'automated manual' : fcs.transmissionType.toLowerCase();
      
      speeds = value.transmission.numberOfSpeeds.length > 2
      ? value.transmission.numberOfSpeeds 
      : value.transmission.numberOfSpeeds + '-speed';

      transmissionSpecs = speeds + ' ' + fcs.transmissionType
      fcs.transmissions.push(transmissionSpecs);
      fcs.transmissions = $.unique(fcs.transmissions);

      //Drivetrains
      fcs.driveTrains.push(value.drivenWheels);
      fcs.driveTrains = $.unique(fcs.driveTrains);

      //Create trim ids
      fcs.trimIDs.push(value.id);
    },
    insertTrimPics: function (imagesList, trimKey, filteredCarStyles) {
      console.log("insertTrimPics");
      console.log(filteredCarStyles)
      var fcs = filteredCarStyles;
      if (!!imagesList.length) {
        $.each(imagesList, function(imageKey, value) {
          var img = value.photoSrcs[0];
          if (img) {
            fcs.trims[trimKey].imageSubStr = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1);
            if (value.shotTypeAbbreviation === 'FQ') {
              fcs.trims[trimKey].pic = fcs.trims[trimKey].imageSubStr+"131.jpg";
              fcs.trims[trimKey].picStatus = "front quarter view";
              //exit .each function
              console.log(fcs.trims[trimKey].pic);
              return false;
            }
          } else {
          fcs.trims[trimKey].pic="http://placehold.it/131x87&text=No Image Available";
          fcs.trims[trimKey].picStatus = "photoValue empty";
          }
        });
      } else {
        console.log("No Images")
        fcs.trims[trimKey].pic="http://placehold.it/131x87&text=No Image Available";
      }
    },
    getTrimImages: function () {
      console.log("getTrimImages");
      var fcs = this.filteredCarStyles;
      var displayTrims = fcs.displayTrims;
      console.log(displayTrims)
      var ajaxCounter = 0

      for (var i = 0; i < displayTrims.length; i++) {
        var value = displayTrims[i];
        var imagesURL = main.imgServiceUrl + value.id + main.imgServiceUrlParams + main.apiKey;
        var isLastItem = (i === (displayTrims.length - 1));

        $.when( $.getJSON(imagesURL) )
        .done(function(imagesList) {
          console.log(ajaxCounter)
          fcs.trims[ajaxCounter].pic = "";
          fcs.trims[ajaxCounter].picStatus = "none";          
          App.insertTrimPics(imagesList, ajaxCounter, fcs);
          console.log( "$.get succeeded" );
        })
        .fail(function() {
          console.log( "$.get failed!" );
        })
        .always(function() {
          ajaxCounter++;
          if (displayTrims.length === ajaxCounter) {
            App.renderTrims();
          };          
        });        
        // $.getJSON( imagesURL, function( imagesList ) {
        //   console.log(imagesList )

        //   //App.insertTrimPics(imagesList, i, fcs, isLastItem);
        //   // if (isLastItem === (displayTrims.length - 1)) {
        //   //   console.log(isLastItem)
        //   //   //App.renderTrims()
        //   // };
        // });
      };
    },

    renderGallery: function () {
      console.log("displayGallery");

    },
    renderTrims: function () {
      console.log("renderTrims");
      var compiledTemplate = Handlebars.templates['trims'];
      var html = compiledTemplate(App.filteredCarStyles);
      console.log(App.filteredCarStyles)
      $('#trims-placeholder').append(html); 
    },
    iterateOverTrims: function () {
      $.each( this.filteredCarStyles.trims, function( key, value ) {
        App.createCustomProperites(key, value);
      }); 
      this.getTrimImages();
    },

    loadMoreTrims: function() {
      console.log("loadMoreTrims")
      var fcs = this.filteredCarStyles;
      var trimsSubsetStart, trimsSubsetEnd, lastTrimCount = fcs.totalTrimsDisplayed;
      fcs.totalTrimsDisplayed += main.maxVisibleTrims;
      fcs.totalTrimsDisplayed = fcs.totalTrimsDisplayed > fcs.trimCount ? fcs.trimCount : fcs.totalTrimsDisplayed;
      if (fcs.totalTrimsDisplayed > fcs.trimCount) {
        trimsSubsetEnd = fcs.trimCount;
      } else {
        trimsSubsetEnd = fcs.totalTrimsDisplayed;
      }


      fcs.displayTrims = fcs.trims.slice(lastTrimCount, trimsSubsetEnd);
      this.getTrimImages();
      $("#loadingTrims").addClass("hidden");
    }
  };

  App.init();


$('#overviewCarousel').carousel({
  interval: false
})
  // Register a helper
  Handlebars.registerHelper('convert2$', util.convert2$);  

}(window.jQuery));
