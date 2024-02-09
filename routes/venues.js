const express = require('express')
const router = express.Router()

const venuesCtrl = require('../controllers/venues')


router.post("/venues/new", venuesCtrl.create)
router.post("/shows/:id/venue", venuesCtrl.addToShow)




module.exports = router