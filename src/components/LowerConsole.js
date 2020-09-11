import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Theme from './ui/Theme';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: Theme.palette.secondary.main,
  },
  info: {
    color: '#1058a6',
    flex: '0 0 auto',
    margin: '0px 4px'
  },
  warning: {
    color: '#bf9e31',
    flex: '0 0 auto',
    margin: '0px 4px'

  },
  text: {
    flex: '0 0 auto',
    margin: '0px 4px'
  },
  failed: {
    color: '#d0293c',
    flex: '0 0 auto',
    margin: '0px 4px'
  },
  listItem: {
    padding: '0px 4px'
  }
}));

export default function LowerConsole({ data }) {
  const classes = useStyles();


  return (
    <div style={{ overflow: 'auto', maxHeight: '150px' }}>

      <List className={classes.root}>

        {data.map((item, index) => (
          <ListItem key={index} role={undefined} dense className={classes.listItem}  >
            <ListItemText className={classes.text} primary={`[${item.date}] ${item.mode}.`} />
            <ListItemText className={item.warning ? classes.warning : classes.info} primary={item.warning ? 'WARNING:' : 'INFO:'} />
            {item.warning ?
              <React.Fragment >
                <ListItemText className={classes.text} primary={`login`} />
                <ListItemText className={classes.failed} primary={`failed`} />
                <ListItemText className={classes.text} primary={`Wrong number of segments`} />
              </React.Fragment>
              :
              <ListItemText className={classes.text} primary={`${item.currencyPair} - limited price : ${item.limitedPrice} - message : ${item.message} : ${item.id}`} />
            }

          </ListItem>
        ))}


      </List>
    </div>
  );
}