(function () {
    'use strict';
    $.fn.tripValidator = function () {
        var form = this;
        // override jquery validate plugin defaults
        // so it works with Bootstrap 3 
        $.validator.setDefaults({
            highlight: function (element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
        form.validate({
            rules: {
                location_id: {
                    required: true,
                    digits: true
                },
                trip_date: {
                    required: true,
                    dateISO: true
                },
                notes: {
                    required: true
                }
            },
            messages: {
                location_id: {
                    required: "A location ID is required.",
                    digits: "A location ID can only include digits"
                },
                trip_date: {
                    required: "A trip date is required.",
                    dateISO: "A valid date is required."
                },
                notes: {
                    required: "A note is required."
                }
            }
        });
    };
})();