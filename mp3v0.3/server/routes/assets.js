const express = require('express');
const router = express.Router();
const path = require("path")

router.get('/songAsset/:asset', async (req,res) => {
    console.log("retrieving song asset")
    try{
        res.sendFile(path.resolve(`./public/${req.params.asset}`))

    } catch (err) {
        res.status(500).json({message: err.message}); // Server error
    }
})

module.exports = router;


