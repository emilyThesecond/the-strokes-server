const express = require('express')
const  Show 	= require('../models/Show')

const index = async(req,res,next)	=> {
	try{
		res.json(await Show.find({}))

	} catch (error) {
		res.status(400).json(error)

	}
}
const create = async(req,res,next)	=> {
	try{
		res.json(await Show.create(req.body))

	} catch (error) {
		res.status(400).json(error)

	}
}
const show = async(req,res,next)	=> {
	try{
		res.json(await Show.findById(req.params.id))

	} catch (error) {
		res.status(400).json(error)}
}

module.exports = {
	index,
	create,
	show
}
