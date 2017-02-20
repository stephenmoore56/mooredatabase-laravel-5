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
            SpeciesList = (function () {
                function SpeciesList() {
                    this.birds = [];
                    this.orders = [];
                    this.originalBirds = [];
                    this.searchTerm = '';
                    this.orderName = 'All';
                    this.sortDirection = -1;
                    this.columnName = 'common_name';
                    this.columnNames = [];
                    this.topN = Infinity;
                }
                SpeciesList.prototype.setBirds = function (birds) {
                    this.birds = birds;
                    this.originalBirds = birds;
                };
                SpeciesList.prototype.sortResults = function (columnName) {
                    this.sortDirection *= -1;
                    this.columnName = columnName;
                    this.columnNames = [];
                    this.applyFilters();
                };
                SpeciesList.prototype.sortResultsMulti = function (columnNames) {
                    this.sortDirection *= -1;
                    this.columnName = '';
                    this.columnNames = [];
                    var reverse = (this.sortDirection == -1);
                    for (var i in columnNames) {
                        this.columnNames.push({
                            name: columnNames[i],
                            reverse: reverse
                        });
                    }
                    this.applyFilters();
                };
                SpeciesList.prototype.setSearchTermFilter = function (searchTerm) {
                    if (searchTerm === void 0) { searchTerm = ''; }
                    this.searchTerm = searchTerm;
                    this.applyFilters();
                };
                SpeciesList.prototype.setOrderNameFilter = function (orderName) {
                    if (orderName === void 0) { orderName = 'All'; }
                    this.orderName = orderName;
                    this.applyFilters();
                };
                SpeciesList.prototype.setTopNFilter = function (topN) {
                    if (topN === void 0) { topN = Infinity; }
                    this.topN = topN;
                    this.applyFilters();
                };
                SpeciesList.prototype.applyFilters = function () {
                    // apply the filters in sequence
                    var filteredBirds = this.originalBirds; // start with query results
                    filteredBirds = this.filterSearchTerm(filteredBirds, this.searchTerm);
                    filteredBirds = this.filterOrderName(filteredBirds, this.orderName);
                    // apply current sorts before top N filter
                    if (this.columnName != '') {
                        this.applySort(filteredBirds);
                    }
                    if (this.columnNames.length > 0) {
                        this.applySortMulti(filteredBirds);
                    }
                    filteredBirds = this.filterTopN(filteredBirds, this.topN);
                    this.birds = filteredBirds;
                };
                SpeciesList.prototype.applySort = function (birds) {
                    var _this = this;
                    // apply current sort (column and direction)
                    birds.sort(function (a, b) {
                        if (a[_this.columnName] === b[_this.columnName]) {
                            return 0;
                        }
                        else {
                            return (a[_this.columnName] < b[_this.columnName]) ? _this.sortDirection : _this.sortDirection * -1;
                        }
                    });
                };
                SpeciesList.prototype.applySortMulti = function (birds) {
                    birds.sort(multisort_1.sortBy.apply(void 0, this.columnNames));
                };
                SpeciesList.prototype.filterSearchTerm = function (birds, searchTerm) {
                    // apply the search term filter
                    if (searchTerm.trim() !== '') {
                        var regex_1 = new RegExp(searchTerm, 'i');
                        return birds.filter(function (bird) {
                            if (bird.common_name.match(regex_1) ||
                                bird.scientific_name.match(regex_1) ||
                                bird.order_name.match(regex_1) ||
                                bird.family.match(regex_1) ||
                                bird.subfamily.match(regex_1)) {
                                return true;
                            }
                        });
                    }
                    else {
                        return birds;
                    }
                };
                SpeciesList.prototype.filterOrderName = function (birds, orderName) {
                    // apply the order name filter
                    if (orderName !== 'All') {
                        return birds.filter(function (bird) {
                            if (bird.order_name === orderName) {
                                return true;
                            }
                        });
                    }
                    else {
                        return birds;
                    }
                };
                SpeciesList.prototype.filterTopN = function (birds, topN) {
                    return birds.slice(0, topN);
                };
                return SpeciesList;
            }());
            exports_1("SpeciesList", SpeciesList);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/classes/speciesList.js.map