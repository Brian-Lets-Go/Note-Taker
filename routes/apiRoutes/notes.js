const router = require("express").Router();
const { notes } = require('../../db/db');
const { renderNotes, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let note = notes;
    res.json(note);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = renderNotes(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})

module.exports = router;