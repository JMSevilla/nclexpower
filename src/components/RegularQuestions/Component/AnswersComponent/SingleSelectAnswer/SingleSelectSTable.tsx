import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Checkbox } from '@/components/Checkbox/Checkbox';



interface Props {
    data: [
        {
            answers: []
            columns: []
        }
    ],



}

export const SingleSelectSTable: React.FC<Props> = ({ data }) => {
    // console.log("data : ", data)
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {data && data.map((col) =>
                            col.columns.map((header, headerIndex) => (
                                <TableCell className='w-6 leading-4' key={headerIndex}>{header}</TableCell>
                            ))
                        )}

                    </TableRow>
                </TableHead>
                <TableBody >
                    {data && data.map((row, rowIndex) =>
                        row.answers.map((rowCell, indexCell) => (
                            <TableRow key={indexCell}>
                                <TableCell className='w-10 h-10 leading-4 ' >{rowCell.AF}</TableCell>
                                <TableCell className='w-10 h-10 leading-4 '><Checkbox /></TableCell>
                                <TableCell className='w-10 h-10 leading-4 '><Checkbox /></TableCell>
                                <TableCell className='w-10 h-10 leading-4 '><Checkbox /></TableCell>

                            </TableRow>
                        ))


                    )}
                </TableBody>
                {/* <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>

                            </TableRow> */}
            </Table>
        </TableContainer>
    )
}

export default SingleSelectSTable
