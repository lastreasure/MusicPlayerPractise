import React, { Component } from 'react'

class Songs extends Component {

    componentDidMount() {
        fetch('https://localhost:5000/songs')
        .then(res => res.json())
        .then(songs => console.log(songs))
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Songs;