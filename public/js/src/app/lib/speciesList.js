System.register(["./multisort"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var multisort_1, SpeciesList;
    return {
        setters: [
            function (multisort_1_1) {
                multisort_1 = multisort_1_1;
            }
        ],
        execute: function () {
            SpeciesList = /** @class */ (function () {
                function SpeciesList() {
                    this.birds = [];
                    this.orders = [];
                    this.originalBirds = [];
                    this.sortDirection = -1;
                    this.columnNames = [];
                    this.topNList = [
                        { value: Infinity, name: 'All' },
                        { value: 10, name: 'Top 10' },
                        { value: 20, name: 'Top 20' },
                        { value: 30, name: 'Top 30' },
                        { value: 40, name: 'Top 40' },
                        { value: 50, name: 'Top 50' }
                    ];
                }
                SpeciesList.prototype.setBirds = function (birds) {
                    this.birds = birds;
                    this.originalBirds = birds;
                };
                SpeciesList.prototype.sortResults = function (columnName) {
                    console.log(columnName);
                    this.sortResultsMulti([columnName]);
                };
                SpeciesList.prototype.sortResultsMulti = function (columnNames) {
                    // get sort parameters
                    this.sortDirection *= -1;
                    this.columnNames = [];
                    var reverse = (this.sortDirection == -1);
                    for (var i in columnNames) {
                        this.columnNames.push({
                            name: columnNames[i],
                            reverse: reverse
                        });
                    }
                    // sort the data
                    var filteredBirds = this.originalBirds; // start with original query results
                    filteredBirds.sort(multisort_1.sortBy.apply(void 0, this.columnNames));
                    // need to clone the array
                    this.birds = filteredBirds.slice(0);
                };
                return SpeciesList;
            }());
            exports_1("SpeciesList", SpeciesList);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/lib/speciesList.js.map