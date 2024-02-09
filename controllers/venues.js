const express = require('express')
const { Venue, Show }	= require('../models')

const create = async(req,res,next)	=> {
	try{
		res.json(await Venue.create(req.body))

	} catch (error) {
		res.status(400).json(error)

	}
}

async function addToShow(req, res) {
    const show = await Show.findById(req.params.id)

    show.venue.push(req.body.venueId)
    await show.save()
    // res.redirect(`/shows/${show._id}`)
  }

module.exports = {
	create,
	addToShow
}
