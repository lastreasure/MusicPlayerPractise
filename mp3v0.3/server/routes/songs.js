const express = require('express');
const router = express.Router();
const Songs = require('../models/song');

// GET req - get all songs
router.get('/songs', async (req,res) => {
    try {
        const allSongs = await Songs.find();
        allSongs.forEach((song) => {
            song.imageSource = `https://localhost:5000/songImage/${song.imageSource}`
            song.songSource = `https://localhost:5000/songAudio/${song.songSource}`
        })

        console.log(allSongs)
        res.json(allSongs);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})

// GET req - get specific songs by id
router.get('/songs/:id', async (req,res) => {
    console.log(req.params.id);
    try {
        const singleSong = await Songs.find({_id: req.params.id});
        singleSong.map((song) => {
            song.imageSource = `https://localhost:5000/songImage/${song.imageSource}`
            song.songSource = `https://localhost:5000/songAudio/${song.songSource}`
        })
        
        console.log(singleSong)
        res.json(singleSong);
    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})


// post a song
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