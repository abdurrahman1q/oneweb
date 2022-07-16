$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
    }
    var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
        if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
        }
    }, 40);
    }
    for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
    }
});

// counter end

$(document).ready(function(){

	// /* default settings */

	$('.venobox').venobox({
            framewidth: '700px',
        	frameheight: '500px',
            bgcolor: '#132E63',
            autoplay: 'true',
            popup: 'true',
    }); 

	/* open content with custom settings */

	// $('.venobox_custom').venobox({

	// 	framewidth: '300px',

	// 	frameheight: '250px',

	// 	border: '6px',

	// 	bordercolor: '#ba7c36',

	// 	numeratio: true

	// });



	// /* auto-open #firstlink on page load */

	// $("#firstlink").venobox().trigger('click');

});
// venobox end

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
// owl end

//  isotope plugin 
                    $(document).ready(function () {
                    var customContainer = jQuery(".iso-container");
                    customContainer.isotope({
                    filter: "*",
                    transitionDuration: "2s",
                    animationOptions: {
                        duration: 7500,
                        queue: false
                    },

                    layoutMode: "fitRows",
                    fitRows: {
                        gutter: 0
                    }
                    });

                    jQuery("#custom-filter li:first-child > a").addClass("is-checked");

                    jQuery("#custom-filter a").click(function () {
                    jQuery("#custom-filter .is-checked").removeClass("is-checked");
                    jQuery(this).addClass("is-checked");

                    var customSelector = jQuery(this).attr("data-filter");
                    customContainer.isotope({
                        filter: customSelector,
                        transitionDuration: "2s",
                        animationOptions: {
                        duration: 7500,
                        queue: false
                        },
                        layoutMode: "fitRows",
                        fitRows: {
                        gutter: 0
                        }
                    });
                    return false;
                    });
                });
                // isotop end

                var acc = document.getElementsByClassName("accordion");
                var i;
                
                for (i = 0; i < acc.length; i++) {
                  acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                      panel.style.maxHeight = null;
                    } else {
                      panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                  });
                }

                //FREQUENTLY ASKED QUESTIONS end
