(function ($) {

    var dataURL = 'http://www.carqueryapi.com/api/0.3/?callback=?';
    var pictureAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var pictureSearchTag = "collectible car";

    //Events  
    $("#car-years").on("change", populateMake);
    $("#car-makes").on("change", populateModel);
    $("#car-models").on("change", populateTrim);


    var selectedItems = {
        "year": null,
        "make": null,
        "model": null,
        "trim": null
    };

    $.getJSON(dataURL, {
        cmd: "getYears"
    }, function (data) {

        //The 'data' variable contains all response data.
        var min_year = data.Years.min_year;
        var max_year = data.Years.max_year;

        var carYearsArray = [];
        for (var year = max_year; year >= min_year; year--) {
            carYearsArray.push(year);
        }

        for (var i = 0; i < carYearsArray.length; i++) {
            $("#car-years").append("<option value='" + carYearsArray[i] + "'>" + carYearsArray[i] + "</option>");
        }

    });

    function populateGallery() {
        $("#gallery_row").empty();
        $.getJSON( pictureAPI, {
            tags: pictureSearchTag,
            tagmode: "any",
            format: "json"
        }).done(function( data ) {
            $.each( data.items, function( i, item ) {
                $( '<div class="col-xs-3"><a href="' + item.link + '" class="thumbnail"><img src="' + item.media.m + '"></a></div>' )
                .appendTo( "#gallery_row" );
                if ( i === 11 ) {
                  return false;
                }
            });
        });
    }
    populateGallery();

    function populateModel(e) {
        selectedItems.make = $(e.target).val();
        $("#car-models, #car-model-trims").empty();


        $.getJSON(dataURL, {
            cmd: "getModels",
            make: selectedItems.make,
            year: selectedItems.year
        }, function (data) {
            var totalModels = data.Models.length;

            $("#car-models").append("<option>Select</option>");

            for (var i = 0; i <= totalModels; i++) {
                $("#car-models").append("<option value='" + data.Models[i].model_name + "'>" + data.Models[i].model_name + "</option>");
            }


        });



    }

    function populateTrim(e) {
        selectedItems.model = $(e.target).val();
        $("#car-model-trims").empty();

        $.getJSON(dataURL, {
            cmd: "getTrims",
            make: selectedItems.make,
            year: selectedItems.year,
            model: selectedItems.model
        }, function (data) {
            var totalTrims = data.Trims.length;

            console.log(totalTrims);

            for (var i = 0; i <= totalTrims; i++) {
                var trim = data.Trims[i].model_trim;
                trim = (trim === "") ? "no data" : trim;

                $("#car-model-trims").append("<option value='" + trim + "'>" + trim + "</option>");
            }


        });
        pictureSearchTag = selectedItems.make + " " + selectedItems.model;
        populateGallery();


    }


    function populateMake(e) {
        var yearSelected = $(e.target).val();
        selectedItems.year = yearSelected;
        $("#car-model-trims").empty();

        $.getJSON(dataURL, {
            cmd: "getMakes",
            year: yearSelected
        }, function (data) {

            //The 'data' variable contains all response data.
            var totalMakes = data.Makes.length;
            $("#car-makes").empty();
            $("#car-models").empty();
            $("#car-makes").append("<option>Select</option>");
            for (var i = 0; i <= totalMakes; i++) {

                $("#car-makes").append("<option value='" + data.Makes[i].make_id + "'>" + data.Makes[i].make_display + "</option>");
            }



        });

    }

})(jQuery);

