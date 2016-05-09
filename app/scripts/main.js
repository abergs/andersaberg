/*$(document).ready(function(){ 
    //** notice we are including jquery and the color plugin at 
    //** http://code.jquery.com/color/jquery.color-2.1.0.js
    
    var scroll_pos = 0;
    var animation_begin_pos = 0; //where you want the animation to begin
    var animation_end_pos = $('body').height(); //where you want the animation to stop
    var beginning_color = new $.Color( 'rgb(210,50,98)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
    var ending_color = new $.Color( 'rgb(0,197,209)' ); ;//what color we want to use in the end
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop(); 
        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
           // console.log( 'scrolling and animating' );
            //we want to calculate the relevant transitional rgb value
            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
            var newColor = new $.Color( newRed, newGreen, newBlue );
            //console.log( newColor.red(), newColor.green(), newColor.blue() );
            $('body').animate({ backgroundColor: newColor }, 0);
        } else if ( scroll_pos > animation_end_pos ) {
             $('body').animate({ backgroundColor: ending_color }, 0);
        } else if ( scroll_pos < animation_begin_pos ) {
             $('body').animate({ backgroundColor: beginning_color }, 0);
        } else { }
    });
});*/

/*
$( window ).ready(function() {
  
    var wHeight = $(window).height();

    $('section')
      .height(wHeight)
      .scrollie({
        scrollOffset : 0,
        scrollingInView : function(elem) {
                   
          var bgColor = elem.data('background');
          
          $('body').animate({'background-color': bgColor});
          
        }
      });

  });*/

  $('body').colorScroll({
  	colors: [{
  		color: '#6114cc',
  		position: '0vh'
  	}, {
  		color: '#009cf3',
  		position: '1vh'
  	}, {
  		color: '#FFBF02',
  		position: '2vh'
  	},
  	{
  		color: '#F9615B',
  		position: '3vh'
  	},
  	{
  		color: '#000000',
  		position: '4vh'
  	}]
  });

  $('h1').textillate({ in: { effect: 'rollIn' } });
