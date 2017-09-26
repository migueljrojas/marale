'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: true,
                fade: true,
                autoplay: true
            });
        });
    }
};

module.exports = Slider;
