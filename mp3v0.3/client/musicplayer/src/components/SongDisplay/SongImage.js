import React from 'react'
import { connect } from 'react-redux'; 

const SongImage = ({currentSong={}}) => {

    // React.useEffect(() => {
    //     image.src=currentSong.imgSource
    // }, [currentSong])

    JSON.stringify(currentSong)
    const image = currentSong.imageSource
    console.log(image)

    return (
        <div>
            <image src={image}> </image>
        </div>
    )
}

// Retrieve state from redux and map to properties to the component to use inside the component
// mapping values in the state to the properties 
const mapStateToProps = state => ({
    currentSong: state.currentSong
})

export default connect(mapStateToProps)(SongImage);

