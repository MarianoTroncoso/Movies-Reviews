const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')

const moviesRouter = require('./routes/moviesRouter')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// mongo
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

// middlewares
app.use(cors());
app.use(express.json()); // (bodyparser)
app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/movies', moviesRouter)

app.listen( port, () => {
    console.log(`Server is running on port: ${port}`);
})