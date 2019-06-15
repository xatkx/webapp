const Notes = require('../../modals/notes');

module.exports = {
    allNoteuser: async (req, res) => {
        notes = await Notes.find({}).sort({
            date: 'desc'
        })
        res.render('notes/allNoteuser', {
            notes
        })
    },
    addNote: async (req, res) => {
        res.render('notes/addNote')
    },
    addNotePost: async (req, res) => {
        let {
            title,
            task
        } = req.body;

        const newNote = new Notes({
            title,
            task
        })
        await newNote.save()
        req.flash('alert', {
            msg: 'tarea agregada correctamente',
            status: 'primary'
        })
        res.redirect('/notes')
    },
    editNote: async (req, res) => {
        let {
            id
        } = req.params;
        const note = await Notes.findOne({
            _id: id
        });
        res.render('notes/editNote', {
            note
        })

    },
    editNotePost: async (req, res) => {
        let {
            title,
            task
        } = req.body

        // validado

        //
        await Notes.findOneAndUpdate({
            _id: req.params.id
        }, {
            title,
            task
        })

        req.flash('alert', {
            msg: 'tarea editada correctamente',
            status: 'info'
        })
        res.redirect('/notes')
    },
    delNote: async (req, res) => {
        let {
            id
        } = req.params;

        await Notes.findOneAndDelete({
            _id: id
        })

        req.flash('alert', {
            msg: 'tarea eliminada',
            status: 'danger'
        })
        res.redirect('/notes')
    }
}