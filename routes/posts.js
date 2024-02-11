const express = require('express');
const router = express.Router()
const middleware = require('../middleware')

const postsCtrl = require('../controllers/posts')



// POSTS CREATE ROUTE
router.post("/boards/:id/posts", 
middleware.stripToken, 
middleware.verifyToken,
postsCtrl.create)

router.delete("/posts/:id", 
middleware.stripToken, 
middleware.verifyToken,
postsCtrl.delete)

module.exports = router