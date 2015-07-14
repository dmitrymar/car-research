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

//Extract one FQ per body style
//Iterate over all trims and if trimid matches gallerypic id then
//then extract first "FQ" image from imageList
function insertOverviewGalleryPics(imagesList, trimKey, pageData) {

    for (var index in pageData.galleryPics) {

      if (pageData.galleryPics[index].id === pageData.trims[trimKey].id) {
        pageData.galleryPics[index].index = index;
        pageData.galleryPics[index].active = index == 0 ? "active" : "";
        pageData.galleryPics[index].pic = pageData.trims[trimKey].imageSubStr + "600.jpg"
      }
    }
}


function insertTrimPics (imagesList, trimKey, pageData) {
  if (!!imagesList.length) {
    $.each(imagesList, function(imageKey, value) {
      var img = value.photoSrcs[0];
      pageData.trims[trimKey].imageSubStr = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1);
      if (value.shotTypeAbbreviation === 'FQ') {
        pageData.trims[trimKey].pic = pageData.trims[trimKey].imageSubStr+"131.jpg";
        //exit .each function
        return false;
      }
    });
  } else {
    console.log("No Images")
    pageData.trims[trimKey].pic="http://placehold.it/131x87&text=No Image Available";
  }
}

// function insertOverviewGalleryPics(imagesList, trimKey, pageData) {
//   if (!!imagesList.length) {
//     var shotType = [];
//     $.each(imagesList, function(imageKey, value) {
//       img = value.photoSrcs[0];
//       console.log(value.shotTypeAbbreviation)
//       var imageSubStr = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1);
//       if (value.shotTypeAbbreviation === 'FQ') {
//         console.log(shotType.indexOf("FQ"))
//         shotType.push("FQ");
//         pageData.galleryPics.push(imageSubStr);
//       }


//       // if (pageData.galleryPics.length === 0 && value.shotTypeAbbreviation === 'FQ') {
//       //   pageData.galleryPics.push(imageSubStr);
//       // }
//       // if (pageData.galleryPics.length === 1) {
//       //   pageData.galleryPics.push(imageSubStr);
//       // }
//       // if (pageData.galleryPics.length === 2) {
//       //   pageData.galleryPics.push(imageSubStr);
//       // }       
//       // if ($.inArray( imageSubStr, pageData.galleryPics ) === -1 && pageData.galleryPics.length < 3) {
//       //   if (value.shotTypeAbbreviation === 'FQ' 
//       //     || value.shotTypeAbbreviation === 'S' 
//       //     || value.shotTypeAbbreviation === 'I') {
//       //     pageData.galleryPics.push(imageSubStr);
//       //   }
//       // }

//       if (value.shotTypeAbbreviation === 'FQ') {
//         pageData.trims[trimKey].pic=imageSubStr+"131.jpg";
//       }
//     });
//   } else {
//     console.log("No Images")
//     pageData.trims[trimKey].pic="http://placehold.it/131x87&text=No Image Available";
//   }
// }

