import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Theme from './ui/Theme';
import CellContent from './CellContent';


const StyledTableCell = withStyles((theme) => ({
  head: {
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 10,
    '@media (max-width:1280px)': {
     fontSize: 7,
     paddingRight: 0
  }
  },
  body: {
    paddingLeft: 6,
    paddingTop: 2,
    paddingBottom: 2,
    '@media (max-width:1280px)': {
      fontSize: 8
  }
  },
  
}))(TableCell);

const useStyles = makeStyles((theme) => ({

  tabelRow: {
    maxHeight: 10
  },
  tableBody: {
    overflow: 'auto',
    maxHeight: 200,
    backgroundColor: Theme.palette.secondary.main,
    
  },
  tableHead: {
    backgroundColor: Theme.palette.primary.main
  }
}));


export default function TopTable({ data, id }) {
  const classes = useStyles();

  return (
    <TableContainer  component={Paper}>
      <Table stickyHeader className={classes.table} size="small">
        <TableHead >
          <TableRow>
            {Object.entries(data[0]).map((value, index) => (
              <StyledTableCell className={classes.tableHead} align="left" key={index} component="th" >
                {value[0].replace(/_/g, ' ').toUpperCase()}


              </StyledTableCell>
            ))}

          </TableRow>
        </TableHead>
      </Table>
      <div style={{ overflow: 'auto', maxHeight: `${id === 'middle-table' ? '200px' : '250px'}` }}>
      <Table>

        <TableBody className={classes.tableBody}>
          {data.map((row, index) => (

            <TableRow key={index} >

              {
                Object.entries(row).map((cell, index) => (
                  <StyledTableCell key={index} align="left" className={classes.tableRow}>

                    <CellContent content={cell[1]} id={id} />


                  </StyledTableCell>
                ))
              }



            </TableRow>
          ))}
        </TableBody>

      </Table>
      </div>
              
    </TableContainer >
  );
}