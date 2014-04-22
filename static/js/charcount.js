/* =========================================================
 *charcount.js
 * Sushma Sharma
 * This unobtrusive plugin gives the count of characters remaining in text inputs/textarea
 *
 * Usage: Include this JS on the page and add the following attributes to
 * the element you want to be the trigger.
 *   data-count="true"
 *   data-limit= Maximum limit of characters that is allowed in the inputs/textarea
 *
 *  eg: <textarea data-count="true" data-limit="100"></textarea>
 *
 * ========================================================= */

(function ($) {

    "use strict"; // jshint ;_;

    /*global $, window: false, location: false, setTimeout*/

    /* ShowHide CLASS DEFINITION
    * ==================== */

    var CharCount = function (element) {
        this.element = $(element);
        this.options = this.element.data();
    };

    CharCount.prototype = {

        constructor: CharCount,

        init: function () {
            var limit = this.options.limit,
                remaining = limit - this.element.val().length;

            if (!this.element.next('span').hasClass('char-count')) {
                this.element.after('<span class="char-count"></span>');
            }
            if (this.element.val().length > limit) {
                this.element.next('.char-count').addClass('error');
            } else {
                this.element.next('.char-count').removeClass('error');
            }

            this.element.next('.char-count').text('Characters left: ' + remaining);
        }
    };

    /* Ssn Masking PLUGIN DEFINITION
    * ===================== */

    $.fn.charcount = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('charcount');
            if (!data) {
                $this.data('charcount', (data = new CharCount(this)));
            }
            if (typeof option === 'string') {
                data[option]();
            }
        });
    };

    $.fn.charcount.Constructor = CharCount;

    /* Ssn Maskin DATA-API
     * ============ */

    $(function () {

        $('body').on("keyup keydown", "[data-count='true']", function () {
            $(this).charcount('init');
        });

        // ON paste needs timeout 
        $('body').on("cut paste", "[data-count='true']", function() {
            var el = $(this);
            setTimeout(function() {
                el.charcount('init');
            }, 100);
        });

        // on load
        $('[data-count="true"]').each(function () {
            $(this).charcount('init');
        });
    });
}(window.jQuery));
