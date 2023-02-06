
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://newuser:newuser@cluster0.vtyvwii.mongodb.net/?retryWrites=true&w=majority',   
{ useNewUrlParser: true, useUnifiedTopology: true })


//model definition
const Note = new mongoose.model('Note', {
    id: String ,
    title:String ,
    body: String
})

module.exports = {
    Note
}

//  mongodb://localhost:27017/crud