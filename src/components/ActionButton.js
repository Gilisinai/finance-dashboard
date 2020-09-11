import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NearMeIcon from '@material-ui/icons/NearMe';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        padding: 5,
        maxWidth: 50
    },
    cardHeader: {
        borderBottom: '1px solid white'
    },
    btnValue: {
        display: 'block'
    }
});

export default function ActionButton() {
    const classes = useStyles();

    return (
        <Button className={classes.root}>
            <Grid container xs={12} direction="row">
                <Grid item xs={5}>
                    <NearMeIcon />
                </Grid>
                <Grid item xs={7}>
                    <Grid container xs={12} direction="column">
                        <Typography variant="body1">9234.47</Typography>
                        <Typography variant="body1">9234.47</Typography>
                    </Grid>
                </Grid>

            </Grid>


        </Button>
    );
}