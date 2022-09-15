const Note = require('../../db/models/note');

//status 204 tells that everything was executed but there is no content returned
//status 204 does not export any value so even if we pass some data to the response it will be ignored
//status 422 - wrong data send by request

class NoteActions {
    async getNote(req, res) {
        const id = req.params.id;
        let note;
        try {
            note = await Note.findOne({ _id: id });  
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
        
        if (!note) {
            res.status(204).send();
            //'Note with id: ' + id + ' not found.'
        } else {
            res.status(200).json(note);
        }

    }
    async getAllNotes(req, res) {
        let doc;
        try {
            doc = await Note.find({});
        } catch (err) {
            return res.status(500).json({ message: err.message });
            // in catch block we need to add return in order to avoid
            // executing next lines of code
        }
        res.status(200).json(doc);
    }
    async saveNote(req, res) {
        const title = req.body.title,
            body = req.body.body;
        const newNote = new Note({ title, body });//shorter syntax of object where property has the same name like value
        try {
            await newNote.save();
        } catch (err) {
            return res.status(422).json({ message: err.message });
        }
        res.status(201).json(newNote);

    }
    async updateNote(req, res) {
        const id = req.params.id,
            title = req.body.title,
            body = req.body.body;
            let doc;

        try {
            doc = await Note.updateOne({ _id: id, title, body });
            const updatedNote = await Note.findOne({ _id: id });
        } catch (err) {
            return res.status(500).json({ error: err.message, doc: doc });
        }
        res.status(201).json(updatedNote);
    }
    async deleteNote(req, res) {
        const id = req.params.id;
        let doc;
        try {
            doc = await Note.deleteOne({ _id: id });
        } catch (err) {
            return res.status(500).json({
                error: err.message,
                doc: doc
            });
        }

        res.status(204).send();
        //'Note ' + id + ' deleted successfully.'
    }
};

module.exports = new NoteActions();