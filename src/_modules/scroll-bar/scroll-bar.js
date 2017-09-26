'use strict';

// Constructor
var ScrollBar = function() {

    var sections = $('section');
    var ids = [];
    var scrollBar = $('.scroll-bar');
    var sectionNameBlock = scrollBar.find('.scroll-bar__section-name');
    var prev = scrollBar.find('.scroll-bar__control--up');
    var next = scrollBar.find('.scroll-bar__control--down');
    var visible;
    var total = sections.length - 1;

    function isVisible(el) {
        var top = el.get(0).getBoundingClientRect().top;

        if ( top <= 100 && top >= 0 ) {
            visible = true;
        } else {
            visible = false;
        }

        return visible;
    }

    function setName(el) {

        var name;

        if (el.attr('data-name')) {
            name = el.attr('data-name');
        } else {
            name = false;
        }

        if ( name ) {
            sectionNameBlock.addClass('-hidden');
            setTimeout(function(){
                sectionNameBlock.html(name);
                sectionNameBlock.removeClass('-hidden');
            }, 300);
        } else {
            sectionNameBlock.addClass('-hidden');
        }
    }

    function setLinks(el) {
        var index = el.index();

        if (index === 0) {
            prev.addClass('-disabled');
        } else {
            prev.removeClass('-disabled');
        }

        if (index === total) {
            next.addClass('-disabled');
        } else {
            next.removeClass('-disabled');
        }

        if (index >= 0) {
            next.attr('href', '#' + ids[index + 1]);
        }

        if (index <= total) {
            prev.attr('href', '#' + ids[index - 1]);
        }
    }

    function scrollCheck(el) {
        el.each(function(){
            var $this = $(this);
            var id = $this.attr('id');

            ids.push(id);

            $(window).on('scroll', function(){
                _.debounce(isVisible($this), 300);

                if (visible === true) {
                    checkSection($this);
                }
            });
        });
    }

    function checkSection(el) {
        var activeSection = $('section.-visible');

        if (!el.hasClass('-visible')) {
            el.addClass('-visible');
            setName(el);
            setLinks(el)
        } else {
            isVisible(activeSection);

            if (visible === false) {
                sections.removeClass('-visible');
                return false;
                scrollCheck(sections);
            }
        }
    }

    if (scrollBar && scrollBar.length > 0) {
        scrollCheck(sections);
        setLinks(sections);
    }

    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + -50
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
};

module.exports = ScrollBar;
