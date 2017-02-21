System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function sortBy() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var fields = [].slice.call(args);
        return function (A, B) {
            var a, b, field, key, reverse, result, i;
            for (i in fields) {
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
    exports_1("sortBy", sortBy);
    return {
        setters: [],
        execute: function () {
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/lib/multisort.js.map