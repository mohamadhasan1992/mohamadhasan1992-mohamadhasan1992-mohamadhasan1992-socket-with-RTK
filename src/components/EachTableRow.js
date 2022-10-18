import TableRow from '@mui/material/TableRow';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import moment from 'moment/moment';






const EachTableRow = ({data}) => {


    const extractFromData = (eachCurrency,name) => {
        if(eachCurrency && eachCurrency[name]){
            if(name === "Time"){
                return moment(eachCurrency[name]).format('LTS'); 
            }
            return eachCurrency[name]
        }else{
            return name === "Currency" ? "currency name" : "Waiting"
        }
    }

    return(
        <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell key={`Currency-${data.id}`}>{extractFromData(data,"Currency")}</TableCell>
                <TableCell key={`last close-${data.id}`} align="right">{extractFromData(data,"last close")}</TableCell>
                <TableCell key={`Ask-${data.id}`} align="right">{extractFromData(data,"Ask")}</TableCell>
                <TableCell key={`Bid-${data.id}`} align="right">{extractFromData(data,"Bid")}</TableCell>
                <TableCell key={`High-${data.id}`} align="right">{extractFromData(data,"High")}</TableCell>
                <TableCell key={`Change-${data.id}`} align="right">{extractFromData(data,"Change")}</TableCell>
                <TableCell key={`Chg_per-${data.id}`} align="right">{extractFromData(data,"Chg_per")}</TableCell>
                <TableCell key={`Spread-${data.id}`} align="right">{extractFromData(data,"Spread")}</TableCell>
                <TableCell key={`Volume-${data.id}`} align="right">{extractFromData(data,"Volume")}</TableCell>
                <TableCell key={`Time-${data.id}`} align="right">{extractFromData(data,"Time")}</TableCell>
            </TableRow>
    )
}


export default React.memo(EachTableRow);