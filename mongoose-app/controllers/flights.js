const Flight = require('../models/flight.js');

module.exports = {
    new: newFlight,
    index, 
    create,
    delete: deleteFlight,
    update
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''})
}

async function index (req, res){
    const allFlights = await Flight.find();

    res.render('flights/index',{
      flights: allFlights
    });
}

async function create(req, res) {
    try{
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message})
    }
}

async function deleteFlight(req, res) {
    try {
      await Flight.findByIdAndRemove(req.params.id);
      res.redirect('/flights');
    }  catch (err) {
      res.render('/flights', { errorMsg: err.message });
    }
}

async function update(req, res) {
    try {
      await Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
      res.redirect(`/flights/${req.params.id}`);
    }  catch (err) {
      res.render(`/flights/${req.params.id}/edit`, { errorMsg: err.message });
    }
}

