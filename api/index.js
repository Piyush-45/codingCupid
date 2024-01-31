// piyushtyagidev==>email for mongo
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')

const nodemailer = require('nodemailer')

const app = express()

const port  = 3000;
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const jwt = require('jsonwebtoken')

mongoose.connect("mongodb+srv://piyushtyagidev:l0PbYS10tdbM56Xu@dating.gzjjl4k.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("mongo connected")
}).catch((err)=>{
    console.log("errro")
})


app.listen(port, ()=>{
    console.log("server connected")
})