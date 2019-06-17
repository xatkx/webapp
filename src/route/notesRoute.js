const router = require('express-promise-router')()

const {
    allNoteuser,
    addNote, 
    addNotePost,
    editNote,
    editNotePost,
    delNote
} = require('./handler/notesHandler')
const {
    authenticated
} = require('../config/helper/autenticion')


router.route('/notes')
    .get(authenticated,allNoteuser)

router.route('/notes/add-note')
    .get(authenticated,addNote)
    .post(authenticated,addNotePost)

router.route('/notes/edit-note/:id')
    .get(authenticated,editNote)
    .post(authenticated,editNotePost)

router.route('/notes/del-note/:id')
    .get(authenticated,delNote)


module.exports = router;