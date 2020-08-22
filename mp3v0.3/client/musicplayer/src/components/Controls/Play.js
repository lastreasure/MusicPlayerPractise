import React, { Component } from 'react'

class Play extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState(!this.state.playing)
        console.log(this.state.playing)
    }

    render() {
        
        return (
            <div>
                <button onChange={this.onChange} value={this.state.playing} >play</button>
            </div>
        )
    }
}

export default Play;