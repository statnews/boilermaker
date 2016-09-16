// this is another example plugin class

import $ from 'jquery';
import plugin from 'pugin';

class ScrollToTop {
    constructor(element, options) {
        Object.assign( this, { ...element }, { ...options } ); // returns `this`

        $(window).scroll(function () {
            if (this.$element.scrollTop() > options.offset) {
                this.$element.fadeIn();
            } else {
                this.$element.fadeOut();
            }
        });
        
        $element.click(function (e) {
            e.preventDefault();
            
            $('html, body').animate({
                scrollTop: 0
            }, this.options.speed);
        });
    }
}

ScrollToTop.DEFAULTS = {
    offset: 100,
    speed: 500,
};

plugin('ScrollToTop', ScrollToTop);
