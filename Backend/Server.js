const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require('cors')
const Router = require('./Routes/technologyRouter')
const Port = 5002

const app = express()

app.use(express.json())

app.use(cors())


mongoose.connect(process.env.MONGO_URI)
           .then(()=>{
            app.listen(Port,()=>{
                console.log(`Port is Listening on ${Port}...`)
            })
           }).catch((e)=>{
             console.log(e)
           })


app.use('/api/technologies',Router)
