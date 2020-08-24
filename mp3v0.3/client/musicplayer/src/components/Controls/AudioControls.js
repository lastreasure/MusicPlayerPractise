import React, { Component } from 'react'
import { connect } from 'react-redux'; 
// retrieve action from slices
import { TOGGLE_PLAY } from '../../store/slices'


const AudioControls = ({togglePlay, play}) => {
    return (
        <div>
            <button onClick={()=> togglePlay()}> {play ?'Play' : 'Pause'}</button>
        </div>
    )
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    play: state.isPlaying
})

// making slice function to properties
const mapDispatchToProps = {
    togglePlay: TOGGLE_PLAY
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);

