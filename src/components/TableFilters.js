import React from 'react';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    filterContainer: {
        paddingLeft: 6,
        backgroundColor: theme.palette.primary.main,
        borderBottom: '1px solid rgb(81,81,81)'
    }
}))

const StyledFilter = withStyles((theme) => ({
    root: {
        borderRadius: 2,
        height: 16,
        margin: '2px 5px'
    },

}))(Chip);


function TableFilters({ id }) {
    const classes = useStyles()

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        id === 'status-table' ?
            <div className={classes.filterContainer}>
                <Typography style={{ display: 'inline' }} variant="body1" > Filters Applied: </Typography>
                <StyledFilter variant="outlined" label="Filter 1" size="small" deleteIcon={<CloseIcon />} onDelete={handleDelete} />
                <StyledFilter variant="outlined" label="Filter 1" size="small" deleteIcon={<CloseIcon />} onDelete={handleDelete} />
                <StyledFilter variant="outlined" label="Filter 1" size="small" deleteIcon={<CloseIcon />} onDelete={handleDelete} />
            </div>
            :
            <div className={classes.filterContainer}>
                <Typography style={{ display: 'inline' }} variant="body1" > Threshold: 12234325 </Typography>
            </div>


    )
}

export default TableFilters
