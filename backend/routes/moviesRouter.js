const express = require('express');
const router = express.Router();
const Movie = require('../models/movie')

router.route('/').get( (req, res ) => {
    Movie.find()
        .then( movies => res.json(movies))
        .catch( err => res.status(400).json('Error: ' + err ))
})


router.route('/').post( (req, res ) => {
    const newMovie = new Movie({
        name: 'Cars',
        director: 'Mariano'
    })
    newMovie.save()
        .then( movie => res.json('Movie added! ' + movie))
        .catch( err => res.status(400).json('Error: ' + err ))
})


module.exports = router;