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

var carData = {}, pageData = {};

var convert2$ = function(arg) {
    return arg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

  // Register a helper
  Handlebars.registerHelper('convert2$', function(arg){
    return arg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  });

var populateObject = function() {
    pageData.make = carData.styles[0].make.name;
    pageData.model = carData.styles[0].model.name;
    pageData.year = carData.styles[0].year.year;
    pageData.trimCount = carData.stylesCount
    pageData.trims = carData.styles
    var MSRPS = [], 
    cityMPGS = [], cityMPGRange, hwyMPGS = [], hwyMPGRange, 
    engines = [], driveTrains = [], transmissions = [], transmissionType, 
    speeds, transmissionSpecs, bodyStyles = [], trimIDs = [];
    $.each(carData.styles, function(key, value) {
        var hp = value.engine.hasOwnProperty('horsepower') 
        ? value.engine.horsepower+'-hp, ' : '';
        var engineSize = value.engine.hasOwnProperty('size')
        ? value.engine.size + '-liter ' + value.engine.cylinder + '-cylinder ': '';
        var engineString = hp + engineSize;

        MSRPS.push(value.price.baseMSRP);
        if (value.hasOwnProperty('MPG')) {
            cityMPGS.push(value.MPG.city);
            hwyMPGS.push(value.MPG.highway);
        }

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
    });
    if (cityMPGS[0]) {
        pageData.cityMPG = $.unique(cityMPGS).length > 1 ? Math.min.apply(Math, cityMPGS) + '-' + Math.max.apply(Math, cityMPGS) : cityMPGS[0]
        pageData.hwyMPG = $.unique(hwyMPGS).length > 1 ? Math.min.apply(Math, hwyMPGS) + '-' + Math.max.apply(Math, hwyMPGS) : hwyMPGS[0]
        pageData.hasMPG = true;
    } else {
        pageData.hasMPG = false;
    }
    
    pageData.lowestMSRP = convert2$(Math.min.apply(Math, MSRPS));
    pageData.highestMSRP = convert2$(Math.max.apply(Math, MSRPS));
    pageData.engines = $.unique(engines);
    pageData.driveTrains = $.unique(driveTrains);
    pageData.transmissions = $.unique(transmissions);
    pageData.bodyStyles = $.unique(bodyStyles);
    pageData.trimIDs = trimIDs;
    pageData.title = pageData.year + ' ' + pageData.make + ' ' + pageData.model;
}

var populatePage = function() {
    populateObject();
    var maxGalleryPics = 3;       
    $.each(carData.styles, function(key, value) {
        main.getCarImg(value.id);
    });
    //



    

    
}

$.get(getStylesURL, function(result) {
    carData = result;
    populatePage();

  // Grab the template script
  var theTemplateScript = $("#car-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Pass our data to the template
  var theCompiledHtml = theTemplate(pageData);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);

});





$('#overviewCarousel').carousel({
  interval: false
})


//?make=alfa-romeo&model=4c
/*var str = location.search;
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);*/


/*(function() {

}())*/


}(window.jQuery));
