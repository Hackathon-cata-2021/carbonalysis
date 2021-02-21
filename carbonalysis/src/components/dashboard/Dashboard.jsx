import React, { useState, useEffect, useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { carbonFootprintContext } from '../../context/CarbonFootprintContext';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from 'axios';

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

    const [emissionsRes, setEmissionsRes] = useState(0);
    const [footprintRes, setFootprintRes] = useState(0);
    const [allEmissions, setAllEmissions] = useState(0);
    const [allFootprints, setAllFootprints] = useState(0);

    const { user } = useContext(carbonFootprintContext);

    const footprintData = [
        { averages: 'userAverage', footprint: footprintRes },
        { averages: 'globalAverage', footprint: allFootprints }
    ];

    const emissionsData = [
        { averages: 'userAverage', emissions: emissionsRes },
        { averages: 'globalAverage', emissions: allEmissions }
    ];

    
    const calculateAverage = (data, type, user) => {
        let total = 0;

        for (const x of data) {
            if (type === 'emissions') {
                total += x.total_emissions;
            } else {
                total += x.total_footprint;
            }
        }

        total /= data.length;

        if (user === 'all' && type === 'emissions') {
            setAllEmissions(total);
        } else if (user === 'all' && type === 'footprint') {
            setAllFootprints(total);
        } else if (user === 'self' && type === 'emissions') {
            setEmissionsRes(total);
        } else {
            setFootprintRes(total);
        }
    }

    useEffect(() => {
        const emissionsFetch = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/emissions/data/${user.id}`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'emissions', 'self');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const footprintFetch = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/footprint/data/${user.id}`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'footprint', 'self');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const getAllFootprints = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/footprint`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'footprint', 'all');
            })
            .catch(() => {
                throw new Error();
            });
        }

        const getAllEmissions = async () => {
            await axios({
                method: 'get',
                url: `http://localhost:8080/emissions`,
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('token')}`
                }
            })
            .then((response) => {
                calculateAverage(response.data, 'emissions', 'all');
            })
            .catch(() => {
                throw new Error();
            });
        }
        
        emissionsFetch();
        footprintFetch();
        
        getAllFootprints();
        getAllEmissions();
    }, [calculateAverage])

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
                    <Title text="Average Carbon Footprint (in points)" />
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
                        argumentField="averages"
                        color="green"
                    />
                    <Title text="Average CO2 Emissions (in tons)" />
                    <Animation />
                </Chart>
            </Paper>
        </div>
    );
}

