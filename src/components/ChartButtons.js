import React from 'react'
import {  Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles((theme) => ({
    root: {
        padding: 2,
        minWidth: 24,
        boxShadow: 'none',
        margin: 4,
        fontSize: '0.6rem'
    }
  }))(Button);

const useStyles = makeStyles((theme) => ({
    active: {
        backgroundColor: theme.palette.secondary.main
    }
}))

function ChartButtons() {
    const classes = useStyles()
    return (
        <div>
            <StyledButton className={classes.active} variant="contained" color="primary" href="#contained-buttons">
            1H
          </StyledButton>
          <StyledButton  variant="contained" color="primary" href="#contained-buttons">
            1D
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            1W
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            1M
          </StyledButton>
        </div>
    )
}

export default ChartButtons
