System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sortable;
    return {
        setters: [],
        execute: function () {
            Sortable = (function () {
                function Sortable() {
                    this.sortdirection = -1;
                }
                Sortable.prototype.sortResults = function (results, columnName) {
                    var _this = this;
                    this.sortdirection *= -1;
                    results = results.sort(function (a, b) {
                        if (a[columnName] === b[columnName]) {
                            return 0;
                        }
                        else {
                            return (a[columnName] < b[columnName]) ? _this.sortdirection : _this.sortdirection * -1;
                        }
                    });
                };
                Sortable.prototype.goBack = function () {
                    window.history.back();
                };
                return Sortable;
            }());
            exports_1("Sortable", Sortable);
        }
    };
});
//# sourceMappingURL=sortable.js.map