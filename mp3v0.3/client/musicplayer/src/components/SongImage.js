import React, { Component } from 'react'

class SongImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            song: [],
            image: ''
            
        }
    }

    componentDidMount() {
        const songId= "5f3f83fbaf74801987a8a8c1";
        fetch(`http://localhost:5000/songs/${songId}`)
        .then(res => res.json())
        .then(data => this.setState({ song: data}))
    }


    render() {
        // const songPic = this.state.song.map( song => (
        //     song.imageSource
        // ));     
        
        this.state.image = this.state.song.map( song => (
            song.imageSource
        ));  
        console.log(this.state.image);
        // let url = `../assets/songImage/${songPic}`
        // console.log("this is url " + url)
        const image = this.state.image;
        return (
            <div>
                <h1>SongImage</h1>
                <img src={require(`../assets/songImage/Dont_Worry_Be_Happy.jpg`)}></img>
                {/* <img src={require(image)}></img> */}
            </div>
        )
    }
}

export default SongImage;