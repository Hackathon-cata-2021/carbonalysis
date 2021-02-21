import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const footprintData = [
    { averages: 'userAverage', footprint: 2.525 },
    { averages: 'globalAverage', footprint: 3.018 },
    // { date: '1970', footprint: 3.682 },
    // { date: '1980', footprint: 4.440 },
    // { date: '1990', footprint: 5.310 },

];
const emissionsData = [
    { date: '12/24/2020', emissions: 2.525 },
    { date: '1960', emissions: 30.18 },
    { date: '1970', emissions: 3.682 },
    { date: '1980', emissions: 4.440 },
    { date: '1990', emissions: 5.310 },

];

const useStyles = makeStyles(() => ({
    chartContainer: {
        position: "absolute",
        left: "70px"
    },
    barchart: {
        minWidth: "400px",
        display: "inline-block",

    },
}));

export default function Dashboard() {
    const classes = useStyles();


    return (
        <div className={classes.chartContainer}>
            <Paper className={classes.barchart}>
                <Chart
                    data={footprintData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={1000} />

                    <BarSeries
                        valueField="footprint"
                        argumentField="averages"
                        
                    />
                    <Title text="Average Carbon Footprint" />
                    <Animation />
                </Chart>
            </Paper>

            <Paper className={classes.barchart}>
                <Chart
                    data={emissionsData}
                >
                    <ArgumentAxis />
                    <ValueAxis max={1000} />

                    <BarSeries
                        valueField="emissions"
                        argumentField="date"
                        color="green"
                    />
                    <Title text="Greenhouse Gas Emissions" />
                    <Animation />
                </Chart>
            </Paper>
        </div>
    );
}

