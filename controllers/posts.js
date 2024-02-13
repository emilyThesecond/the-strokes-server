const express = require('express')
const  Board  = require('../models/Board')


const deletePost = async (req, res, next) => {
    const { boardId, postId } = req.params

    try {
        const board = await Board.findById(boardId)
        if (!board) {
            return res.status(404).json({ message: "Board not found." })
        }

        // Find the index of the post to be removed
        const postIndex = board.posts.findIndex(post => post._id.toString() === postId)

        // Check if the post was found
        if (postIndex === -1) {
            return res.status(404).json({ message: "Post not found." })
        }

        // Remove the post from the array
        board.posts.splice(postIndex, 1)
        await board.save();
        return res.status(204).end(); // Successfully deleted the post
    } catch (error) {
        console.error(error); // Log the error for server-side debugging
        return res.status(500).json({ message: "An error occurred while deleting the post." })
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

  const update = async (req, res) => {
    const { boardId, postId } = req.params;
    const { newEntry } = req.body;

    try {
        const board = await Board.findById(boardId);
        if (!board) {
            return res.status(404).json({ message: "Board not found." });
        }

        // Find the post to be updated
        const post = board.posts.id(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found." });
        }

        // Update the post
        post.entry = newEntry;

        await board.save();
        res.status(200).json({ message: "Post updated successfully." });
    } catch (error) {
        console.error(error); // Log the error for server-side debugging
        return res.status(500).json({ message: "An error occurred while updating the post." });
    }
}


module.exports = {
    create,
    delete: deletePost, 
    update
};