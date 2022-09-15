const express = require('express');
const router = express.Router();

const noteActions = require('../actions/api/notes');

// get notes
router.get('/notes', noteActions.getAllNotes);
// get note
router.get('/notes/:id', noteActions.getNote);
// save note
router.post('/notes', noteActions.saveNote);
// update note 
router.put('/notes/:id', noteActions.updateNote);
// delete note
router.delete('/notes/:id', noteActions.deleteNote);

module.exports = router;