const db = require('./db')



const add = (id, title, body) => {

    return db.Note.findOne({
        id
    }).then(note => {
        console.log(note);
        if (note) {
            return {
                status: false,
                message: "Already Existing Note",
                statusCode: 401
            }
        }
        else {
            const newNote = new db.Note({
                id,
                title,
                body
            })
            newNote.save()
            return {
                status: true,
                message: "New Note Added Successfully",
                statusCode: 200
            }
        }
    })
}

const edit = (id, title, body) => {

    return db.Note.findOne({
        id
    })
        .then(note => {

            if (note) {
                note.title = title
                note.body = body
                note.save()
                console.log(note);
                return {
                    status: true,
                    statusCode: 200,
                    message: "Note Edited"
                }
            } else {
                return {
                    status: true,
                    statusCode: 400,
                    message: "Error occured"
                }
            }
        })
}

const viewAll = () => {
    return db.Note.find()
    .then(note => {
        if (note) {
            return {
                status: true,
                statusCode: 200,
                note: note
            }
        } else {
            return {
                status: false,
                message: "Error occured",
                statusCode: 402
            }
        }
    })
}
const view = (id) => {
    return db.Note.findOne({
        id
    }).then(note => {
        if (note) {
            return {
                status: true,
                statusCode: 200,
                note: note
            }
        } else {
            return {
                status: false,
                message: "Error occured",
                statusCode: 402
            }
        }
    })
}

const deleteNote = (id) => {
    return db.Note.deleteOne({
        id
    }).then(note => {
        if (note) {
            return {
                status: true,
                message: "Note deleted",
                statusCode: 200
            }
        }
        else {
            return {
                status: false,
                message: "Error occured",
                statusCode: 402
            }
        }
    })
}

module.exports = {
    add, edit, view, deleteNote, viewAll
}