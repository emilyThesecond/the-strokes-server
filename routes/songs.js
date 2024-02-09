const express = require('express')
const router = express.Router()

const songsCtrl = require('../controllers/songs')

router.get("/", songsCtrl.index)

router.post("/", songsCtrl.create)

router.get("/:id", songsCtrl.show)



module.exports = router