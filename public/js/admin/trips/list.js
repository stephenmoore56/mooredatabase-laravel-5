(function () {
    'use strict';
    $(document).ready(function () {
        $('#filterTrips').focus();
        var $rows = $('#tripList tbody tr');
        $('#filterTrips').keyup(function () {
            // compile regex value
            var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
                reg = RegExp(val, 'i'),
                text;
            // filter rows
            $rows.show().filter(function () {
                text = $(this).text().replace(/\s+/g, ' ');
                return !reg.test(text);
            }).hide();
            // update trip count
            $('#tripCount').text($('#tripList tbody tr:visible').length + " Trips");
        });
        $('button.deleteTrip').on('click', function (e) {
            e.preventDefault();
            var confirmMessage = "Delete this trip?";
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
                        $('#form_' + e.target.id).submit();
                    }
                }
            });
        });
    });
})();