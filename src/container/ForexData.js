import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import ConnectionStatus from '../components/ConnectionStatus';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}





const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
const {data,connectionSuccess, connectionError} = useSelector(state => state.mainPageData);
const extractFromData = (name) => {
    if(data && data[name]){
        return data[name]
    }else{
        return name === "Currency" ? "currency name" : "Waiting"
    }
}
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">last close</TableCell>
            <TableCell align="right">Current</TableCell>
            <TableCell align="right">Ask</TableCell>
            <TableCell align="right">Bid</TableCell>
            <TableCell align="right">High</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">Change%</TableCell>
            <TableCell align="right">Spread</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{extractFromData("Currency")}</TableCell>
                <TableCell align="right">{extractFromData("last close")}</TableCell>
                <TableCell align="right">{extractFromData("Current")}</TableCell>
                <TableCell align="right">{extractFromData("Ask")}</TableCell>
                <TableCell align="right">{extractFromData("Bid")}</TableCell>
                <TableCell align="right">{extractFromData("High")}</TableCell>
                <TableCell align="right">{extractFromData("Change")}</TableCell>
                <TableCell align="right">{extractFromData("Change%")}</TableCell>
                <TableCell align="right">{extractFromData("Spread")}</TableCell>
                <TableCell align="right">{extractFromData("Volume")}</TableCell>
                <TableCell align="right">{extractFromData("Time")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


