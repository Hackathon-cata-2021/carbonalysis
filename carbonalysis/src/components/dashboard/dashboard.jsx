import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
    { date: '12/24/2020', footprint: 2.525 },
    { date: '1960', footprint: 3.018 },
    { date: '1970', footprint: 3.682 },
    { date: '1980', footprint: 4.440 },
    { date: '1990', footprint: 5.310 },

];

export default function Dashboard() {


    return (
        <Paper>
            <Chart
                data={data}
            >
                <ArgumentAxis />
                <ValueAxis max={1000} />

                <BarSeries
                    valueField="footprint"
                    argumentField="date"
                />
                <Title text="Carbon Footprint" />
                <Animation />
            </Chart>
        </Paper>
    );
}

