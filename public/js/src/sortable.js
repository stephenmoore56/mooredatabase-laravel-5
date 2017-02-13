System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sortable;
    return {
        setters: [],
        execute: function () {
            Sortable = (function () {
                function Sortable() {
                    this.sortDirection = -1;
                    this.columnName = 'common_name';
                }
                Sortable.prototype.sortResults = function (results, columnName) {
                    var _this = this;
                    // toggle sort direction if column name hasn't changed
                    if (this.columnName === columnName) {
                        this.sortDirection *= -1;
                    }
                    else {
                        // otherwise set sort order ascending
                        this.sortDirection = 1;
                    }
                    this.columnName = columnName;
                    results.sort(function (a, b) {
                        if (a[_this.columnName] === b[_this.columnName]) {
                            return 0;
                        }
                        else {
                            return (a[_this.columnName] < b[_this.columnName]) ? _this.sortDirection : _this.sortDirection * -1;
                        }
                    });
                };
                return Sortable;
            }());
            exports_1("Sortable", Sortable);
        }
    };
});
//# sourceMappingURL=sortable.js.map