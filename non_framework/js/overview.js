(function ($) {
    "use strict"; 

var getStylesURL = function() {
    var search = location.search.substring(1);
    var searchObj = search?JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}',
                     function(key, value) { return key===""?value:decodeURIComponent(value) }):{}    
    var stylesURL = main.baseServiceUrl + searchObj.make + '/' + searchObj.model + '/' + 
    searchObj.year + '/' + 'styles?state=new&view=full&fmt=json&api_key=' + main.apiKey;
    return stylesURL;
}

var carData = {}, pageData = {};

var convert2$ = function(arg) {
    return arg.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

var populateObject = function() {
    pageData.make = carData.styles[0].make.name;
    pageData.model = carData.styles[0].model.name;
    pageData.year = carData.styles[0].year.year;
    var MSRPS = [], cityMPGS = [], hwyMPGS = [];
    $.each(carData.styles, function(key, value) {
        MSRPS.push(value.price.baseMSRP);
        cityMPGS.push(value.MPG.city);
        hwyMPGS.push(value.MPG.highway);        
    });
    pageData.lowestMSRP = convert2$(Math.min.apply(Math, MSRPS));
    pageData.highestMSRP = convert2$(Math.max.apply(Math, MSRPS));
    pageData.lowestCityMPG = Math.min.apply(Math, cityMPGS);
    pageData.highestCityMPG = Math.max.apply(Math, cityMPGS);
    pageData.lowestHwyMPG = Math.min.apply(Math, hwyMPGS);
    pageData.highestHwyMPG = Math.max.apply(Math, hwyMPGS);                 
}

var populatePage = function() {
    populateObject();
    $('#car-title').append(pageData.year + ' ' + pageData.make + ' ' + pageData.model);
    $('#lowestMSRP').append(pageData.lowestMSRP);
    $('#highestMSRP').append(pageData.highestMSRP);    
    $('#lowestCityMPG').append(pageData.lowestCityMPG);
    $('#highestCityMPG').append(pageData.highestCityMPG);
    $('#lowestHwyMPG').append(pageData.lowestHwyMPG);
    $('#highestHwyMPG').append(pageData.highestHwyMPG);            
}

$.get(getStylesURL, function(result) {
    carData = result;
    populatePage();
});






console.log(baseServiceUrl)
//?make=alfa-romeo&model=4c
/*var str = location.search;
var re = /(chapter \d+(\.\d)*)/i;
var found = str.match(re);*/


/*(function() {

}())*/


}(window.jQuery));
