/*
README

# Mimic
Mimic is a jQuery plugin to replicate markup.

## Usage

### Via Javascript
Replicate markup with id `myClone0` with a single line of Javascript.

    $('#myClone0').mimic(options);


### Via data attributes
Activate a clone without writing Javascript. Set `data-clone="true"` on the
source element. You can also specify options as data attributes.

    <div id="myClone0" data-clone="true" data-trigger="#cloneBtn">...</div>

###Options

Options can be passed via data attributes or JavaScript. For data attributes,
append the option name to data-, as in `data-limit="3"`.

*   `trigger` If a trigger string is provided, the clone event will be delegated
to this element.

*   `limit` Limits the amount of clones that can be shown. This number includes
the source element.

*   `removeElements` Specify selecters of elements that should be removed when
replicated. The data attribute should be specified like so:
`data-remove-elements="#myElement"`.

*   `removeClasses` Specify CSS classes that should be removed when replicated.
Be sure to add the dot before the class name, like so:
`data-remove-classes=".my-class"`.

*   `insertBeforeTrigger` This option will place the clone before the trigger.
By default the clone is place after the source. The data attribute should be
specified like so: `data-insert-before-trigger="true"`.

### HTML Attributes

*   `id="myClone0"` The source element needs to have an ID with a zero index.
The subsequent clones would be myClone1, myClone2, etc.

*   `class="mimic-ignore"` Add this class to a input element and the value of
that element will not be cleared when cloned.

### Methods

##### .mimic(options)

Activates your element to be cloned. Accepts an optional options `object`

    $('#myClone').mimic({
        trigger: "#myCloneBtn"
    })

##### .mimic('init')

Manually initializes a clone. Updates indexes of elements with an ID or existing
clones and shows or hides trigger if used.

    $('#myClone0').mimic('init')

##### .mimic('replicate')

Manually clones an element.

    $('#myClone0').mimic('replicate')

This is equivalent to:

    $('#myClone0').mimic()

##### .mimic('remove')

Manually removes a clone. Note that we call this method on the 'remove' link.

    $('#myClone1 [data-mimic-remove] a').mimic('remove')

### Events

The mimic class exposes a few events for hooking into cloning functionality.

*   `initialized` This event is fired after the `init` method is called.

*   `cloned` This event is fired after an element has been cloned. The cloned
element's ID and new index are passed as parameters.

*   `removed` This event is fired after an clone has been removed. The clone's
ID is passed as a parameter.

```
$('$myClone0').on('cloned', function (e, element_id, index) {
    // do something
})
```
*/
(function ($) {

    "use strict"; // jshint ;_;

    /*global $, window: false, location: false, console: false */

    /* Mimic CLASS DEFINITION
    * ==================== */

    var Mimic = function (element, options) {
        this.element = $(element);
        this.options = options;
        this.clones = [this.element.attr('id')];
    };

    Mimic.prototype = {

        constructor: Mimic,

        init: function () {
            var that = this;

            $('[data-cloned=#' + this.element.attr('id') + ']').each(function (key) {
                that.update_ids_names($(this), key + 1);
                that.clones.push($(this).attr('id'));
            });

            //hide remove button
            this.element.find('[data-mimic-remove] a').hide();

            // remove add button if we are at our limit
            if (this.options.limit && this.clones.length === this.options.limit) {
                $(this.options.trigger).hide();
            }

            if (this.options.trigger) {
                $(this.options.trigger).on('click.mimic', function() {
                    that.replicate();
                });
            }

            this.element.trigger('mimic-initialized');
        },

        replicate: function () {
            var $clone = this.clean(this.element.clone()),
                index = this.clones.length,
                limit = this.options.limit || 0;

            $clone.attr('data-cloned', '#' + this.element.attr('id'));
            this.update_ids_names($clone, index);
            $clone.find('[data-mimic-remove] a').show();
            this.clones.push($clone.attr('id'));

            if (this.options.limit && this.clones.length === limit) {
                $(this.options.trigger).hide();
            }

            if (this.options.insertBeforeTrigger) {
                $clone.insertBefore($(this.options.trigger));
            } else {
                $clone.insertAfter(this.element);
            }

            this.element.trigger('cloned', ['#' + $clone.attr('id'), index]);
        },

        update_ids_names: function ($el, index) {
            // update children's ID and names
            $el.find('[id]').each(function() {
                $(this).attr('id', $(this).attr('id').replace(/\d/, index));
            });

            $el.find('[name]').each(function() {
                $(this).attr('name', $(this).attr('name').replace(/\d/, index));
            });

            $el.attr('id', $el.attr('id').replace(/\d/, index));
        },

        clean: function ($clone) {
            var remove_elements = this.options.removeElements,
                remove_classes = this.options.removeClasses,
                dotless_classes,
                data = $clone.data(),
                i,
                key,
                keys;

            if (remove_elements) {
                $clone.find(remove_elements).remove(remove_elements).end();
            }

            if (remove_classes) {
                // remove dots
                dotless_classes = remove_classes.replace(/\.|\,/g, "");
                $clone.find(remove_classes).removeClass(dotless_classes);
            }

            $clone.find(':input:not(.mimic-ignore)').each(function() {
                $(this).val('');
            });

            // remove data attributes
            /*jslint unparam: true*/
            keys = $.map(data, function(value, key) { return key; });
            /*jslint unparam: false*/

            for (i = 0; i < keys.length; i += 1) {
                key = keys[i].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                $clone.removeAttr("data-" + key);
            }

            return $clone;
        },

        remove: function () {
            var source_id = this.element.data('cloned'),
                source = $(source_id).data('mimic'),
                index = source.clones.indexOf(this.element.attr('id'));

            source.clones.splice(index, 1);

            if (source.options.limit) {
                $(source.options.trigger).show();
                // if it's not the last element update the ids
                if (!this.element.is('[data-cloned]:last')) {
                    this.element.remove();
                    $('[data-cloned]').each(function (key) {
                        source.update_ids_names($(this), key + 1);
                    });
                } else {
                    this.element.remove();
                }
                // update clones list
                source.clones = [$(source_id).attr('id')];
                $('[data-cloned]').each(function () {
                    source.clones.push($(this).attr('id'));
                });
            } else {
                this.element.remove();
            }

            // trigger callback
            $(source_id).trigger('removed', ['#' + this.element.attr('id')]);
        }
    };


    /* Mimic PLUGIN DEFINITION
    * ===================== */

    $.fn.mimic = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('mimic'),
                options = $.extend({}, $.fn.mimic.defaults, $this.data(), typeof option === 'object' && option);
            if (!data) {
                data = new Mimic(this, options);
                $this.data('mimic', data);
            }
            if (typeof option === 'string') {
                data[option]();
            } else if (!option) {
                data.replicate();
            } else {
                data.init();
            }
        });
    };

    $.fn.mimic.defaults = {
        limit: false,
        removeElements: false,
        removeClasses: false,
        trigger: false,
        insertBeforeTrigger: false
    };

    $.fn.mimic.Constructor = Mimic;


    /* Mimic DATA-API
     * ============ */

    $(function () {

        $('body').on('click', '[data-cloned] [data-mimic-remove] a', function () {
            $(this).parents('[data-cloned]').mimic('remove');
        });

        $('[data-clone]').mimic('init');
    });
}(window.jQuery));
