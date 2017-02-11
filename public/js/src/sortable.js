System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sortable;
    return {
        setters: [],
        execute: function () {
            Sortable = (function () {
                function Sortable() {
                    this.birds = [];
                    this.originalBirds = [];
                    this.birdQuery = '';
                    this.orders = [];
                    this.orderName = 'All';
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
                Sortable.prototype.filterResults = function (birdQuery) {
                    if (birdQuery === void 0) { birdQuery = ''; }
                    this.birdQuery = birdQuery;
                    this.filterBirds();
                };
                Sortable.prototype.filterOrder = function (orderName) {
                    if (orderName === void 0) { orderName = 'All'; }
                    this.orderName = orderName;
                    this.filterBirds();
                };
                Sortable.prototype.filterBirds = function () {
                    // apply the string filter
                    if (this.birdQuery !== '') {
                        var regex_1 = new RegExp(this.birdQuery, 'i');
                        var birds = this.originalBirds.filter(function (bird) {
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
                        var birds = this.originalBirds;
                    }
                    // apply the order filter
                    if (this.orderName !== 'All') {
                        var birds2 = birds.filter(function (bird) {
                            if (bird.order_name === this.orderName) {
                                return true;
                            }
                        }.bind(this));
                        birds = birds2;
                    }
                    this.birds = birds;
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