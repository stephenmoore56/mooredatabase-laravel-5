System.register(["@angular/core", "./reportData.service", "./reportChart.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, reportData_service_1, reportChart_service_1, AppComponentReports;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reportData_service_1_1) {
                reportData_service_1 = reportData_service_1_1;
            },
            function (reportChart_service_1_1) {
                reportChart_service_1 = reportChart_service_1_1;
            }
        ],
        execute: function () {
            AppComponentReports = (function () {
                function AppComponentReports() {
                }
                return AppComponentReports;
            }());
            AppComponentReports = __decorate([
                core_1.Component({
                    selector: '[app-root]',
                    template: "<report></report>",
                    providers: [
                        reportData_service_1.ReportDataService,
                        reportChart_service_1.ReportChartService
                    ]
                })
            ], AppComponentReports);
            exports_1("AppComponentReports", AppComponentReports);
        }
    };
});
//# sourceMappingURL=app.component.reports.js.map