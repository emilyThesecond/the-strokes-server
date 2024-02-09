const express = require('express');
const router = express.Router();

const setsCtrl = require('../controllers/sets')


router.post("/shows/:id/add-set", setsCtrl.create)

// router.delete("/", setListsCtrl.update)

module.exports = router