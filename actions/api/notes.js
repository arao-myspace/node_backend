const Note = require('../../db/models/note');

module.exports = { 
    saveNote (req, res) {
        const newNote = new Note({
            title: 'Zrobić zakupy',
            body: 'mleko, piwo, wódka'
        });
        newNote.save().then(() => {
            res.send('1 Note saved successfuly.'); 
        });
      
}}