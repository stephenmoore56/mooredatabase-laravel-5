(function() {
    'use strict';
    $.fn.locationValidator = function() {
        var form = this;
        $.validator.setDefaults({
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
            },
            unhighlight: function(element) {
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            errorPlacement: function(error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    error.insertAfter(element);
                }
            }
        });
        form.validate({
            rules: {
                country_code: {
                    required: true
                },
                state_code: {
                    required: true
                },
                county_name: {
                    required: true
                },
                ecs_subsection_id: {
                    required: true
                },
                location_name: {
                    required: true,
                    minlength: 10
                },
                latitude: {
                    required: true,
                    range: [-90, 90]
                },
                longitude: {
                    required: true,
                    range: [-180, 180]
                },
                notes: {
                    required: true,
                    minlength: 25
                }
            },
            messages: {
                country_code: {
                    required: "A country code is required."
                },
                state_code: {
                    required: "A state code is required."
                },
                county_name: {
                    required: "A county name is required."
                },
                ecs_subsection_id: {
                    required: "An ECS subsection is required."
                },
                location_name: {
                    required: "A name is required.",
                    minlength: "A name must be at least 10 characters long."
                },
                latitude: {
                    required: "Latitude is required.",
                    range: "Latitude must be between -90.000 and 90.000."
                },
                longitude: {
                    required: "Longitude is required.",
                    range: "Longitude must be between -180.000 and 180.000."
                },
                notes: {
                    required: "Notes are required.",
                    minlength: "A location note must be at least 25 characters long."
                }
            }
        });
    };
})();