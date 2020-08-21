const express = require('express');
const router = express.Router();
const Playlist = require('../models/playlist');

// GET req - get all playlists
router.get('/playlists', async (req,res) => {
    try {
        const allPlaylists = await Playlist.find();
        res.json(allPlaylists);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})

router.post('/playlists', async (req,res) => {
    const newPlaylist = new Playlist({
        playlistName: req.body.playlistName,
        playlistSongs: req.body.playlistSongs,
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