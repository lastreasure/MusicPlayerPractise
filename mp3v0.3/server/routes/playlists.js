const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');
// const fetch = require("node-fetch");
const axios = require('axios');


// GET req - get all playlists
router.get('/playlists', async (req,res) => {
    try {
        const allPlaylists = await Playlist.find();

        res.json(allPlaylists);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})

// GET req - get specific playlist by id
router.get('/playlists/:id', async (req,res) => {
    try {
        const singlePlaylistArr = await Playlist.find({_id: req.params.id});
        const singlePlaylist = singlePlaylistArr[0];
        
        singlePlaylist.playlistSongId.forEach( async (id) => {
            console.log('this is the playlist id i hope: ' + id)
            await axios.get(`http://localhost:5000/songs/${id}`)
            .then(res => {
                singlePlaylist.playlistSongs.push(JSON.stringify(res.data))
                console.log("data obj " + res)
            })
            .catch(function(err) {
                console.log('fetch error' + err);
            })
        })

        console.log(singlePlaylist)
        res.json(singlePlaylist);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})


// Create a playlist
router.post('/playlists', async (req,res) => {
    const newPlaylist = new Playlist({
        playlistName: req.body.playlistName,
        playlistSongId: req.body.playlistSongId,
    })
    console.log(req.body);
    try {
        const addPlaylists = await newPlaylist.save();
        res.status(201).json(addPlaylists);
    } catch (err) {
        res.status(400).json({message: err.message}); // Client error
    }
})

module.exports = router;







        // allPlaylists.forEach((playlist) => {
        //     playlist.playlistSongId.forEach(async (id) => {
        //         console.log('this is the playlist id i hope: ' + id)
        //         await fetch(`http://localhost:5000/songs/${id}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             playlist.playlistSongs.push(data)
        //             console.log("this is data " + data)
        //         })
        //         .catch(function(err) {
        //             console.log('fetch error' + err);
        //         })
        //     })
        // })


// async function getSongs() {


//         allPlaylists.forEach( (playlist) => {
//                 playlist.playlistSongId.forEach(async (id) => {
//                 console.log('this is the playlist id i hope: ' + id)
//                 const song = await fetch(`https://localhost:5000/songs/${id}`)
//                 .then(res => res.json())
//                 .then(function(data) {
//                     song = data.json();
//                 })
//                 .catch(function(err) {
//                     console.log('fetch error' + err);
//                 })

//                 console.log(song)

//                 console.log("this is the song i hope: " + song)
//             })
//             console.log('this is the playlist ' + playlist)
//             console.log('from playlists id playlist: ' + playlist.playlistSongId)
//         })
// }



// allPlaylists.forEach((playlist) => {
//     playlist.playlistSongId.forEach((id) => {
//         console.log('this is the playlist id i hope: ' + id)
//         playlist.playlistSongs.push(`http://localhost:5000/songs/${id}`)
        
//     })
// console.log('this is the playlist ' + playlist)
// console.log('from playlists id playlist: ' + playlist.playlistSongId)
// })

