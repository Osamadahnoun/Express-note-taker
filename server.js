const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


const notes = require('./db/db.json');
// const indexHTML = require('./public/index.html');
// const notesHTML = require('./public/notes.html');

app.get('/api/notes', (req, res) => {
    res.json(notes)
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});