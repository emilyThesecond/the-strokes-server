const express = require('express')
const router = express.Router()

const showsCtrl = require('../controllers/shows')

router.get("/", showsCtrl.index)

router.post("/", showsCtrl.create)

router.get("/:id", showsCtrl.show)



module.exports = router