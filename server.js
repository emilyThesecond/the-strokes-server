require('dotenv').config()

require('./config/db.connection')

const { PORT } = process.env
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const boardsRouter = require('./routes/boards')
const postsRouter = require('./routes/posts')
const setsRouter = require('./routes/sets')
const showsRouter = require('./routes/shows')
const venuesRouter = require('./routes/venues')
const songsRouter = require('./routes/songs')


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
app.use(morgan("dev"))


app.use('/boards', boardsRouter)
app.use('/', postsRouter)
app.use('/', setsRouter)
app.use('/shows', showsRouter)
app.use('/', venuesRouter)
app.use('/songs', songsRouter)


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))