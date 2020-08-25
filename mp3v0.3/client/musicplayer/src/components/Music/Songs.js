import React from 'react'
// connects component to redux store - provided by provider component in App.js
import { connect } from 'react-redux'; 
// retrieve action from mpActions
// import { GET_SONGS } from '../../store/slices'

// const Songs = ({getSongs, songs}) => {


//     // getSongs()
//     console.log(songs)
//     // const songItems = songs.map( song => (
//     //     <div key={song._id}>
//     //         <h3> {song.title} </h3>
//     //         <p>{song.artist}</p>
//     //     </div>
//     // ));
//     // console.log(songs)

//     return (
//         <div>
//             <h1>yo</h1>
//             <button onClick={() => getSongs()}> songs</button>
//         </div>
//     )
// }

    // const Songs = ({getSongs, songs}) => {
    //     return function(dispatch) {
    //         console.log('getting songs')
    //         fetch('http://localhost:5000/songs')
    //         .then(res => res.json())
    //         .then(json => dispatch({type: "GET_SONGS", json}));
    //     }
    //     console.log(songs);
    // }
    


// Retrieve state from redux and map to properties to the component to use inside the component
// const mapStateToProps = state => ({
//     songs: state.allSongs
// })

// const mapDispatchToProps = {
//     getSongs: GET_SONGS
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Songs);
