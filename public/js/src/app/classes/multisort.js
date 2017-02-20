System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function sort_by(args) {
        var fields = [].slice.call(arguments), n_fields = fields.length;
        return function (A, B) {
            var a, b, field, key, reverse, result, i;
            for (i in n_fields) {
                result = 0;
                field = fields[i];
                key = typeof field === 'string' ? field : field.name;
                a = A[key] == undefined ? '' : A[key];
                b = B[key] == undefined ? '' : B[key];
                if (typeof field.primer !== 'undefined') {
                    a = field.primer(a);
                    b = field.primer(b);
                }
                reverse = (field.reverse) ? -1 : 1;
                if (a < b)
                    result = reverse * -1;
                if (a > b)
                    result = reverse * 1;
                if (result !== 0)
                    break;
            }
            return result;
        };
    }
    exports_1("sort_by", sort_by);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/classes/multisort.js.map