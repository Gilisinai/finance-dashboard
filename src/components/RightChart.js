import { TramRounded } from '@material-ui/icons';
import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
} from 'recharts';

const data = [
  {
    name: '15:15', uv: 2600,
  },
  {
    name: '15:20', uv: 2900,
  },
  {
    name: '15:25', uv: 4500,
  },
  {
    name: '15:30', uv: 4900,
  },
  {
    name: '15:35', uv: 5100,
  },
  {
    name: '15:40', uv: 5000,
  },
  {
    name: '15:45', uv: 5700,
  },
  {
    name: '15:50', uv: 5000,
  },
  {
    name: '16:00', uv: 3000,
  },
  {
    name: '16:15', uv: 4900,
  },

];

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          <span style={{ color: '#007AFF' }}>{`$${payload[0].value} `}</span>
          <span>{`${label}`}</span>
        </p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  render() {
    return (
      <div style={{ width: '100%', height: 115 }}>

        <ResponsiveContainer>
          <AreaChart
            // width={240}
            // height={125}
            data={data}
            margin={{
              top: 10, right: 10, left: -20, bottom: 0,
            }}

          >
            <defs>

              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="50%" stopColor="#0C5FB8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="rgba(37, 44, 53, 0)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#808080" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} tickLine={TramRounded} />
            <YAxis tick={{ fontSize: 10 }} tickCount={10} domain={['dataMin', 'dataMax']} />
            <Tooltip cursor={{ stroke: 'none', }} content={<CustomTooltip />} />
            
            <Area type="monotone" dataKey="uv" stroke="#0C5FB8" fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}