$( function() {
    $( "#slider" ).slider({
      range: "min",
      value: 37,
      min: 1,
      max: 500,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
		$( "#dummy-slider,#slider-bg").css('width',ui.value);
      }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	
  } );