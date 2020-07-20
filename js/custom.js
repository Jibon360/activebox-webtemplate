$(document).ready(function(){
    $(window).on('scroll',function () { 
        var scroll =$(window).scrollTop();
        if(scroll>=70){
            $("nav").addClass("bg-nav");

        }
        else{
            $("nav").removeClass("bg-nav");
        }

     });

     // collapse
	$(document).on("click", ".navbar-collapse.show", function (e) {
        $(e.target).is("a") && $(this).collapse("hide")
    }) // 

    	// All animations will take exactly 500ms
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true
	});

 


});