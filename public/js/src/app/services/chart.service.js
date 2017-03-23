System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, WIDTH_IN_PERCENT_OF_PARENT, HEIGHT_IN_PERCENT_OF_PARENT, CHART_STYLE, MONTHS, ChartService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            // chart style constants
            WIDTH_IN_PERCENT_OF_PARENT = 96;
            HEIGHT_IN_PERCENT_OF_PARENT = 96;
            CHART_STYLE = {
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
            };
            MONTHS = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            ChartService = (function () {
                function ChartService() {
                }
                ChartService.prototype.drawChartSpeciesByMonth = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
                    var gd = gd3.node();
                    /* extract data from JSON data */
                    var species = [];
                    var trips = [];
                    for (var i in dataPoints) {
                        species[i] = dataPoints[i].speciesCount;
                        trips[i] = dataPoints[i].tripCount;
                    }
                    var trace1 = {
                        x: MONTHS,
                        y: species,
                        name: 'Species',
                        type: 'bar',
                        marker: {
                            color: '#ff7f0e'
                        }
                    };
                    var trace2 = {
                        x: MONTHS,
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
                };
                ChartService.prototype.drawChartSpeciesByYear = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
                };
                ChartService.prototype.drawChartMonthsForSpecies = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
                    var gd = gd3.node();
                    var sightings = [];
                    for (var i in MONTHS) {
                        sightings[i] = 0;
                    }
                    // update with sightings for months that have them
                    for (var i in dataPoints) {
                        sightings[dataPoints[i].monthNumber - 1] = dataPoints[i].sightingCount;
                    }
                    var trace1 = {
                        x: MONTHS,
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
                };
                ChartService.prototype.drawChartSpeciesByOrder = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
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
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
                };
                ChartService.prototype.drawChartMonthlyTemperatures = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
                    var gd = gd3.node();
                    var record_low = [];
                    var avg_low = [];
                    var avg_high = [];
                    var record_high = [];
                    for (var i in MONTHS) {
                        record_low[i] = 0;
                        avg_low[i] = 0;
                        avg_high[i] = 0;
                        record_high[i] = 0;
                    }
                    // update with temperatures from database
                    for (var i in dataPoints) {
                        record_low[dataPoints[i].monthNumber - 1] = dataPoints[i].record_low_temp;
                        avg_low[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_low_temp;
                        avg_high[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_high_temp;
                        record_high[dataPoints[i].monthNumber - 1] = dataPoints[i].record_high_temp;
                    }
                    var trace1 = {
                        x: MONTHS,
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
                        x: MONTHS,
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
                        x: MONTHS,
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
                        x: MONTHS,
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
                };
                ChartService.prototype.drawChartDucksAndWarblers = function (dataPoints, chart_div) {
                    if (dataPoints.length === 0) {
                        return;
                    }
                    var d3 = Plotly.d3;
                    var gd3 = d3.select('#' + chart_div)
                        .style(CHART_STYLE);
                    var gd = gd3.node();
                    var ducks = [];
                    var warblers = [];
                    for (var i in MONTHS) {
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
                        x: MONTHS,
                        y: ducks,
                        name: 'Ducks',
                        type: 'lines+markers',
                        marker: {
                            color: 'purple'
                        },
                        line: {
                            dash: 'solid',
                            width: 1,
                            shape: 'spline'
                        }
                    };
                    var trace2 = {
                        x: MONTHS,
                        y: warblers,
                        name: 'Warblers',
                        type: 'lines+markers',
                        marker: {
                            color: 'green'
                        },
                        line: {
                            dash: 'solid',
                            width: 1,
                            shape: 'spline'
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
                    window.addEventListener('resize', function () {
                        Plotly.Plots.resize(gd);
                    });
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