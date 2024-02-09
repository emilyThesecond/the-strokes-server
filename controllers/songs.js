const express = require('express')
const { Song }	= require('../models')

const index = async(req,res,next)	=> {
	try{
		res.json(await Song.find({}))

	} catch (error) {
		res.status(400).json(error)

	}
}
const create = async(req,res,next)	=> {
	try{
		res.json(await Song.create(req.body))

	} catch (error) {
		res.status(400).json(error)

	}
}
const show = async(req,res,next)	=> {
	try{
		res.json(await Song.findById(req.params.id))

	} catch (error) {
		res.status(400).json(error)

	}
}

module.exports = {
	create,
	show,
    index
}