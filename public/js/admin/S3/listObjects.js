(function () {
    'use strict';
    $(document).ready(function () {

        $('#fileSelector').on('click', function (e) {
            e.preventDefault();
            $('#fileToUpload').trigger('click');
        });
        $('#fileToUpload').on('change', function () {
            var filename = $('#fileToUpload').val().split('\\').pop();
            $('#fileToUpload2').val(filename);
        });
        $('#resetButton').on('click', function () {
            $('#fileToUpload2').val('');
        });
        $('a.deleteObject').on('click', function (e) {
            // Remember the link href
            var href = this.href;

            // Don't follow the link
            e.preventDefault();

            var confirmMessage = "Delete this object?";
            bootbox.confirm({
                title: '<i class="glyphicon glyphicon-ok"></i>&nbsp;&nbsp;Confirm',
                message: confirmMessage,
                buttons: {
                    confirm: {
                        label: "Delete",
                        className: "btn btn-danger btn-sm"
                    },
                    cancel: {
                        label: "Cancel",
                        className: "btn btn-default btn-sm"
                    }
                },
                callback: function (result) {
                    if (result) {
                        window.location = href;
                    }
                }
            });
        });
    });
})();