function createCustomProperites(trimKey, value) {
    var imagesURL = main.imgServiceUrl + value.id + main.imgServiceUrlParams + main.apiKey,
    xhrGetImages = $.getJSON(imagesURL),
    hp = value.engine.hasOwnProperty('horsepower') ? value.engine.horsepower+'-hp, ' : '',
    engineSize = value.engine.hasOwnProperty('size')
    ? value.engine.size + '-liter ' + value.engine.cylinder + '-cylinder ': '',
    engineString = hp + engineSize, speeds, transmissionSpecs;

    pageData.MSRPS.push(value.price.baseMSRP);
    if (value.hasOwnProperty('MPG')) {
        pageData.cityMPGS.push(value.MPG.city);
        pageData.hwyMPGS.push(value.MPG.highway);
    }
    pageData.lowestMSRP = convert2$(Math.min.apply(Math, pageData.MSRPS));
    pageData.highestMSRP = convert2$(Math.max.apply(Math, pageData.MSRPS));

    if (value.engine.type === 'electric') {
        engineString = hp + 'electric';
    } else if (value.engine.type === 'hybrid') {
        engineString += "hybrid";
    } else {
        engineString += value.engine.type;
    }

    if (pageData.bodyStyles.indexOf(value.categories.vehicleStyle) === -1) {
      pageData.galleryPics.push({"bodyStyle": value.categories.vehicleStyle,"id": value.id})
    }


    pageData.engines.push(engineString);
    
    pageData.transmissionType = value.transmission.transmissionType;

    pageData.transmissionType = pageData.transmissionType === 'DIRECT_DRIVE' 
    ? 'direct-drive' : pageData.transmissionType === 'AUTOMATED_MANUAL' 
    ? 'automated manual' : pageData.transmissionType.toLowerCase();
    
    speeds = value.transmission.numberOfSpeeds.length > 2
    ? value.transmission.numberOfSpeeds 
    : value.transmission.numberOfSpeeds + '-speed';

    transmissionSpecs = speeds + ' ' + pageData.transmissionType
    pageData.transmissions.push(transmissionSpecs);        
    pageData.driveTrains.push(value.drivenWheels);
    pageData.bodyStyles.push(value.categories.vehicleStyle);
    pageData.trimIDs.push(value.id);


    pageData.bodyStyles = $.unique(pageData.bodyStyles);
    pageData.engines = $.unique(pageData.engines);
    pageData.driveTrains = $.unique(pageData.driveTrains);
    pageData.transmissions = $.unique(pageData.transmissions);
    if (pageData.cityMPGS[0]) {
        pageData.cityMPG = $.unique(pageData.cityMPGS).length > 1 ? Math.min.apply(Math, pageData.cityMPGS) + '-' + Math.max.apply(Math, pageData.cityMPGS) : pageData.cityMPGS[0]
        pageData.hwyMPG = $.unique(pageData.hwyMPGS).length > 1 ? Math.min.apply(Math, pageData.hwyMPGS) + '-' + Math.max.apply(Math, pageData.hwyMPGS) : pageData.hwyMPGS[0]
        pageData.hasMPG = true;
    } else {
        pageData.hasMPG = false;
    }

    //insert images
    $.when( xhrGetImages )
    .done(function(imagesList) {
      insertTrimPics(imagesList, trimKey, pageData);
      insertOverviewGalleryPics(imagesList, trimKey, pageData)
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
      if (pageData.galleryPics.length === 1) {
        $("#overviewCarousel").find(".carousel-control, .carousel-indicators").hide();
      }
    });  
}

$.when( xhrGetStyles ).done( function(result) { 
  carData = result,
  pageData.make = carData.styles[0].make.name,
  pageData.model = carData.styles[0].model.name,
  pageData.year = carData.styles[0].year.year,
  pageData.trimCount = carData.stylesCount,
  pageData.trims = carData.styles;
  pageData.displayTrims = pageData.trims.slice(0, 10);  
  pageData.hasPics = main.hasPics,
  pageData.galleryShotTypes = ["FQ", "S", "I"],
  pageData.MSRPS = [], pageData.cityMPGS = [], pageData.hwyMPGS = [];  
  pageData.engines = [], pageData.transmissionType = [];
  pageData.trimIDs = [], pageData.bodyStyles = [], pageData.driveTrains = [];
  pageData.title = pageData.year + ' ' + pageData.make + ' ' + pageData.model;
  pageData.trimPics = [], pageData.transmissions = [];
  pageData.galleryPics = [];
  pageData.trims[0].pic = "";
  iterateOverTrims();
});

function iterateOverTrims() {
  $.each( pageData.trims, function( key, value ) {
    createCustomProperites(key, value);
  });
}

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
    pageData.displayTrims = pageData.trims.slice(10, 20);
    iterateOverTrims();
    console.log("bottom!");
  }
});

$('#overviewCarousel').carousel({
  interval: false
})


}(window.jQuery));
