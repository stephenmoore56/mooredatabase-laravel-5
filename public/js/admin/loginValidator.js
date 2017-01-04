(function() {
    'use strict';
    $.fn.loginValidator = function() {
        var form = this;
        // override jquery validate plugin defaults
        // so it works with Bootstrap 3 
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
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: "A username is required."
                },
                password: {
                    required: "A password is required."
                }
            }
        });
    };
})();