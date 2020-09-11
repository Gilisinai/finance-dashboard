import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import Typography from '@material-ui/core/Typography';
import { CardHeader, Grid, CardActions, Icon, CardContent, Button } from '@material-ui/core';
import ChartButtons from './ChartButtons';
import ConsoleButtons from './ConsoleButtons';


const StyledCardContent = withStyles((theme) => ({
  root: {
    
      padding: 0
    
  }
}))(CardContent);

const StyledCardHeader = withStyles((theme) => ({
  action: {
    marginTop: 0,
    marginRight: 0,
    maxHeight:24,
    
   
  },
  title: {
    fontSize: '0.625rem'
  }
}))(CardHeader);


const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 200,
    
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

export default function MiddleCard({id, children}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <StyledCardHeader className={classes.cardHeader}
        avatar={
          id == 'middle-card' && <SyncAltIcon />
        }

        action={
          id == 'right-chart' ? <ChartButtons  /> : id == 'lower-console' ? <ConsoleButtons  /> : ''
        }
        title={id == 'middle-card' ? 'BTC-USD' : id == 'right-chart' ? 'BTC-USD-CME' : ''}
      >

      </StyledCardHeader>
      <StyledCardContent className={classes.cardContent}>
        {children}
      </StyledCardContent>

    </Card>
  );
}