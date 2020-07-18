const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    director: {
        type: String,
        required: true,
        trim: true
    }
},{
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie