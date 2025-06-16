const express = require('express')
const helmet  = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongooes = require('mongoose')

const authRouter = require('./routers/authRouter')

const app = express()
app.use(cors())
app.use(helmet())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongooes.connect(process.env.MONGO_URI).then(() => {
    console.log("mongoose db connected");
}).catch(err => {
    console.log(err);
})

app.use('/api/auth',authRouter)

app.listen(process.env.PORT, () => {
    console.log("Listening");
})