const express = require('express');
const router = express.Router();

const setsCtrl = require('../controllers/sets')


router.post("/shows/:id/add-set", setsCtrl.create)

router.delete('/sets/:id', setsCtrl.delete)

// router.delete("/", setListsCtrl.update)

module.exports = router