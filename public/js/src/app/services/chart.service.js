System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ChartService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ChartService = (function () {
                function ChartService() {
                }
                ChartService.prototype.drawChartSpeciesByMonth = function (dataPoints, chart_div) {
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
                    for (var i in dataPoints) {
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
                            type: 'category'
                        },
                        legend: {
                            x: 0,
                            y: 1,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#000'
                            },
                            bgcolor: '#ECECEC',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
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
                ChartService.prototype.drawChartSpeciesByYear = function (dataPoints, chart_div) {
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
                    for (var i in dataPoints) {
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
                            color: '#FF6600'
                        }
                    };
                    var trace2 = {
                        x: years,
                        y: trips,
                        name: 'Trips',
                        mode: 'lines+markers',
                        marker: {
                            color: '#FCD202'
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
                            type: 'category'
                        },
                        legend: {
                            x: 0,
                            y: 1,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#000'
                            },
                            bgcolor: '#ECECEC',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
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
                ChartService.prototype.drawChartMonthsForSpecies = function (dataPoints, chart_div) {
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
                    // complete list of months so chart has a
                    // bar or space for every month
                    var monthList = [
                        [1, 'Jan', 0],
                        [2, 'Feb', 0],
                        [3, 'Mar', 0],
                        [4, 'Apr', 0],
                        [5, 'May', 0],
                        [6, 'Jun', 0],
                        [7, 'Jul', 0],
                        [8, 'Aug', 0],
                        [9, 'Sep', 0],
                        [10, 'Oct', 0],
                        [11, 'Nov', 0],
                        [12, 'Dec', 0],
                    ];
                    var months = [];
                    var sightings = [];
                    for (var i in monthList) {
                        months[i] = monthList[i][1];
                        sightings[i] = monthList[i][2];
                    }
                    // update with sightings for months that have them
                    for (var i in dataPoints) {
                        sightings[dataPoints[i].monthNumber - 1] = dataPoints[i].sightingCount;
                    }
                    var trace1 = {
                        x: months,
                        y: sightings,
                        name: 'Sightings',
                        type: 'bar',
                        marker: {
                            color: '#ff7f0e'
                        }
                    };
                    var data = [trace1];
                    var layout = {
                        legend: {
                            xanchor: "center",
                            yanchor: "top",
                            y: -0.3,
                            x: 0.5
                        },
                        margin: {
                            l: 50,
                            r: 5,
                            b: 50,
                            t: 30,
                            pad: 5
                        },
                        xaxis: {
                            type: 'category'
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
                ChartService.prototype.drawChartSpeciesByOrder = function (dataPoints, chart_div) {
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
                    var orderNames = [];
                    var speciesCounts = [];
                    for (var i in dataPoints) {
                        orderNames[i] = dataPoints[i].order_name;
                        speciesCounts[i] = dataPoints[i].speciesCount;
                    }
                    var trace1 = {
                        values: speciesCounts,
                        labels: orderNames,
                        type: 'pie'
                    };
                    var data = [trace1];
                    var layout = {
                        margin: {
                            l: 50,
                            r: 5,
                            b: 100,
                            t: 30,
                            pad: 5
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
                ChartService.prototype.drawChartSpeciesByCounty = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    // sort results by species count descending
                    dataPoints.sort(function (a, b) {
                        if (a.speciesCount === b.speciesCount) {
                            return 0;
                        }
                        else {
                            return (a.speciesCount < b.speciesCount) ? -1 : 1;
                        }
                    });
                    var d3 = Plotly.d3;
                    var WIDTH_IN_PERCENT_OF_PARENT = 90, HEIGHT_IN_PERCENT_OF_PARENT = 90;
                    var gd3 = d3.select('#' + chart_div)
                        .style({
                        width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                        height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
                    });
                    var gd = gd3.node();
                    /* extract data from JSON data */
                    var counties = [];
                    var species = [];
                    var trips = [];
                    for (var i in dataPoints) {
                        counties[i] = dataPoints[i].countyName;
                        species[i] = dataPoints[i].speciesCount;
                        trips[i] = dataPoints[i].tripCount;
                    }
                    var trace1 = {
                        y: counties,
                        x: species,
                        name: 'Species',
                        type: 'bar',
                        marker: {
                            color: '#B733FF'
                        },
                        orientation: 'h'
                    };
                    var trace2 = {
                        y: counties,
                        x: trips,
                        name: 'Trips',
                        type: 'bar',
                        marker: {
                            color: '#33E75F'
                        },
                        orientation: 'h'
                    };
                    var data = [trace1, trace2];
                    var layout = {
                        title: "Species &amp; Trips By County",
                        margin: {
                            l: 100,
                            r: 5,
                            b: 5,
                            t: 75,
                            pad: 5
                        },
                        yaxis: {
                            title: '',
                            type: 'category'
                        },
                        xaxis: {
                            title: ''
                        },
                        legend: {
                            x: 0.66,
                            y: 0.75,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#000'
                            },
                            bgcolor: '#ECECEC',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
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
                ChartService.prototype.drawChartMonthlyTemperatures = function (dataPoints, chart_div) {
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
                    // complete list of months so chart has a
                    // bar or space for every month
                    var monthList = [
                        [1, 'J', 0, 0, 0, 0],
                        [2, 'F', 0, 0, 0, 0],
                        [3, 'M', 0, 0, 0, 0],
                        [4, 'A', 0, 0, 0, 0],
                        [5, 'M', 0, 0, 0, 0],
                        [6, 'J', 0, 0, 0, 0],
                        [7, 'J', 0, 0, 0, 0],
                        [8, 'A', 0, 0, 0, 0],
                        [9, 'S', 0, 0, 0, 0],
                        [10, 'O', 0, 0, 0, 0],
                        [11, 'N', 0, 0, 0, 0],
                        [12, 'D', 0, 0, 0, 0],
                    ];
                    var months = [];
                    var record_low = [];
                    var avg_low = [];
                    var avg_high = [];
                    var record_high = [];
                    for (var i in monthList) {
                        months[i] = monthList[i][0];
                        record_low[i] = monthList[i][2];
                        avg_low[i] = monthList[i][3];
                        avg_high[i] = monthList[i][4];
                        record_high[i] = monthList[i][5];
                    }
                    // update with temperatures from database
                    for (var i in dataPoints) {
                        record_low[dataPoints[i].monthNumber - 1] = dataPoints[i].record_low_temp;
                        avg_low[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_low_temp;
                        avg_high[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_high_temp;
                        record_high[dataPoints[i].monthNumber - 1] = dataPoints[i].record_high_temp;
                    }
                    var trace1 = {
                        x: months,
                        y: record_low,
                        name: 'Rec Lo',
                        type: 'lines+markers',
                        marker: {
                            color: 'blue'
                        },
                        line: {
                            dash: 'dot',
                            width: 1,
                            shape: 'spline'
                        }
                    };
                    var trace2 = {
                        x: months,
                        y: avg_low,
                        name: 'Avg Lo',
                        mode: 'lines+markers',
                        marker: {
                            color: 'blue'
                        },
                        line: {
                            dash: 'solid',
                            width: 1,
                            shape: 'spline'
                        }
                    };
                    var trace3 = {
                        x: months,
                        y: avg_high,
                        name: 'Avg Hi',
                        mode: 'lines+markers',
                        marker: {
                            color: 'red'
                        },
                        line: {
                            dash: 'solid',
                            width: 1,
                            shape: 'spline'
                        }
                    };
                    var trace4 = {
                        x: months,
                        y: record_high,
                        name: 'Rec Hi',
                        mode: 'lines+markers',
                        marker: {
                            color: 'red'
                        },
                        line: {
                            dash: 'dot',
                            width: 1,
                            shape: 'spline'
                        }
                    };
                    var data = [trace1, trace2, trace3, trace4];
                    var layout = {
                        title: 'Temps By Month<br />Minneapolis, MN',
                        margin: {
                            l: 50,
                            r: 5,
                            b: 50,
                            t: 30,
                            pad: 5
                        },
                        xaxis: {
                            type: 'category'
                        },
                        legend: {
                            x: 0.33,
                            y: 0,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#000'
                            },
                            bgcolor: '#ECECEC',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
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
                ChartService.prototype.drawChartDucksAndWarblers = function (dataPoints, chart_div) {
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
                    var gd2 = gd3.node();
                    // complete list of months so chart has a
                    // bar or space for every month
                    var monthList = [
                        [1, 'Jan'],
                        [2, 'Feb'],
                        [3, 'Mar'],
                        [4, 'Apr'],
                        [5, 'May'],
                        [6, 'Jun'],
                        [7, 'Jul'],
                        [8, 'Aug'],
                        [9, 'Sep'],
                        [10, 'Oct'],
                        [11, 'Nov'],
                        [12, 'Dec'],
                    ];
                    var months = [];
                    var ducks = [];
                    var warblers = [];
                    for (var i in monthList) {
                        months[i] = monthList[i][1];
                        ducks[i] = 0;
                        warblers[i] = 0;
                    }
                    // update with temperatures from database
                    for (var i in dataPoints) {
                        if (dataPoints[i].family == 'Anatidae') {
                            // duck data
                            ducks[dataPoints[i].monthNumber - 1] = dataPoints[i].speciesCount;
                        }
                        else {
                            // warbler data, family Parulidae
                            warblers[dataPoints[i].monthNumber - 1] = dataPoints[i].speciesCount;
                        }
                    }
                    var trace1 = {
                        x: months,
                        y: ducks,
                        name: 'Ducks',
                        type: 'lines+markers',
                        marker: {
                            color: 'purple'
                        },
                        line: {
                            dash: 'solid',
                            width: 1
                        }
                    };
                    var trace2 = {
                        x: months,
                        y: warblers,
                        name: 'Warblers',
                        type: 'lines+markers',
                        marker: {
                            color: 'green'
                        },
                        line: {
                            dash: 'solid',
                            width: 1
                        }
                    };
                    var data = [trace1, trace2];
                    var layout = {
                        title: 'Sightings By Month',
                        margin: {
                            l: 50,
                            r: 5,
                            b: 50,
                            t: 30,
                            pad: 5
                        },
                        xaxis: {
                            type: 'category'
                        },
                        legend: {
                            x: 0.33,
                            y: 0,
                            traceorder: 'normal',
                            font: {
                                family: 'sans-serif',
                                size: 12,
                                color: '#000'
                            },
                            bgcolor: '#ECECEC',
                            bordercolor: '#FFFFFF',
                            borderwidth: 2
                        }
                    };
                    Plotly.newPlot(chart_div, data, layout, {
                        displaylogo: false,
                        modeBarButtonsToRemove: ['sendDataToCloud']
                    });
                    window.onresize = function () {
                        Plotly.Plots.resize(gd2);
                    };
                };
                return ChartService;
            }());
            ChartService = __decorate([
                core_1.Injectable()
            ], ChartService);
            exports_1("ChartService", ChartService);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/services/chart.service.js.map