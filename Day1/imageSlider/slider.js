var pauseBtn = $(".pause");
var playBtn = $(".play");
var stop = false;
var interval;
function startSlider() {
$('.slides > li:first')
.fadeOut(1000)
.next()
.fadeIn(3000)
.end()
.appendTo('.slides');
}
function stopSlider()
{
    if(!stop)
    {
        console.log("i'm at phase pause");
        clearInterval(interval);
        $(this).hide();
       $('.play').show();
        stop=true;
    }
    else{
        console.log("i'm at phase play");
        Interval=setInterval(startSlider,2000);
        $('.play').hide();
       $('.pause').show();

        stop=false;
    }
}
$('.play').hide(); // Hiding the play button.
interval=setInterval(startSlider,2000);
pauseBtn.on('click',stopSlider);
playBtn.on('click',stopSlider);