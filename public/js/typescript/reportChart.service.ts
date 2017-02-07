import {Injectable} from '@angular/core';
import {Result} from './result';

@Injectable()
export class ReportChartService {

    public drawChartSpeciesByMonth(dataPoints: Result[], chart_div: string) {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;

        let WIDTH_IN_PERCENT_OF_PARENT = 90,
            HEIGHT_IN_PERCENT_OF_PARENT = 90;

        let gd3 = d3.select('#' + chart_div)
            .style({
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
            });

        let gd = gd3.node();

        /* extract data from JSON data */
        let months = [];
        let species = [];
        let trips = [];
        for (let i = 0; i < dataPoints.length; i++) {
            // read species, trips and months into separate arrays
            months[i] = dataPoints[i].monthName.substring(0, 3);
            species[i] = dataPoints[i].speciesCount;
            trips[i] = dataPoints[i].tripCount;
        }

        let trace1 = {
            x: months,
            y: species,
            name: 'Species',
            type: 'bar',
            marker: {
                color: '#ff7f0e'
            }
        };

        let trace2 = {
            x: months,
            y: trips,
            name: 'Trips',
            mode: 'lines+markers',
            marker: {
                color: '#3072AB'
            }
        };

        let data = [trace1, trace2];

        let layout = {
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
    }

    public drawChartSpeciesByYear(dataPoints: Result[], chart_div: string) {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;

        let WIDTH_IN_PERCENT_OF_PARENT = 90,
            HEIGHT_IN_PERCENT_OF_PARENT = 90;

        let gd3 = d3.select('#' + chart_div)
            .style({
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
            });

        let gd = gd3.node();

        /* extract data from JSON data */
        let years = [];
        let species = [];
        let trips = [];
        for (let i = 0; i < dataPoints.length; i++) {
            // read species, trips and months into separate arrays
            years[i] = dataPoints[i].yearNumber;
            species[i] = dataPoints[i].speciesCount;
            trips[i] = dataPoints[i].tripCount;
        }

        let trace1 = {
            x: years,
            y: species,
            name: 'Species',
            type: 'bar',
            marker: {
                color: 'green'
            }
        };

        let trace2 = {
            x: years,
            y: trips,
            name: 'Trips',
            mode: 'lines+markers',
            marker: {
                color: 'red'
            }
        };

        let data = [trace1, trace2];

        let layout = {
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
    }

    //         drawChartMonthsForSpecies: function (dataPoints, chart_div) {
    //             var months, sightings, data, trace1, i, layout;
    //             if (dataPoints.length === 0) {
    //                 return;
    //             }
    //
    //             var d3 = Plotly.d3;
    //
    //             var WIDTH_IN_PERCENT_OF_PARENT = 90,
    //                 HEIGHT_IN_PERCENT_OF_PARENT = 90;
    //
    //             var gd3 = d3.select('#' + chart_div)
    //                 .style({
    //                     width: WIDTH_IN_PERCENT_OF_PARENT + '%',
    //                     height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
    //                 });
    //
    //             var gd = gd3.node();
    //
    //             /* extract data from JSON data */
    //             months = [];
    //             sightings = [];
    //             for (i = 0; i < dataPoints.length; i++) {
    //                 // read species, trips and months into separate arrays
    //                 months[i] = dataPoints[i].monthName.substring(0, 3);
    //                 sightings[i] = dataPoints[i].sightingCount;
    //             }
    //
    //             trace1 = {
    //                 x: months,
    //                 y: sightings,
    //                 name: 'Sightings',
    //                 type: 'bar',
    //                 marker: {
    //                     color: '#ff7f0e'
    //                 }
    //             };
    //
    //             data = [trace1];
    //
    //             layout = {
    //                 legend: {
    //                     xanchor: "center",
    //                     yanchor: "top",
    //                     y: -0.3,
    //                     x: 0.5
    //                 },
    //                 margin: {
    //                     l: 50,
    //                     r: 5,
    //                     b: 50,
    //                     t: 30,
    //                     pad: 5
    //                 },
    //                 xaxis: {
    //                     title: 'Month',
    //                     type: 'category'
    //                 },
    //                 yaxis: {
    //                     title: 'Sightings'
    //                 }
    //             };
    //
    //             Plotly.newPlot(chart_div, data, layout, {
    //                 displaylogo: false,
    //                 modeBarButtonsToRemove: ['sendDataToCloud']
    //             });
    //
    //             window.onresize = function () {
    //                 Plotly.Plots.resize(gd);
    //             };
    //
    //         },

    public drawChartSpeciesByOrder(dataPoints: Result[], chart_div: string) {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;

        let WIDTH_IN_PERCENT_OF_PARENT = 90,
            HEIGHT_IN_PERCENT_OF_PARENT = 90;

        let gd3 = d3.select('#' + chart_div)
            .style({
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
            });

        let gd = gd3.node();

        /* extract data from JSON data */
        let orderNames = [];
        let speciesCounts = [];
        for (let i = 0; i < dataPoints.length; i++) {
            // read species, trips and months into separate arrays
            orderNames[i] = dataPoints[i].order_name;
            speciesCounts[i] = dataPoints[i].speciesCount;
        }

        let trace1 = {
            values: speciesCounts,
            labels: orderNames,
            type: 'pie'
        };

        let data = [trace1];

        let layout = {
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

    }

    //
    //         drawChartSpeciesByCounty: function (dataPoints, chart_div) {
    //             var counties, species, trips, data, trace1, trace2, i, layout;
    //             if (dataPoints.length === 0) {
    //                 return;
    //             }
    //
    //             var d3 = Plotly.d3;
    //
    //             var WIDTH_IN_PERCENT_OF_PARENT = 90,
    //                 HEIGHT_IN_PERCENT_OF_PARENT = 90;
    //
    //             var gd3 = d3.select('#' + chart_div)
    //                 .style({
    //                     width: WIDTH_IN_PERCENT_OF_PARENT + '%',
    //                     height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
    //                 });
    //
    //             var gd = gd3.node();
    //
    //             /* extract data from JSON data */
    //             counties = [];
    //             species = [];
    //             trips = [];
    //             for (i = 0; i < dataPoints.length; i++) {
    //                 // read species, trips and counties into separate arrays
    //                 counties[i] = dataPoints[i].countyName;
    //                 species[i] = dataPoints[i].speciesCount;
    //                 trips[i] = dataPoints[i].tripCount;
    //             }
    //
    //             trace1 = {
    //                 y: counties,
    //                 x: species,
    //                 name: 'Species',
    //                 type: 'bar',
    //                 marker: {
    //                     color: '#B733FF'
    //                 },
    //                 orientation: 'h'
    //             };
    //
    //             trace2 = {
    //                 y: counties,
    //                 x: trips,
    //                 name: 'Trips',
    //                 type: 'bar',
    //                 marker: {
    //                     color: '#33E75F'
    //                 },
    //                 orientation: 'h'
    //             };
    //
    //             data = [trace1, trace2];
    //
    //             layout = {
    //                 title: "Species &amp; Trips By County",
    //                 margin: {
    //                     l: 100,
    //                     r: 5,
    //                     b: 5,
    //                     t: 75,
    //                     pad: 5
    //                 },
    //                 yaxis: {
    //                     title: '',
    //                     type: 'category'
    //                 },
    //                 xaxis: {
    //                     title: ''
    //                 }
    //             };
    //
    //             Plotly.newPlot(chart_div, data, layout, {
    //                 displaylogo: false,
    //                 modeBarButtonsToRemove: ['sendDataToCloud']
    //             });
    //
    //             window.onresize = function () {
    //                 Plotly.Plots.resize(gd);
    //             };
    //
    //         }
    //     };
    // });
}
