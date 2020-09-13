import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  AreaSeries,
} from '@devexpress/dx-react-chart-material-ui';

import { ArgumentScale, Animation } from '@devexpress/dx-react-chart';
import { scalePoint } from 'd3-scale';
import { withStyles } from '@material-ui/core/styles';

const data = [
  { year: 'feb', ios: 465 },
  { year: 'mrc', ios: 905 },
  { year: 'apr', ios: 356 },
  { year: 'asd', ios: 346 },
  { year: 'gjt', ios: 200 },
  { year: 'rhj', ios: 344 },
];



const chartRootStyles = (theme) => ({
  chart: {
    padding: '10px',
    maxHeight: 120,
    backgroundColor: theme.palette.secondary.main,
    
  }
})


const ChartRootBase = ({ classes, ...restProps }) => (
  <Chart.Root {...restProps} className={classes.chart} />
);

const ChartRoot = withStyles(chartRootStyles, { name: 'ChartRoot' })(ChartRootBase);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
          rootComponent={ChartRoot}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />


          <AreaSeries
            name="iOS"
            valueField="ios"
            argumentField="year"
          />
          <Animation />


        </Chart>
      </Paper>
    );
  }
}
