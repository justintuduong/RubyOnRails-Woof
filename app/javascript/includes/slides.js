$(function() {
    console.log("hello world");
    var $activeSlide = $('#slides .slide:first-child');

    // shows first slide
    $activeSlide.addClass("showing");

    // changes slide if declined
    $("#decline").on("click", function(){
        goToSlide('decline');
        console.log("declined");
    });
    
    // changes slide if approved
    $("#approve").on("click", function(){
        goToSlide('approve');
        console.log("approved");
    });

    // shows next slide
    function goToSlide(action) {
        $activeSlide.removeClass("showing");
        $activeSlide = $activeSlide.next(".slide")

        if (action == "approve") {
            // ajax request to send data. status change to "matched"
            console.log(action);
        } else {
            // status change to "disliked"
            console.log(action);
        }
        
        $activeSlide.addClass("showing");
    }
});

