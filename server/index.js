const express = require('express')

const app = express()

const service =require('./service')

const cors = require('cors')

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json())

app.listen(5000, () => {
    console.log("Server started at 5000");
})


app.post('/Add',(req,res)=>{
    service.add(req.body.id,req.body.title,req.body.body)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.post('/Edit/:id',(req,res)=>{
    service.edit(req.params.id,req.body.title,req.body.body)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.get('/View',(req,res)=>{
    service.viewAll(req.body)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})
app.get('/view/:id',(req,res)=>{
    service.view(req.params.id)
    .then(result => {
        res.status(result.statusCode).json(result)
    })
})

app.delete('/Delete/:id',(req,res)=>{
    service.deleteNote(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})