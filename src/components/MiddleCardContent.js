import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import SendIcon from '@material-ui/icons/Send';

const StyledButton = withStyles((theme) => ({
    contained: {
        color: 'white',
        '@media (max-width:1280px)': {
            padding: '2px 6px',
            fontSize: 8
        }
    },
    root: {
        textTransform: 'unset'
    }
}))(Button)

const StyledFilter = withStyles((theme) => ({
    root: {
        borderRadius: 2,
        height: 16,
        width:  '33%',
        margin: '2px 1px',
        justifyContent: 'flex-start',
        
    },
    labelSmall: {
        paddingLeft: 2
    }

}))(Chip);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: 6,
        },
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    sell: {
        backgroundColor: theme.palette.error.main
    },
    buy: {
        backgroundColor: theme.palette.success.main
    },
    alignLeft: {
        textAlign: "left"
    },
    icon: {
        '&:first-child': {
            fontSize: '38px',
            '@media (max-width:1280px)': {
                fontSize: '20px',
            }
        }
    },
    filterContainer: {
        display: 'flex',
        width: '90%'
    },
   
}));

function MiddleCardContent() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>

                <StyledButton
                    variant="contained"
                    className={classes.sell}
                    startIcon={<SendIcon className={classes.icon} />}
                >
                    <div className={classes.alignLeft}>
                        <div >9562.47</div>
                        <div>Sell</div>
                    </div>


                </StyledButton>
                <Button disableElevation variant="contained" color="secondary">
                    18.7
            </Button>
                <StyledButton
                    variant="contained"
                    className={classes.buy}
                    startIcon={<SendIcon className={classes.icon} />}
                >
                    <div className={classes.alignLeft}>
                        <div>9562.47</div>
                        <div>Buy</div>
                    </div>
                </StyledButton>
            </div>
            <div className={classes.filterContainer}>
                <StyledFilter variant="outlined" label="1.25" size="small"></StyledFilter>
                <StyledFilter variant="outlined" label="MKT" size="small"></StyledFilter>
                <StyledFilter variant="outlined" label="Slippage" size="small"></StyledFilter>
            </div>
        </div>
    )
}

export default MiddleCardContent
