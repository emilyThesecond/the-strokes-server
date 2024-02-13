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

//   const remove = async (req, res, next) => {
// 	const { id, itemId } = req.params; // Assuming itemId is passed as a route parameter
// 	try {
// 	  const show = await Show.findById(id);
// 	  show.set.pull(itemId); // Remove the item from the set array
// 	  await show.save();
// 	  res.redirect(`/shows/${show._id}`);
// 	} catch (err) {
// 	  console.error(err);
// 	  next(err); // Pass the error to the error handling middleware
// 	}
//   }
  
async function remove (req, res) {
	// Note the cool "dot" syntax to query on the property of a subdoc
	const show = await Show.findOne({ 'set._id': req.params.id});
	// Rogue user!
	if (!show) return res.redirect('/shows');
	// Remove the review using the remove method available on Mongoose arrays
	show.set.remove(req.params.id);
	// Save the updated movie doc
	await show.save();
	// Redirect back to the movie's show view
	res.redirect(`/shows/${show._id}`);
  }
  

module.exports = {
	create,
	delete: remove
	
}