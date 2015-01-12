(function ($) {
    
"use strict"; 

$('.navbar-inverse').load('topnav.html')

var baseServiceUrl = 'http://api.edmunds.com/api/vehicle/v2/', 
makesUrl = baseServiceUrl + 'makes?fmt=json&state=new&api_key=pavaa2wzx6fbzzv6et9n3n5a',
getModelUrl = function(brand) {
    return baseServiceUrl + brand + '/models?fmt=json&state=new&api_key=pavaa2wzx6fbzzv6et9n3n5a';
};

var createMakesList = function(dataArray) {
    var optionString = '';
    dataArray.forEach(function(index) {
        optionString += '<option value="'+index.niceName+'">'+index.name+'</option>';
    })
    $('#car-makes').append(optionString)
}; 

var createModelsList = function(dataArray) {
    $('#car-models').empty()
        .prop("disabled", false);
    var optionString = '';
    dataArray.forEach(function(index) {
        optionString += '<option value="'+index.niceName+'">'+index.name+'</option>';
    })
    $('#car-models').append('<option>Model</option>'+optionString)
}; 

$.getJSON(makesUrl, function(data) {
    createMakesList(data.makes)
})


$('body').on('change', '#car-makes', function() {
    $.getJSON(getModelUrl(this.value), function(data) {
        createModelsList(data.models)
    })
})

$('body').on('change', '#car-models', function() {
    window.location = 'overview.html'
})


}(window.jQuery));
