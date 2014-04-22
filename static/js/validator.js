/* =========================================================
 * validator.js
 *
 * Usage: Include this JS on the page and add data-validate="true" to your form tag
 * Example:
 * <form class="form-horizontal" data-validate="true" action="{% url <name> %}" method="POST">
 *
 * You can also add data-validate-disabled-field="true" to any disabled field you want to
 * validate
 *
 * Add the data- attribute 'data-grouped=true' for fields that are dependent and grouped
 * (ie. phone and phone type).
 * ========================================================= */

/*global $, window: false, document: false */

(function ($) {

    "use strict";

    /* VALIDATOR CLASS DEFINITION
    * ====================== */
    var Validator = function (element) {
        this.$element = $(element);
        this.options = this.$element.data();
        this.clicked = false;
        this.form_data = "";
        this.placeholder_support = 'placeholder' in document.createElement('input');
        this.validated = this.$element.val() === "" ||
            (!this.placeholder_support && this.$element.val() === "optional") ? false : true;
    };

    Validator.prototype = {

        constructor: Validator,

        validate: function () {
            var that = this,
                $form = this.$element.parents('form'),
                $form_fields = $form.find(':input'),
                ajax_url = $form.attr('action') === "" && $.browser.msie ? "/" +
                    window.location.pathname.substr(1) : $form.attr('action'),
                serialized_form = this.serialize_form($form),
                dependent_names = !this.options.dependentFields ?
                        "" : this.options.dependentFields,
                $dependent_fields = $(dependent_names),
                form_data = serialized_form +
                    "fields=" + this.$element.attr('name') +
                    "&operation=validate_field",
                error_list = [],
                i,
                $field;

            // add dependent fields to serialized data
            if (dependent_names) {
                $dependent_fields.each(function () {
                    form_data += "&fields=" + $(this).attr('name');
                });
            }

            //expose data sent for unit tests
            this.form_data = form_data;

            $.post(
                ajax_url,
                form_data,
                //successful post
                function (data) {
                    // remove any existing errors
                    // before adding new ones
                    that.remove_errors(that.$element);
                    /*jslint unparam: true*/
                    $.each(data.result, function (i, field) {
                        $field = $('[name=' + field.field_name + ']');
                        if ($.isEmptyObject(field.errors)) {
                            that.remove_errors($field);
                        } else {
                            // there are errors
                            if ($form_fields.index($field) <=
                                    $form_fields.index(that.$element) ||
                                    $field.validator('been_validated')) {

                                if ($field.data('grouped')) {
                                    $.merge(error_list, field.errors);
                                } else {
                                    that.remove_errors($field);
                                    that.add_errors($field, field.errors);
                                }
                            }
                        }
                    });

                    // add grouped field errors if they exist
                    if (error_list.length > 0) {
                        for (i = 0; i < data.result.length; i += 1) {
                            $field = $('[name=' + data.result[i].field_name + ']');
                            if ($field.data('grouped')) {
                                that.remove_errors($field);
                                that.add_errors($field, $.unique(error_list));
                                break;
                            }
                        }
                    }
                    /*jslint unparam: false*/

                },
                "json"
            );

            this.validated = true;

            // if it's a grouped field and we're on the deepest field
            // mark the other fields as validated
            if (this.options.grouped &&
                    $dependent_fields.length &&
                    $form_fields.index(this.$element) >
                    $form_fields.index($dependent_fields)) {
                $dependent_fields.validator('init');
                $dependent_fields.data('validator').validated = true;
            }

        },

        remove_errors: function ($field) {
            $field.closest('.controls')
                .children('#err_' + $field.prop('name'))
                .remove();
            $field.closest('.controls')
                .children('.err')
                .remove();
            if (!$field.closest('.controls').children('.err').length) {
                $field.closest('.control-group').removeClass('error');
            }
        },

        add_errors: function ($field, errors) {
            var errors_formatted = '';

            // highlight field as error color
            $field.closest('.control-group').addClass('error');

            // format error messages
            $.each(errors, function () {
                errors_formatted = errors_formatted + this + "<br>";
            });

            // add errors to the end of the .controls class
            $field.closest('.controls').append('<span />');
            $field.closest('.controls').children('span:last')
                .addClass('help-block err')
                .prop('id', 'err_' + $field.prop('name'))
                .html(errors_formatted);
        },

        been_validated: function () {
            return this.validated;
        },

        serialize_form: function ($form) {
            var result = "",
                obj = this,
                value;
            $form.find(':input:not(:submit):not(:disabled),' +
                '[data-validate-disabled-field]').each(function () {
                value = $(this).val();
                if ($(this).is(':checkbox') || $(this).is(':radio')) {
                    if ($(this).is(':checked')) {
                        result += $(this).attr('name') + "=" + value + "&";
                    }
                } else {
                    if (!obj.placeholder_support) {
                        if ($(this).attr('data-mask-input') &&
                                !$(this).attr('data-mask-keep') &&
                                value !== "optional") {
                            value = $(this).mask('unmask');
                        }
                        value = value !== null ? value.replace(/optional/g, "") : "";
                    } else if ($(this).attr('data-mask-input') && !$(this).attr('data-mask-keep')) {
                        value = $(this).mask('unmask');
                    }
                    value = value === null ? "" : encodeURIComponent(value);
                    result += $(this).attr('name') + "=" + value + "&";
                }
            });
            return result;
        }
    };


     /* VALIDATOR PLUGIN DEFINITION
    * ======================= */

    $.fn.validator = function (option, options) {
        var data;

        this.each(function () {
            var $this = $(this);
            data = $this.data('validator');
            if (!data) {
                data = new Validator(this);
                $this.data('validator', data);
            }
        });

        if (option === "been_validated") {
            return data.been_validated();
        } else if (option === "add_errors") {
            data.add_errors($(this), options);
        } else if (option === "remove_errors") {
            data.remove_errors($(this));
        } else if (option === "ready") {
            data.clicked = true;
        } else if (option === "serialize_form") {
            return data.serialize_form($(this));
        } else {
            if (option === "validate") {
                return this.each(function () {
                    if (typeof option === 'string') { data[option](); }
                });
            }
        }
    };

    $.fn.validator.Constructor = Validator;

    /* VALIDATOR DATA-API
    * ============== */
    $(function () {
        // selects all inputs except hidden, submit, radio and checkboxes
        // also selects text areas
        var selector = 'form[data-validate=true] :input:not([type="hidden"],:submit)';
        $('body').on('change.validator', selector, function () {
            $(this).validator('validate');
        });

        $('body').on('keydown.validator, focus.validator, ' +
            'click.validator', selector, function () {
                $(this).validator('ready');
            });
    });
    /*global window: false */
}(window.jQuery));
