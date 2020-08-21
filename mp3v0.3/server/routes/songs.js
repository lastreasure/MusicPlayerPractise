const express = require('express');
const router = express.Router();
const Songs = require('../models/song');
const Platlist = require('../models/playlist');

// GET req - get all songs
// router.get('/songs', songsController.getSongs);
router.get('/songs', async (req,res) => {
    try {
        const allSongs = await Songs.find();
        res.json(allSongs);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})

router.post('/songs', async (req,res) => {
    const newSong = new Songs({
        title: req.body.title,
        artist: req.body.artist,
        songSource: req.body.songSource,
        imageSource: req.body.imageSource
    })
    console.log(req.body);
    try {
        const newSongs = await newSong.save();
        res.status(201).json(newSongs);
    } catch (err) {
        res.status(400).json({message: err.message}); // Client error
    }
})

module.exports = router;