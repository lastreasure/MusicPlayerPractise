import React, { Component } from 'react'

class Songs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000/songs')
        .then(res => res.json())
        .then(data => this.setState({ songs: data }))
    }

    render() {
        const songItems = this.state.songs.map( song => (
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

export default Songs;