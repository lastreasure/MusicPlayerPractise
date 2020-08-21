import React, { Component } from 'react'

class Songs extends Component {

    componentDidMount() {
        fetch('http://localhost:5000/songs', { headers: {
            'Access-Control-Allow-Origin':'*'
        }})
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Songs</h1>
            </div>
        )
    }
}

export default Songs;