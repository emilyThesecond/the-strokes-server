const express = require('express');
const router = express.Router();

const postsCtrl = require('../controllers/posts')



// POSTS CREATE ROUTE
router.post("/boards/:id/posts", postsCtrl.create)

// POSTS delete ROUTE
router.delete("/posts/:id", postsCtrl.delete)

module.exports = router