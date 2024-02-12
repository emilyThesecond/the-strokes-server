const express = require('express')
const Show	= require('../models/Show')


const create = async(req,res,next)	=> {
	const show = await Show.findById(req.params.id)
	show.set.push(req.body)
	try {
	  await show.save()
	} catch (err) {
	  console.log(err)
	}
	res.redirect(`/shows/${show._id}`)
  }

module.exports = {
	create,
}