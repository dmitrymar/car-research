//Date picker
//Uses newer version of datepicker https://github.com/eternicode/bootstrap-datepicker
//Its recommended by bootstrap team http://expo.getbootstrap.com/resources/
$('[data-toggle="calendar"]').datepicker()
.on("show", function(e){
    var $date_input = $(this).parent().find('input'),
    $datepicker = $('body').find(".datepicker"),
    $prev = $('body').find(".datepicker .prev"),
    $next = $('body').find(".datepicker .next"),
    $offset = $(this).parent().offset();

    //set date on datepicker
    $(this).datepicker('setDate', $date_input.val());

    //change arrow styles
    $prev.html("<i class='fa fa-arrow-left'></i>");
    $next.html("<i class='fa fa-arrow-right'></i>");

    //chage datepicker position 
    $datepicker.css("left", $offset.left + 15);
}).on('changeDate', function(e) {
    var $date_input = $(this).parent().find('input');
    var formatted_date = $(this).datepicker('getFormattedDate');
    $date_input.val(formatted_date);
});

//Zip code 
$("#zip-code").on("keyup", function() {
    if ($("#city-group").hasClass("hide")) {
        var value = $(this).val();
        if (value.length > 4) {
            $("#location-wrap").removeClass('hide');
        } else {
            $("#location-wrap, #city-group, #state-group").addClass('hide');
        }
    }
});

$("#location").change(function() {
    var id = $(this).find("option:selected").attr("id");

    switch (id) {
        case "other-location":
            $("#city-group, #state-group").removeClass('hide');
            $("#location-wrap").addClass('hide');
            break;
    }
});

//Dependent Fields
var selector = 'form[data-validate=true] :input:not([type="hidden"],:submit)';

$(selector).on("blur", function() {
    var emptyDependant = $(".income").filter(function() {
        return this.value == "";
    });

    var nonEmptyDependant = $(".income").filter(function() {
        return this.value != "";
    });

    if (emptyDependant && nonEmptyDependant) {
        emptyDependant.each(function() {
            var formGroup = $(this).closest('.form-group');
            if (!formGroup.hasClass('has-error')) {
                formGroup.addClass('has-error');
                $(this).closest('.controls')
                .append('<span class="help-block error-msg">This field is required</span>');
            }
        })
    };
    $(".income").each(function() {
        if ($.trim($(this).val()) || nonEmptyDependant.length === 0) {
            $(this).closest('.form-group').removeClass('has-error');
            $(this).closest('.controls').find('.error-msg').remove();
        }
    });
})
