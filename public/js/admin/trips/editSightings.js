(function () {
    'use strict';
    $(document).ready(function () {
        $("#search").focus();
        $("#search").autocomplete({
            source: function (request, response) {
                $.get("/reports/birdLookup", {
                    query: request.term
                }, function (data) {
                    response(data);
                });
            },
            minLength: 3,
            select: function (event, ui) {
                // default is to replace search string with ID
                event.preventDefault();
                $('#search').val(ui.item.label);
                // set value of hidden input to id; post that
                $('#aou_list_id').val(ui.item.value);
                // save on select
                $('#addSighting').submit();
            },
            focus: function (event, ui) {
                // default is to replace search string with ID
                event.preventDefault();
                // set value of hidden input to id; post that
                $('#aou_list_id').val(ui.item.value);
            }
        });
        $('#addSighting').on('submit', function (event) {
            // don't submit if aou_list_id hasn't been set yet
            if (!$('#aou_list_id').val()) {
                event.preventDefault();
            }
        });
        $('button.deleteSighting').on('click', function (e) {
            e.preventDefault();
            var confirmMessage = "Delete this sighting?";
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