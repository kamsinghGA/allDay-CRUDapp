var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

// GET /flights
router.get('/', flightsCtrl.index);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete);

// GET /flights/:id/edit
router.get('/:id/edit', flightsCtrl.edit);

// GET /flights/:id
router.get('/:id', flightsCtrl.show)

// PUT /flights/:id
router.put('/:id', flightsCtrl.update);

module.exports = router;