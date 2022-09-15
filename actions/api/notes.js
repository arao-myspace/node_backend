const Note = require('../../db/models/note');

class NoteActions {
    // saveNote (req, res) {
    //     const newNote = new Note({
    //         title: 'Zrobić zakupy',
    //         body: 'mleko, piwo, wódka'
    //     });
    //     newNote.save().then(() => {
    //         res.send('1 Note saved successfuly.'); 
    //     });
    getNote(req, res) {
        const id = req.params.id;
        // const newNote = new Note({
        //     title: 'Zrobić zakupy',
        //     body: 'mleko, piwo, wódka'
        // });
        // newNote.().then(() => {
        res.send('Note ' + id + ' fetched successfuly.');
        // });

    }
    getAllNotes(req, res) {
        res.send('Notes fetched successfully.');
    }
    saveNote(req, res) {
        const title = req.body.title,
         body = req.body.body;

        res.send('Note saved successfully. Title: ' + title + ', Body: ' + body);
    }
    updateNote(req, res) {
        const id = req.params.id;
        res.send('Note ' + id + ' updated successfully.');
    }
    deleteNote(req, res) {
        const id = req.params.id;
        res.send('Note ' + id + ' deleted successfully.');
    }
};

module.exports = new NoteActions();