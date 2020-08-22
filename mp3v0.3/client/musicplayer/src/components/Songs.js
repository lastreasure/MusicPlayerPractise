import React, { Component } from 'react'
// connects component to redux store - provided by provider component in App.js
import { connect } from 'react-redux'; 
// retrieve action from mpActions
import { getSongs } from '../actions/mpActions'

class Songs extends Component {
    componentDidMount() {
        this.props.getSongs();
    }

    render() {

        const songItems = this.props.songs.map( song => (
            <div key={song._id}>
                <h3> {song.title} </h3>
                <p>{song.artist}</p>
            </div>
        ));
        return (
            <div>
                <h1>Songs</h1>
                { songItems }
            </div>
        )
    }
}

// Retrieve state from redux and map to properties to the component to use inside the component
const mapStateToProps = state => ({
    songs: state.songs.allSongs
})

export default connect(mapStateToProps, {getSongs})(Songs);