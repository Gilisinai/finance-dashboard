import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { CardHeader, CardContent } from '@material-ui/core';
import ChartButtons from './ChartButtons';
import ConsoleButtons from './ConsoleButtons';


const StyledCardContent = withStyles((theme) => ({
  root: {

    padding: 0,


  }
}))(CardContent);

const StyledCardHeader = withStyles((theme) => ({
  action: {
    marginTop: 0,
    marginRight: 0,
    maxHeight: 24,


  },
  title: {
    fontSize: '0.625rem',
    '@media (max-width:1280px)': {
      fontSize: '0.5rem',
    }
  }
}))(CardHeader);

const StyledCardHeaderConsole = withStyles((theme) => ({
  action: {
    marginTop: 0,
    marginRight: 0,
    maxHeight: 24,
    width: '100%'

  },
  title: {
    fontSize: '0.625rem',
    '@media (max-width:1280px)': {
      fontSize: '0.5rem',
    }
  }
}))(CardHeader);


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 200,
    '@media (max-width:1280px)': {
      maxHeight: 100
    }
  },
  cardHeader: {
    borderBottom: '1px solid white',
    padding: '1px 6px',
    backgroundColor: theme.palette.primary.main,


  },
  cardContent: {
    backgroundColor: theme.palette.secondary.main,
    '&:last-child': {
      padding: 0
    }
  },
  consoleButtons: {
    width: '100%'
  },





}));

export default function MiddleCard({ id, children }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {id === 'lower-console' ?
        <StyledCardHeaderConsole className={classes.cardHeader}

         

          action={ <ConsoleButtons /> }
          
        >

        </StyledCardHeaderConsole> :
        <StyledCardHeader className={classes.cardHeader}

          avatar={
            id === 'middle-card' && <SyncAltIcon />
          }

          action={
            id === 'right-chart' ? <ChartButtons /> :  ''
          }
          title={id === 'middle-card' ? 'BTC-USD' : id === 'right-chart' ? 'BTC-USD-CME' : ''}
        >

        </StyledCardHeader>
      }

      <StyledCardContent className={classes.cardContent}>
        {children}
      </StyledCardContent>

    </Card>
  );
}