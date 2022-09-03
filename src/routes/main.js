const { index,about,contact,music } = require('../controllers/mainController');

const router = require('express').Router();

router
      .get('/', index)
      .get('/about',about)
      .get('/contact',contact)
      .get('/music',music)

module.exports = router;
