$(document).ready(function () {
    //console.log("ready!");
    //alert('hej');
    draw();
});

function draw() {
    var c = document.getElementById("myCanvas");


    ctx.strokeRect(0, 20, 150, 100);




}
  
$(document).ready(function () {
    $(".Murray").live('change', function () {

        var checkCount = $("input.checkbox:checked").length;

        if (checkCount == 0) {

            $("div#options").fadeOut("medium");

        } else {

            if ($("div#options").is(":hidden")) {

                $("div#options").fadeIn("medium");

            }

        }

    });
});

 