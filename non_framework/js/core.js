function App() {
  this.currentYear = function() {
    // do a script that calculates car model year October 1 to Sept 30
    return 2015
  },
  this.baseServiceUrl = 'http://api.edmunds.com/api/vehicle/v2/',
  this.baseImgUrl = 'http://media.ed.edmunds-media.com',
  this.imgServiceUrl = 'https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=',
  this.imgServiceUrlParams = '&fmt=json&api_key=',
  this.makesUrl = this.baseServiceUrl + "makes?fmt=json&year=" + this.currentYear() + "&api_key=" + 'pavaa2wzx6fbzzv6et9n3n5a',
  this.apiKey = 'pavaa2wzx6fbzzv6et9n3n5a',
  this.maxVisibleTrims = 4,
  this.trimPics = [],
  this.galleryPics = []   
}

var main = new App();

;(function ($) {

  "use strict"; 

  $('.navbar-inverse').load('topnav.html', function() {
  
  // once server side include is implemented for topnav.html, 
  // then use remove call to selectCar plugin
 
  $("[data-select-car='make']").each(function () {
      $(this).carSelector('init');
  });     
})

/*var baseServiceUrl = 'http://api.edmunds.com/api/vehicle/v2/', 
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
*/

}(window.jQuery));


