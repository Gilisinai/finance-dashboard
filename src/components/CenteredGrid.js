import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopTable from './TopTable';
import MiddleCard from './MiddleCard';
import RightDataChart from './RightDataChart';
import topTableData from '../data/TopTableData';
import middleTableData from '../data/MiddleTableData';
import lowerConsoleData from '../data/LowerConsloeData';
import { Paper } from '@material-ui/core';
import TableFilters from './TableFilters';
import LowerConsole from './LowerConsole';
import MiddleCardContent from './MiddleCardContent';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '5px',
        backgroundColor: theme.palette.background.default,
        height: '100vh'
    },
    topTable: {
        maxHeight: 300,
        overflow: 'hidden',
        '@media (max-width:1280px)': {
            maxHeight: 160
        }
    },
    middleTable: {
        maxHeight: 250,
        overflow: 'hidden',
        '@media (max-width:1280px)': {
            maxHeight: 150
        }
    },
    lowerTable: {
        maxHeight: 200,
        '@media (max-width:1280px)': {
            maxHeight: 150
        }
    }
}));

export default function CenteredGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Grid container spacing={1} direction="column">
                {/* top grid for to divide top sections to 2 rows */}
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={8}>
                            {/* column to seperate top tables from middle tables and cards */}
                            <Grid container spacing={1} direction="column">
                                <Grid item xs={12}>
                                    {/* row for 2 top tables */}
                                    <Grid container spacing={1} direction="row">
                                        <Grid item xs={6} className={classes.topTable}>
                                            <Paper >
                                                <TableFilters id={'status-table'} />
                                                <TopTable data={topTableData} id={'status-table'} />
                                            </Paper>

                                        </Grid>
                                        <Grid item xs={6} className={classes.topTable}>
                                            <Paper>
                                                <TableFilters id={'status-table'} />
                                                <TopTable data={topTableData} id={'status-table'} />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    {/* row for middle chart and cards col */}
                                    <Grid container spacing={1} direction="row">
                                        <Grid item xs={8} className={classes.middleTable}>
                                            <Paper>
                                                <TableFilters id={'middle-table'} />
                                                <TopTable data={middleTableData} id={'middle-table'} />
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={4}>
                                            {/* col for 2 cards */}
                                            <Grid container spacing={1} direction="column">
                                                <Grid item xs={12}>
                                                    <MiddleCard id={'middle-card'} >
                                                        <MiddleCardContent/>
                                                    </MiddleCard>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <MiddleCard id={'middle-card'} >
                                                        <MiddleCardContent/>
                                                    </MiddleCard>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            {/* dividing chart grid to two charts in a row */}
                            <Grid container spacing={1} direction="row">
                                <Grid item xs={6}>
                                    <MiddleCard id={'right-chart'}>
                                        <RightDataChart />
                                    </MiddleCard>
                                </Grid>
                                <Grid item xs={6}>
                                    <MiddleCard id={'right-chart'}>
                                        <RightDataChart />
                                    </MiddleCard>
                                </Grid>
                                <Grid item xs={6}>
                                    <MiddleCard id={'right-chart'}>
                                        <RightDataChart />
                                    </MiddleCard>
                                </Grid>
                                <Grid item xs={6}>
                                    <MiddleCard id={'right-chart'}>
                                        <RightDataChart />
                                    </MiddleCard>
                                </Grid>
                                <Grid item xs={6}>
                                    <MiddleCard id={'right-chart'}>
                                        <RightDataChart />
                                    </MiddleCard>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* lower grid ffor two even tabels */}
                <Grid item xs={12}>
                    <Grid container spacing={1} direction="row">
                        <Grid item xs={6} className={classes.lowerTable}>
                            <MiddleCard id={'lower-console'}>
                                <LowerConsole data={lowerConsoleData} />
                            </MiddleCard>
                        </Grid>
                        <Grid item xs={6} className={classes.lowerTable}>
                            <MiddleCard id={'lower-console'}>
                                <LowerConsole data={lowerConsoleData} />
                            </MiddleCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    );
}