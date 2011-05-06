
  function toggleClass(clicksource) {
    console.log("---------------");
   
    // Change all the foo checkboxes to this value:
    var v = $(clicksource).attr('checked');
    console.log("Toggling from: "+v);

    $('.foo').each( function(index, checkbox) {
      console.log(checkbox);
      
       if ( v==false || v===undefined) {
         console.log("removing");
        $(checkbox).removeAttr('checked');

       } else { 
        console.log("Checking");
        $(checkbox).attr('checked', true);
       }

      });     
 
  }