import {Injectable} from "@angular/core";
import {Result} from "../lib/result";

// declare Plotly to suppress name errors
declare let Plotly: any;

// chart style constants
const WIDTH_IN_PERCENT_OF_PARENT: number = 96;
const HEIGHT_IN_PERCENT_OF_PARENT: number = 96;
const CHART_STYLE: any = {
    width: WIDTH_IN_PERCENT_OF_PARENT + '%',
    height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh'
};
const MONTHS: string[] = [
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

@Injectable()
export class ChartService {

    private drawChart(chart_div: string, data: any[], layout: any) {
        let displayModeBar = (screen.width >= 400);
        Plotly.newPlot(chart_div, data, layout, {
            displaylogo: false,
            displayModeBar: displayModeBar
        });
    }

    private resizeWindow(gd: any) {
        window.addEventListener('resize', function () {
            Plotly.Plots.resize(gd);
        });
    }

    public drawChartSpeciesByMonth(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
        let gd = gd3.node();

        /* extract data from JSON data */
        let species: number[] = [];
        let trips: number[] = [];

        for (let i in dataPoints) {
            species[i] = dataPoints[i].speciesCount;
            trips[i] = dataPoints[i].tripCount;
        }

        let trace1 = {
            x: MONTHS,
            y: species,
            name: 'Species',
            type: 'bar',
            marker: {
                color: '#ff7f0e'
            }
        };

        let trace2 = {
            x: MONTHS,
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
                l: 30,
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

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);
    }

    public drawChartSpeciesByYear(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
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
                color: '#FF6600'
            }
        };

        let trace2 = {
            x: years,
            y: trips,
            name: 'Trips',
            mode: 'lines+markers',
            marker: {
                color: '#FCD202'
            }
        };

        let data = [trace1, trace2];

        let layout = {
            margin: {
                l: 30,
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

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);
    }

    public drawChartMonthsForSpecies(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
        let gd = gd3.node();

        let sightings: number[] = [];
        for (let i in MONTHS) {
            sightings[i] = 0;
        }
        // update with sightings for months that have them
        for (let i in dataPoints) {
            sightings[dataPoints[i].monthNumber - 1] = dataPoints[i].sightingCount;
        }

        let trace1 = {
            x: MONTHS,
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
                l: 30,
                r: 5,
                b: 50,
                t: 30,
                pad: 5
            },
            xaxis: {
                type: 'category'
            }
        };

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);

    }

    public drawChartSpeciesByOrder(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
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
                l: 30,
                r: 5,
                b: 100,
                t: 30,
                pad: 5
            }
        };

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);

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
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
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

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);

    }

    public drawChartMonthlyTemperatures(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
        let gd = gd3.node();

        let record_low: number[] = [];
        let avg_low: number[] = [];
        let avg_high: number[] = [];
        let record_high: number[] = [];
        let days_with_frost: number[] = [];
        for (let i in MONTHS) {
            record_low[i] = 0;
            avg_low[i] = 0;
            avg_high[i] = 0;
            record_high[i] = 0;
            days_with_frost[i] = 0;
        }
        // update with temperatures from database
        for (let i in dataPoints) {
            record_low[dataPoints[i].monthNumber - 1] = dataPoints[i].record_low_temp;
            avg_low[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_low_temp;
            avg_high[dataPoints[i].monthNumber - 1] = dataPoints[i].avg_high_temp;
            record_high[dataPoints[i].monthNumber - 1] = dataPoints[i].record_high_temp;
            days_with_frost[dataPoints[i].monthNumber - 1] = dataPoints[i].days_with_frost;
        }

        let trace1 = {
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

        let trace2 = {
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

        let trace3 = {
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

        let trace4 = {
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

        let trace5 = {
            x: MONTHS,
            y: days_with_frost,
            name: 'Days w/Frost',
            yaxis: 'y2',
            mode: 'lines+markers',
            marker: {
                color: '#AE00F9'
            },
            line: {
                dash: 'solid',
                width: 1,
                shape: 'spline'
            }
        };

        let data = [trace1, trace2, trace3, trace4, trace5];

        let layout = {
            title: 'Temps By Month<br />Days w/Frost',
            margin: {
                l: 35,
                r: 35,
                b: 30,
                t: 80,
                pad: 0
            },
            xaxis: {
                type: 'category'
            },
            yaxis: {
                title: 'Degrees'
            },
            yaxis2: {
                title: 'Days',
                titlefont: {color: '#AE00F9'},
                tickfont: {color: '#AE00F9'},
                overlaying: 'y',
                side: 'right'
            },
            showlegend: false
        };

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);
    }

    public drawChartDucksAndWarblers(dataPoints: Result[], chart_div: string): void {

        if (dataPoints.length === 0) {
            return;
        }

        let d3 = Plotly.d3;
        let gd3 = d3.select('#' + chart_div)
            .style(CHART_STYLE);
        let gd = gd3.node();

        let ducks: number[] = [];
        let warblers: number[] = [];
        for (let i in MONTHS) {
            ducks[i] = 0;
            warblers[i] = 0;
        }
        // update with temperatures from database
        for (let i in dataPoints) {
            if (dataPoints[i].family == 'Anatidae') {
                // duck data
                ducks[dataPoints[i].monthNumber - 1] = dataPoints[i].speciesCount;
            } else {
                // warbler data, family Parulidae
                warblers[dataPoints[i].monthNumber - 1] = dataPoints[i].speciesCount;
            }
        }
        let trace1 = {
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
        let trace2 = {
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

        let data = [trace1, trace2];

        let layout = {
            title: 'Sightings By Month',
            margin: {
                l: 30,
                r: 5,
                b: 35,
                t: 80,
                pad: 5
            },
            xaxis: {
                type: 'category'
            },
            legend: {
                showLegend: true,
                x: 0.35,
                y: 0.00,
                bgcolor: '#ECECEC',
                bordercolor: '#FFFFFF',
                borderwidth: 2
            }
        };

        this.drawChart(chart_div, data, layout);
        this.resizeWindow(gd);
    }
}
