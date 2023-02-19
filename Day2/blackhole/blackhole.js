$(function () {
    $("img").on("click",function(){
      $("img").effect("shake",{"distance":5,"times":5},100);
    })
  
      $( "#drag" ).draggable();
      $( "#drop" ).droppable(
      {
        drop: function( event, ui ) {
          $("#drag").fadeOut();
        }
     } );
    });