jQuery(document).ready(function($) {





$('.button').on('click',(e)=> {
	/* Act on the event */
	e.preventDefault();
	 
	 $("#cont").slideToggle (1000,function(){ 
	 	$("#text2").slideToggle(1000);});


});
	/* Act on the event */




function doIt() {
  $( ".obaut" ).slideToggle("slow");
      $(".obaut").toggleClass('active');
      return false;

   
   };


// Can pass in function name
$( '#cl_obaut' ).on('click',(e)=> {
	e.preventDefault();
	doIt();
});
	/* Act on the event */

});