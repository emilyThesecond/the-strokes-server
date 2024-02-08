require('dotenv').config()

require('./config/db.connection')

const { PORT } = process.env
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const boardsRouter = require('./routes/boards')
const postsRouter = require('./routes/posts')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.use('/boards', boardsRouter)
app.use('/posts', postsRouter)


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))