import {Injectable} from "@angular/core";
import {Result} from "../lib/result";

// declare Plotly to suppress name errors
declare let Plotly: any;

@Injectable()
export class ChartService {

    public drawChartSpeciesByMonth(dataPoints: Result[], chart_div: string): void {

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
        let months: string[] = [];
        let species: number[] = [];
        let trips: number[] = [];

        for (let i in dataPoints) {
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
    }

    public drawChartSpeciesByYear(dataPoints: Result[], chart_div: string): void {

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
        let years: number[] = [];
        let species: number[] = [];
        let trips: number[] = [];
        for (let i in dataPoints) {
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
    }

    public drawChartMonthsForSpecies(dataPoints: Result[], chart_div: string): void {

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

        // complete list of months so chart has a
        // bar or space for every month
        let monthList: any[] = [
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
        let months: string[] = [];
        let sightings: number[] = [];
        for (let i in monthList) {
            months[i] = monthList[i][1];
            sightings[i] = monthList[i][2];
        }
        // update with sightings for months that have them
        for (let i in dataPoints) {
            sightings[dataPoints[i].monthNumber - 1] = dataPoints[i].sightingCount;
        }

        let trace1 = {
            x: months,
            y: sightings,
            name: 'Sightings',
            type: 'bar',
            marker: {
                color: '#ff7f0e'
            }
        };

        let data = [trace1];

        let layout = {
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

    }

    public drawChartSpeciesByOrder(dataPoints: Result[], chart_div: string): void {

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
        let orderNames: string[] = [];
        let speciesCounts: number[] = [];
        for (let i in dataPoints) {
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


    public drawChartSpeciesByCounty(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        // sort results by species count descending
        dataPoints.sort((a, b) => {
            if (a.speciesCount === b.speciesCount) {
                return 0;
            } else {
                return (a.speciesCount < b.speciesCount) ? -1 : 1;
            }
        });

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
        let counties: string[] = [];
        let species: number[] = [];
        let trips: number[] = [];
        for (let i in dataPoints) {
            counties[i] = dataPoints[i].countyName;
            species[i] = dataPoints[i].speciesCount;
            trips[i] = dataPoints[i].tripCount;
        }

        let trace1 = {
            y: counties,
            x: species,
            name: 'Species',
            type: 'bar',
            marker: {
                color: '#B733FF'
            },
            orientation: 'h'
        };

        let trace2 = {
            y: counties,
            x: trips,
            name: 'Trips',
            type: 'bar',
            marker: {
                color: '#33E75F'
            },
            orientation: 'h'
        };

        let data = [trace1, trace2];

        let layout = {
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
}
