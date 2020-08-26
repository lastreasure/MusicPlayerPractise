import React from 'react';
import { connect } from 'react-redux'; 

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

const SongTable = (allSongs = [], currentSong) => {
    const classes = useStyles();

    console.log(allSongs)

    // allSongs.map(song => {
    //     return <pre>{JSON.stringify(song)}</pre>
    // })

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
            {allSongs.allSongs.map((song) => (
                <TableRow key={song._id}>
                <TableCell component="th" scope="row">
                    {song.title}
                </TableCell>
                <TableCell align="left">{song.artist}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    currentSong: state.currentSong,
    allSongs: state.allSongs

})

export default connect(mapStateToProps)(SongTable);
