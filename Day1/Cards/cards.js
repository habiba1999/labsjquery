var img=$("img");
img.on('click',function(){
    $(this).parent().find(".card-body").slideToggle(1000);
})