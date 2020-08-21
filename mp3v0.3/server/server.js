require('dotenv').config() //establishing env variables 

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const songsRouter = require('./routes/songs');
const playlistsRouter = require('./routes/playlists');


// Create db connection 
// Passing mongdb connection string 
// Passing properties to prevent mongoose warnings
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to MongoDB'));


app.use(express.json());
app.use(songsRouter);
app.use(playlistsRouter);


app.listen(5000, () => console.log('Server started'));

