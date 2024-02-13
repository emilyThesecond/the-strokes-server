const express = require('express');
const router = express.Router()
const middleware = require('../middleware')

const postsCtrl = require('../controllers/posts')



router.post("/boards/:id/posts", 
middleware.stripToken, 
middleware.verifyToken,
postsCtrl.create)

router.delete("/boards/:boardId/posts/:postId", 
middleware.stripToken, 
middleware.verifyToken,
postsCtrl.delete)

router.put("/boards/:boardId/posts/:postId",
middleware.stripToken, 
middleware.verifyToken,
postsCtrl.update
)
module.exports = router