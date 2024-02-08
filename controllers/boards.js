const express = require('express')
const { Board }	= require('../models')

const index = async(req,res,next)	=> {
	try{
		res.json(await Board.find({}))

	} catch (error) {
		res.status(400).json(error)

	}
}
const create = async(req,res,next)	=> {
	try{
		res.json(await Board.create(req.body))

	} catch (error) {
		res.status(400).json(error)

	}
}
const show = async(req,res,next)	=> {
	try{
		res.json(await Board.findById(req.params.id))

	} catch (error) {
		res.status(400).json(error)

	}
}

module.exports = {
	index,
	create,
	show
}
