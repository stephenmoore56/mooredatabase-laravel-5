System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ReportChartService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ReportChartService = (function () {
                function ReportChartService() {
                }
                ReportChartService.prototype.drawChartSpeciesByMonth = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var WIDTH_IN_PERCENT_OF_PARENT = 90, HEIGHT_IN_PERCENT_OF_PARENT = 90;
                    var gd3 = d3.select('#' + chart_div)
                        .style({
                        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
                    });
                    var gd = gd3.node();
                    /* extract data from JSON data */
                    var months = [];
                    var species = [];
                    var trips = [];
                    for (var i = 0; i < dataPoints.length; i++) {
                        // read species, trips and months into separate arrays
                        months[i] = dataPoints[i].monthName.substring(0, 3);
                        species[i] = dataPoints[i].speciesCount;
                        trips[i] = dataPoints[i].tripCount;
                    }
                    var trace1 = {
                        x: months,
                        y: species,
                        name: 'Species',
                        type: 'bar',
                        marker: {
                            color: '#ff7f0e'
                        }
                    };
                    var trace2 = {
                        x: months,
                        y: trips,
                        name: 'Trips',
                        mode: 'lines+markers',
                        marker: {
                            color: '#3072AB'
                        }
                    };
                    var data = [trace1, trace2];
                    var layout = {
                        margin: {
                            l: 50,
                            r: 5,
                            b: 50,
                            t: 30,
                            pad: 5
                        },
                        xaxis: {
                            title: 'Month',
                            type: 'category'
                        },
                        yaxis: {
                            title: 'Species / Trips'
                        }
                    };
                    Plotly.newPlot(chart_div, data, layout, {
                        displaylogo: false,
                        modeBarButtonsToRemove: ['sendDataToCloud']
                    });
                    window.onresize = function () {
                        Plotly.Plots.resize(gd);
                    };
                };
                ReportChartService.prototype.drawChartSpeciesByYear = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var WIDTH_IN_PERCENT_OF_PARENT = 90, HEIGHT_IN_PERCENT_OF_PARENT = 90;
                    var gd3 = d3.select('#' + chart_div)
                        .style({
                        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
                    });
                    var gd = gd3.node();
                    /* extract data from JSON data */
                    var years = [];
                    var species = [];
                    var trips = [];
                    for (var i = 0; i < dataPoints.length; i++) {
                        // read species, trips and months into separate arrays
                        years[i] = dataPoints[i].yearNumber;
                        species[i] = dataPoints[i].speciesCount;
                        trips[i] = dataPoints[i].tripCount;
                    }
                    var trace1 = {
                        x: years,
                        y: species,
                        name: 'Species',
                        type: 'bar',
                        marker: {
                            color: 'green'
                        }
                    };
                    var trace2 = {
                        x: years,
                        y: trips,
                        name: 'Trips',
                        mode: 'lines+markers',
                        marker: {
                            color: 'red'
                        }
                    };
                    var data = [trace1, trace2];
                    var layout = {
                        margin: {
                            l: 50,
                            r: 5,
                            b: 50,
                            t: 30,
                            pad: 5
                        },
                        xaxis: {
                            title: 'Year',
                            type: 'category'
                        },
                        yaxis: {
                            title: 'Species / Trips'
                        }
                    };
                    Plotly.newPlot(chart_div, data, layout, {
                        displaylogo: false,
                        modeBarButtonsToRemove: ['sendDataToCloud']
                    });
                    window.onresize = function () {
                        Plotly.Plots.resize(gd);
                    };
                };
                return ReportChartService;
            }());
            ReportChartService = __decorate([
                core_1.Injectable()
            ], ReportChartService);
            exports_1("ReportChartService", ReportChartService);
        }
    };
});
//# sourceMappingURL=reportChart.service.js.map