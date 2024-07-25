/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

// Function to initialize map and scroll effects
function initMap() {
  // Initialize the Google Map
  var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.674, lng: -73.945 },
      zoom: 12,
      scrollwheel: false,
      navigationControl: false,
      mapTypeControl: false,
      scaleControl: false,
      styles: [
          // Map styles go here
      ]
  });

  // Cache the header and brand image elements
  let header = document.getElementById('header');
  let brandImage = document.getElementById('brand-image');

  document.addEventListener('scroll', function() {
      // Get scroll position
      let scrollPosition = window.pageYOffset;

      // Calculate opacity for the header
      if (scrollPosition <= 350) {
          header.style.opacity = 1 - scrollPosition / 350;
      } else {
          header.style.opacity = 0;
      }

      // Calculate opacity for the brand image
      if (scrollPosition <= 350) {
          brandImage.style.opacity = 1 - scrollPosition / 350;
      } else {
          brandImage.style.opacity = 0;
      }
  });
}

// Ensure to call initMap when the page is loaded
$(window).on('load', function() {
  initMap();
});

// google maps

