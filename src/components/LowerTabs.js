import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LowerConsole from './LowerConsole';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
    },
    tabPanel: {
        padding: 2
    },
    appBar: {
        maxHeight:40
    },
    tab: {
        maxHeight: 10
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}  position="static">
                <Tabs className={classes.tabPanel} value={value} onChange={handleChange} >
                    <Tab className={classes.tab} label="Item One" {...a11yProps(0)} />
                    <Tab className={classes.tab} label="Item Two" {...a11yProps(1)} />
                    <Tab className={classes.tab} label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <LowerConsole />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <LowerConsole />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <LowerConsole />
            </TabPanel>
        </div>
    );
}