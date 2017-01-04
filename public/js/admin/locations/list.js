(function () {
    'use strict';
    $(document).ready(function () {
        $('#filterLocations').focus();
        var $rows = $('#locationList tbody tr');
        $('#filterLocations').keyup(function () {
            // compile regex value
            var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
                reg = RegExp(val, 'i'),
                text;
            // filter rows
            $rows.show().filter(function () {
                text = $(this).text().replace(/\s+/g, ' ');
                return !reg.test(text);
            }).hide();
            // update location count
            $('#locationCount').text($('#locationList tbody tr:visible').length + " Locations");
        });
        $('button.deleteLocation').on('click', function (e) {
            e.preventDefault();
            var confirmMessage = "Delete this location?";
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