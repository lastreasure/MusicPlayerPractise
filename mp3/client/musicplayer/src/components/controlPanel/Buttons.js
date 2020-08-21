import React, { Component } from 'react'

const Buttons = (song) => {
    



    const playSound = audioFile => {
      audioFile.play();
    };
  

    return (
        <div>
            <button onClick={ () => playSound(likeAudio)} > 
            Play
            </button>
        </div>
    )
    
}

export default Buttons
