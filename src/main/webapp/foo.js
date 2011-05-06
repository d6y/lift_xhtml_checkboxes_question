 function toggleClass(clicksource) {
    console.log("---------------");
   
    // Change all the foo checkboxes to this value:
    var v = $(clicksource).prop('checked');
    console.log("Toggling to: "+v);

    $('.foo').each( function(index, checkbox) {
      console.log(checkbox);
      
       if ( v==false || v===undefined) {
         console.log("removing");
        // $(checkbox).removeProp('checked');
          $(checkbox).prop('checked', false);
       } else { 
        console.log("Checking");
        $(checkbox).prop('checked', true);
       }

      });     
 
  }


function initClassToggle() {
    $('.foo').each( function(index, checkbox) {
      $(this).click( function() { toggleClass(this);  } ) ; 
  });
  
}



jQuery(document).ready(function() { initClassToggle() } );
 