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
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

function ConsoleButtons() {
    const classes = useStyles()
    return (
        <div className={classes.flex}>
            <StyledButton variant="contained" color="primary" href="#contained-buttons">
            ID
          </StyledButton>
          <StyledButton className={classes.active} variant="contained" color="primary" href="#contained-buttons">
            CREATED
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            LAST OPENED
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            INSTRUMENT
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            QTY
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            BID
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            ASK
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            DELTA
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            MODEL VOL
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            STATUS
          </StyledButton>
          <StyledButton variant="contained" color="primary" href="#contained-buttons">
            CLEARING
          </StyledButton>
        </div>
    )
}

export default ConsoleButtons
