const express = require('express')
const { Board } = require('../models')

const deletePost = async (req,res,next) => {
    try {
        const board = await Board.findById(req.params.boardId)
        if (!board) {
            return res.status(404).json({ message: "Board not found" })
        }
        const post = board.post.id(req.params.postId)
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

const create = async (req, res, next) => {
    try {
        const board = await Board.findById(req.params.boardId)
        if (!board) {
            return res.status(404).json({ message: "Board not found" })
        }
        const newPost = { entry: req.body.entry }
        board.post.push(newPost)
        await board.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json(error)
    }
}
module.exports = {
    create,
    delete: deletePost
};