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
        ));  // use set state?..
        
        console.log(this.state.image);

        return (
            <div>
                <img src={process.env.PUBLIC_URL + `/${this.state.image}`}></img>
            </div>
        )
    }
}

export default SongImage;







// import React, { useState, Component } from 'react'

// class SongImage extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             song: [],
//             image: ''
            
//         }
//     }

//     componentDidMount() {
//         const songId= "5f3f83fbaf74801987a8a8c1";
//         fetch(`http://localhost:5000/songs/${songId}`)
//         .then(res => res.json())
//         .then(data => this.setState({ song: data}))
//     }


//     render() {
//         // const songPic = this.state.song.map( song => (
//         //     song.imageSource
//         // ));     
        
//         this.state.image = this.state.song.map( song => (
//             song.imageSource
//         ));  // use set state...
        
//         console.log(this.state.image);

//         const image = this.state.image;
//         return (
//             <div>
//                 <img src={process.env.PUBLIC_URL + `/${this.state.image}`}></img>
//             </div>
//         )
//     }
// }

// export default SongImage;