const express = require('express')
const router = express.Router()

const boardsCtrl = require('../controllers/boards')

router.get("/", boardsCtrl.index)

router.post("/", boardsCtrl.create)

router.get("/:id", boardsCtrl.show)



module.exports = router