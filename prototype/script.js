var makes = {
   "Makes":[
      {
         "make_id":"acura",
         "make_display":"Acura"
      },
      {
         "make_id":"aston-martin",
         "make_display":"Aston Martin"
      }
   ]
};

/*var acuraModels = {
   "Models":[
      {
         "model_name":"ILX",
         "model_make_id":"acura"
      },
      {
         "model_name":"MDX",
         "model_make_id":"acura"
      }
   ]
};

var astonModels = {
   "Models":[
      {
         "model_name":"Cygnet",
         "model_make_id":"aston-martin"
      },
      {
         "model_name":"DB9",
         "model_make_id":"aston-martin"
      }
   ]
};*/

var models = {
   "Models":[
      {
         "model_name":"ILX",
         "model_make_id":"acura"
      },
      {
         "model_name":"MDX",
         "model_make_id":"acura"
      },
      {
         "model_name":"Cygnet",
         "model_make_id":"aston-martin"
      },
      {
         "model_name":"DB9",
         "model_make_id":"aston-martin"
      }
   ]
};

/*acuraILXTrims = {
   "Trims":[
      {
         "model_id":"57610",
         "model_name":"ILX",
         "model_trim":" Hybrid",
         "model_year":"2013",
         "make_display":"Acura"
      },
      {
         "model_id":"57611",
         "model_name":"ILX",
         "model_trim":"5AT",
         "model_year":"2013",
         "make_display":"Acura"
      }
   ]
};

acuraMDXTrims = {
   "Trims":[
      {
         "model_id":"57614",
         "model_name":"MDX",
         "model_trim":"AWD",
         "model_year":"2013",
         "make_display":"Acura"
      },
      {
         "model_id":"57613",
         "model_name":"MDX",
         "model_trim":"Base",
         "model_year":"2013",
         "make_display":"Acura"
      }
   ]
};

astonCygnetTrims = {
   "Trims":[
      {
         "model_id":"58675",
         "model_name":"Cygnet",
         "model_trim":"Base",
         "model_year":"2013",
         "make_display":"Aston Martin"
      }
   ]
});

astonDBTrims = {
   "Trims":[
      {
         "model_id":"58676",
         "model_name":"DB9",
         "model_trim":"Coupe",
         "model_year":"2013",
         "make_display":"Aston Martin"
      },
      {
         "model_id":"58677",
         "model_name":"DB9",
         "model_trim":"Volante",
         "model_year":"2013",
         "make_display":"Aston Martin"
      }
   ]
};*/

$(function() {
    $('#topnav').load('topnav.html', function() {



        $('#car-makes').on('change', function() {
            var carMakesVal = $('#car-makes').val();

            if ( carMakesVal == 0 ) {
                $('#car-models').attr("disabled", true);
            } else {
                $('#car-models').removeAttr( "disabled" );
                //reset car models
                $('#car-models').html('<option value="0">Model</option>')

                if ( carMakesVal == "acura" ) {
                    $('#car-models').append( '<option value="ILX">ILX</option><option value="MDX">MDX</option>' );
                }
                if ( carMakesVal == "aston-martin" ) {
                    $('#car-models').append( '<option value="DB9">DB9</option><option value="DBS">DBS</option>' );
                }        
            }
        })

    })
});


