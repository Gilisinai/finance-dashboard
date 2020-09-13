import React from 'react'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
   
    active: {
        color: theme.palette.success.main
    },
    canceled: {
        color: theme.palette.error.main
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 5
    }
}));

function StatusIcon({content}) {

    const classes = useStyles();

    return (
        <div className={`${classes.flex} ${content === 'Active' ? classes.active : classes.canceled}`}>
            <RadioButtonCheckedIcon className={classes.icon} />
            {content}
        </div>
    )
}

export default StatusIcon
