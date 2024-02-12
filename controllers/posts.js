const express = require('express')
const  Board  = require('../models/Board')


const deletePost = async (req,res,next) => {
    try {
        const board = await Board.findById(req.params.boardId)
        if (!board) {
            return res.status(404).json({ message: "Board not found" })
        }
        const post = board.posts.id(req.params.postId)
        if (!post) {
            return res.status(404).json({ message: "Post not found" })
        }
        post.remove()
        await board.save()
        res.status(204).end() // No content to send
    } catch (error) {
        res.status(400).json(error)
    }
}


async function create(req, res) {
    const board = await Board.findById(req.params.id)
    board.posts.push(req.body);
    try {
      await board.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/boards/${board._id}`);
  }
  
module.exports = {
    create,
    delete: deletePost
};