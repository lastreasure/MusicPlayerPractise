import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
    },
});

function createData(_id, title, artist) {
    return { _id, title, artist};
}

const rows = [
    createData('234321', 'Frozen yoghurt', "159"), 
    createData('23424', 'Ice cream sandwich', "22"),
];

function SongTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="left">Artist</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="left">{row.artist}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

export default SongTable;