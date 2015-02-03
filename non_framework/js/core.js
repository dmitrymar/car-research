var main = {
    baseServiceUrl: 'http://api.edmunds.com/api/vehicle/v2/',
    baseImgUrl: 'http://media.ed.edmunds-media.com',
    imgServiceUrl: 'https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=',
    imgServiceUrlParams: '&fmt=json&api_key=',
    apiKey: 'pavaa2wzx6fbzzv6et9n3n5a',
    getCarImg: function(id) {
        var imagesJSON = this.imgServiceUrl + id + this.imgServiceUrlParams + this.apiKey,
        img, imgResized;
        $.getJSON(imagesJSON, function(result) {
            if (!!result.length) {
                $.each(result, function(key, value) {
                    if (value.shotTypeAbbreviation === 'FQ') {
                        img = value.photoSrcs[0];
                        imgResized = main.baseImgUrl + img.substring(0, img.lastIndexOf('_')+1) + '131.jpg'
                        return false;
                    }
                });
                $("[data-trimid='" + id + "']").attr("src", imgResized);
            }


        })
    }
};

;(function ($) {

"use strict"; 

$('.navbar-inverse').load('topnav.html')

var baseServiceUrl = 'http://api.edmunds.com/api/vehicle/v2/', 
apiKey = 'pavaa2wzx6fbzzv6et9n3n5a',
makesUrl = baseServiceUrl + 'makes?fmt=json&state=new&api_key=' + apiKey,
getModelUrl = function(brand) {
    return baseServiceUrl + brand + '/models?fmt=json&state=new&api_key=' + apiKey;
},
makesData = {};

var createMakesList = function() {
    var optionString = '';
    $.each(makesData, function(key, value) {
        optionString += '<option value="' + value.niceName + 
        '" data-index="'+ key +'">'+value.name+'</option>';
    })
    $('#car-makes').append(optionString)
}; 

var createModelsList = function(selectedIndex) {
    $('#car-models').empty()
        .prop("disabled", false);
    var optionString = ''
    $.each( makesData[selectedIndex].models, function( key, value ) {
      optionString += '<option value="' + value.niceName + 
      '" data-year="' +  value.years[value.years.length - 1].year +'">' + value.name + '</option>'; 
    });
    $('#car-models').append('<option>Model</option>' + optionString);        
}
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

$.getJSON(makesUrl, function(data) {
    makesData = data.makes;
    createMakesList()
})


$('body').on('change', '#car-makes', function() {
    var selectedIndex = $(this).find(':selected').data('index')
    createModelsList(selectedIndex);
})

$('body').on('change', '#car-models', function(event) {
    var year = $(this).find(':selected').data('year')
    location.href = location.origin + '/non_framework/' + 'overview.html?make=' 
    + $('#car-makes').val() + '&model=' + this.value + '&year=' + year;

})


}(window.jQuery));
