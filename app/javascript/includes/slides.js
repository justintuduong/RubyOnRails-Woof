// need to change to javascript page specific rending/loading

$(function() {
    console.log("hello world");
    var $activeSlide = $('#slides .slide:first-child');

    // shows first slide by appending "showing" class
    $activeSlide.addClass("showing");

    // changes slide if declined
    $("#decline").on("click", function(){
        goToSlide('decline');
        console.log("declined");
    }); 
    
    // changes slide if approved
    $("#approve").on("click", function(){
        var user_id = $activeSlide.data("id");
        console.log(user_id);

        $.ajax({
            url: "/approve/" + user_id,
            method: "post",
            dataType: "ajax"

        })

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

