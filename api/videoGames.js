const express = require('express');
const router = express.Router();

const REPLACE_ME = ('REPLACE ME')
const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

    
// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (err) {
        next(err);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(REPLACE_ME);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.post('/api/video-games', async (req, res, next) => {
    res.send('Created video game')
    
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/api/video-games/:id', async (req, res, next) => {
    res.send('Updated video game')
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    res.send('Deleted video game')
    
});

module.exports = router;
