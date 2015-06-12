(function ($) {
    "use strict"; 


var getStylesURL = (function() {
    var search = location.search.substring(1);
    var searchObj = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}    
    var stylesURL = main.baseServiceUrl + searchObj.make + '/' + searchObj.model + '/' + 
    searchObj.year + '/' + 'styles?state=new&view=full&fmt=json&api_key=' + main.apiKey;
    return stylesURL;
}())

// Grab the template script
var theTemplateScript = $("#car-template").html(),

// Compile the template
theTemplate = Handlebars.compile(theTemplateScript),
theCompiledHtml, carData = {}, pageData = {},
convert2$ = function(arg) {
    return arg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// Register a helper
Handlebars.registerHelper('convert2$', convert2$);

var xhrGetStyles = $.get(getStylesURL);

function insertImages (imagesList, img, trimKey, pageData) {
  if (!!imagesList.length) {
    $.each(imagesList, function(imageKey, value) {
      img = value.photoSrcs[0];
      console.log(value.shotTypeAbbreviation)
      var imageSubStr = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1);
      // if (pageData.galleryPics.length === 0 && value.shotTypeAbbreviation === 'FQ') {
      //   pageData.galleryPics.push(imageSubStr);
      // }
      // if (pageData.galleryPics.length === 1) {
      //   pageData.galleryPics.push(imageSubStr);
      // }
      // if (pageData.galleryPics.length === 2) {
      //   pageData.galleryPics.push(imageSubStr);
      // }       
      if ($.inArray( imageSubStr, pageData.galleryPics ) === -1 && pageData.galleryPics.length < 3) {
        if (value.shotTypeAbbreviation === 'FQ' 
          || value.shotTypeAbbreviation === 'S' 
          || value.shotTypeAbbreviation === 'I') {
          pageData.galleryPics.push(imageSubStr);
        }
      }

      if (value.shotTypeAbbreviation === 'FQ') {
        pageData.trims[trimKey].pic=imageSubStr+"131.jpg";
      }
    });
  } else {
    console.log("No Images")
    pageData.trims[trimKey].pic="http://placehold.it/131x87&text=No Image Available";
  }
}

function createCustomProperites(trimKey, value, MSRPS, cityMPGS, hwyMPGS, engines, transmissionType, speeds, transmissionSpecs, transmissions, driveTrains, bodyStyles, trimIDs) {
    var imagesURL = main.imgServiceUrl + value.id + main.imgServiceUrlParams + main.apiKey,
    img, xhrGetImages = $.getJSON(imagesURL),
    hp = value.engine.hasOwnProperty('horsepower') ? value.engine.horsepower+'-hp, ' : '',
    engineSize = value.engine.hasOwnProperty('size')
    ? value.engine.size + '-liter ' + value.engine.cylinder + '-cylinder ': '',
    engineString = hp + engineSize;

    MSRPS.push(value.price.baseMSRP);
    if (value.hasOwnProperty('MPG')) {
        cityMPGS.push(value.MPG.city);
        hwyMPGS.push(value.MPG.highway);
    }
    pageData.lowestMSRP = convert2$(Math.min.apply(Math, MSRPS));
    pageData.highestMSRP = convert2$(Math.max.apply(Math, MSRPS));

    if (value.engine.type === 'electric') {
        engineString = hp + 'electric';
    } else if (value.engine.type === 'hybrid') {
        engineString += "hybrid";
    } else {
        engineString += value.engine.type;
    }
    engines.push(engineString);
    
    transmissionType = value.transmission.transmissionType;

    transmissionType = transmissionType === 'DIRECT_DRIVE' 
    ? 'direct-drive' : transmissionType === 'AUTOMATED_MANUAL' 
    ? 'automated manual' : transmissionType.toLowerCase();
    
    speeds = value.transmission.numberOfSpeeds.length > 2
    ? value.transmission.numberOfSpeeds 
    : value.transmission.numberOfSpeeds + '-speed';

    transmissionSpecs = speeds + ' ' + transmissionType
    transmissions.push(transmissionSpecs);        
    driveTrains.push(value.drivenWheels);
    bodyStyles.push(value.categories.vehicleStyle);
    trimIDs.push(value.id);

    pageData.bodyStyles = $.unique(bodyStyles);
    pageData.engines = $.unique(engines);
    pageData.driveTrains = $.unique(driveTrains);
    pageData.transmissions = $.unique(transmissions);
    if (cityMPGS[0]) {
        pageData.cityMPG = $.unique(cityMPGS).length > 1 ? Math.min.apply(Math, cityMPGS) + '-' + Math.max.apply(Math, cityMPGS) : cityMPGS[0]
        pageData.hwyMPG = $.unique(hwyMPGS).length > 1 ? Math.min.apply(Math, hwyMPGS) + '-' + Math.max.apply(Math, hwyMPGS) : hwyMPGS[0]
        pageData.hasMPG = true;
    } else {
        pageData.hasMPG = false;
    }

    //insert images
    $.when( xhrGetImages )
    .done(function(imagesList) {
      insertImages(imagesList, img, trimKey, pageData);
      console.log( "$.get succeeded" );
    })
    .fail(function() {
      console.log( "$.get failed!" );
    })
    .always(function() {
      // Pass our data to the template
      theCompiledHtml = theTemplate(pageData);

      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);
      $('#overviewCarousel').find(".item").first().addClass("active");
    });  
}

$.when( xhrGetStyles ).done( function(result) { 
  carData = result;
  pageData.make = carData.styles[0].make.name;
  pageData.model = carData.styles[0].model.name;
  pageData.year = carData.styles[0].year.year;
  pageData.trimCount = carData.stylesCount;
  pageData.trims = carData.styles;
  pageData.hasPics = main.hasPics;
  var MSRPS = [], 
  cityMPGS = [], hwyMPGS = [], hwyMPGRange, 
  engines = [], driveTrains = [], transmissions = [], transmissionType, 
  speeds, transmissionSpecs, bodyStyles = [], trimIDs = [];
  pageData.trimIDs = trimIDs;
  pageData.title = pageData.year + ' ' + pageData.make + ' ' + pageData.model;
  pageData.trimPics = [];
  pageData.galleryPics = [];
  pageData.trims[0].pic = "";
  $.each( pageData.trims, function( key, value ) {
    createCustomProperites(key, value, MSRPS, cityMPGS, hwyMPGS, engines, transmissionType, speeds, transmissionSpecs, transmissions, driveTrains, bodyStyles, trimIDs);
  });
});

$('#overviewCarousel').carousel({
  interval: false
})


}(window.jQuery));
