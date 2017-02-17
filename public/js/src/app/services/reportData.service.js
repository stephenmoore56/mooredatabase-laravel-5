System.register(["rxjs/add/operator/map", "@angular/core", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    function mapResults(response) {
        // The response of the API has a data
        // property with the actual results
        return response.json().data.map(function (r) {
            return r;
        });
    }
    var core_1, http_1, ReportDataService;
    return {
        setters: [
            function (_1) {
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            ReportDataService = (function () {
                function ReportDataService(http) {
                    this.http = http;
                    // private baseUrl: string = "http://lumen.local/api/reports";
                    this.baseUrl = "http://lumen.moore-database.com//api/reports";
                }
                ReportDataService.prototype.getSpeciesByMonth = function () {
                    return this.getResults('speciesByMonth');
                };
                ReportDataService.prototype.getSpeciesByYear = function () {
                    return this.getResults('speciesByYear');
                };
                ReportDataService.prototype.getSpeciesByOrder = function () {
                    return this.getResults('speciesByOrder');
                };
                ReportDataService.prototype.getSpeciesByLocation = function () {
                    return this.getResults('speciesByLocation');
                };
                ReportDataService.prototype.getSpeciesByCounty = function () {
                    return this.getResults('speciesByCounty');
                };
                ReportDataService.prototype.getSpeciesForMonth = function (month) {
                    return this.getResults("speciesForMonth/" + month);
                };
                ReportDataService.prototype.getSpeciesForYear = function (year) {
                    return this.getResults("speciesForYear/" + year);
                };
                ReportDataService.prototype.getSpeciesAll = function () {
                    return this.getResults("speciesAll");
                };
                ReportDataService.prototype.getSearchAll = function (searchTerm, orderId) {
                    return this.getResults("searchAll/" + searchTerm + "/" + orderId);
                };
                ReportDataService.prototype.getSpeciesForOrder = function (orderId) {
                    return this.getResults("speciesForOrder/" + orderId);
                };
                ReportDataService.prototype.getSpeciesForLocation = function (locationId) {
                    return this.getResults("speciesForLocation/" + locationId);
                };
                ReportDataService.prototype.getLocation = function (locationId) {
                    return this.getResults("locationDetail/" + locationId);
                };
                ReportDataService.prototype.getSpeciesDetail = function (speciesId) {
                    return this.getResults("speciesDetail/" + speciesId);
                };
                ReportDataService.prototype.getMonthsForSpecies = function (speciesId) {
                    return this.getResults("monthsForSpecies/" + speciesId);
                };
                ReportDataService.prototype.getOrdersAll = function () {
                    return this.getResults("listOrdersAll");
                };
                ReportDataService.prototype.getResults = function (endpoint) {
                    return this.http
                        .get(this.baseUrl + "/" + endpoint, { headers: this.getHeaders() })
                        .map(mapResults);
                };
                ReportDataService.prototype.getHeaders = function () {
                    var headers = new http_1.Headers();
                    headers.append('Accept', 'application/json');
                    return headers;
                };
                return ReportDataService;
            }());
            ReportDataService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], ReportDataService);
            exports_1("ReportDataService", ReportDataService);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/services/reportData.service.js.map