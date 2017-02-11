(function () {
    'use strict';
    $(document).ready(function () {
        $('#location_id').focus();
        $('#trip_date').datepicker({
            dateFormat: "yy-mm-dd"
        });
        $('#tripForm').tripValidator();
    });
})();