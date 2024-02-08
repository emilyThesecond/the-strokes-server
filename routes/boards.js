const express = require('express')
const router = express.Router()

const boardsCtrl = require('../controllers/boards')

// STOKES INDEX ROUTE
router.get("/", boardsCtrl.index)

// STROKES CREATE ROUTE
router.post("/", boardsCtrl.create)

// STROKES SHOW ROUTE
router.get("/:id", boardsCtrl.show)

// // STROKES DELETE ROUTE
// router.delete("/:id", boardCtrl.);

// // STROKES UPDATE ROUTE
// router.put("/:id", (req, res) => {
// 	console.log(req.body)
// 	res.status(200).json({message: "strokes update route: " + req.params.id })
// });

module.exports = router