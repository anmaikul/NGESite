/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 52
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '85px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function () {
    $('.group').hide();
    $('#div1').show();
    $('#d1').click(function () {
        $('.group').hide();
        $('#div1').show();        
    });
    $('#d2').click(function () {
        $('.group').hide();
        $('#div2').show();        
    });
    $('#d3').click(function () {
        $('.group').hide();
        $('#div3').show();        
    });
    $('#d4').click(function () {
        $('.group').hide();
        $('#div4').show();        
    });    
    // ORIGINAL CODE FOR LIST SELECT
    //$('#selectMe').change(function () {
    //     $('.group').hide();
    //     $('#'+$(this).val()).show();
    // })
});

(function intialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    google.maps.event.addDomListener(window, 'load', initialize);
    var map = new google.maps.Map(mapCanvas);
});