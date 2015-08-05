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
      this.compiledSpecsTmpl = Handlebars.templates['specs'];
      this.compiledGalleryTmpl = Handlebars.templates['gallery'];
      this.ajaxCounter = 0;
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
      var fcs = this.filteredCarStyles;
      this.carStyles = result;
      fcs.make = result.styles[0].make.name;
      fcs.model = result.styles[0].model.name;
      fcs.year = result.styles[0].year.year;
      fcs.trimCount = result.stylesCount;
      fcs.trims = result.styles;
      fcs.displayTrims = fcs.trims.slice(0, main.maxVisibleTrims);
      fcs.totalTrimsDisplayed = 0;  
      fcs.hasPics = main.hasPics;
      fcs.MSRPS = []; 
      fcs.cityMPGS = []; 
      fcs.hwyMPGS = [];  
      fcs.engines = []; 
      fcs.transmissionType = [];
      fcs.trimIDs = []; 
      fcs.bodyStyles = []; 
      fcs.driveTrains = [];
      fcs.title = fcs.year + ' ' + fcs.make + ' ' + fcs.model;
      fcs.trimPics = [];
      fcs.transmissions = [];
      fcs.galleryPics = [];
      fcs.galleryControls = true;
      fcs.trims[0].pic = "";
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
      fcs.priceRange = fcs.highestMSRP > fcs.lowestMSRP ? 
      "$"+ fcs.lowestMSRP + " – " + "$" + fcs.highestMSRP : "$" + fcs.lowestMSRP;

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
      console.group("insertTrimPics")
      console.log(filteredCarStyles);
      console.groupEnd();
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
      var ajaxCounter = this.ajaxCounter;

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
        .always(function(imagesList) {
          ajaxCounter++;
          App.ajaxCounter = ajaxCounter;
          if (ajaxCounter === 1) {
            App.renderGallery(imagesList);
          }
                    
          if (displayTrims.length === (ajaxCounter - fcs.totalTrimsDisplayed)) {
            App.renderTrims();
            fcs.totalTrimsDisplayed = ajaxCounter;
            console.log(fcs)
          };
        });        
      };
    },
    renderGallery: function (imagesList) {
      console.log("displayGallery");
      var fcs = this.filteredCarStyles;
      var galleryPics = this.filteredCarStyles.galleryPics;
      var imageCounter = 0;
      var shotTypes = ["FQ", "F", "I"];
      var insertedShotTypes = [];
      $.each(imagesList, function(imageKey, value) {
        var img = value.photoSrcs[0];
        var pic = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1)+"600.jpg";
        var view = value.shotTypeAbbreviation;
        var galleryLength = galleryPics.length;
        console.log(view)
        function populateGalleryPics(idx) {
          var imageObject = {
            pic: pic,
            view: view,
            caption: value.captionTranscript,
            index: idx,
            get active() {  return this.index === 0 ? "active" : "" }
          }
          galleryPics.splice(idx, 0, imageObject)
        }

        if (galleryPics.length < 3) {
          if (insertedShotTypes.indexOf(view) === -1) {
            $.each(shotTypes, function( shotKey, shotValue ) {
              if (view === shotValue) {
                populateGalleryPics(shotKey);
              } 
            });
            insertedShotTypes.push(view);
          }
        } else {
          //exit loop          
          return false;         
        }
      });

      console.log(galleryPics)
      fcs.galleryControls = galleryPics.length > 1 ? true : false;
      $('#gallery-placeholder').html(this.compiledGalleryTmpl(this.filteredCarStyles));
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
      var trimsSubsetEnd;
      var lastTrimCount = fcs.totalTrimsDisplayed;
      var nextTrimTotalTrims = lastTrimCount + main.maxVisibleTrims;
      trimsSubsetEnd = fcs.trimCount > nextTrimTotalTrims ? nextTrimTotalTrims : fcs.trimCount;
      fcs.displayTrims = fcs.trims.slice(lastTrimCount, trimsSubsetEnd);

      setTimeout(function() {
        App.getTrimImages();
        $("#loadingTrims").addClass("hidden");
      }, 5000)
    }
  };

  App.init();


$('#overviewCarousel').carousel({
  interval: false
})
  // Register a helper
  Handlebars.registerHelper('convert2$', util.convert2$);  

}(window.jQuery));
