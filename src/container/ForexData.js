import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';
import EachTableRow from '../components/EachTableRow';





export default function BasicTable() {
  const {data} = useSelector(state => state.mainPageData);

  return (
    <TableContainer>
      <Table sx={{px:1}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Last Close</TableCell>
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
          {data && data.map((eachCurrency) => (
            <EachTableRow data={eachCurrency} key={eachCurrency.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


