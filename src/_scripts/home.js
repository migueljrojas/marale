'use strict';

// Constructor
var Home = function() {
    var context = $('.home');
    var bottles = $('.home__wine__bottle');

    if (context.length > 0) {

        bottles.each(function(){

            var $this = $(this);
            var trigger = $this.find('.home__wine__bottle__trigger');
            var close = $this.find('.home__wine__bottle__close');

            trigger.on('click', function(e){
                bottles.removeClass('-open');
                $this.addClass('-open');
                e.preventDefault();
            });

            close.on('click', function(e){
                $this.removeClass('-open');
                e.preventDefault();
            });

        });
    }
};

module.exports = Home;
