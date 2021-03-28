const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('index', { title: 'Mini Messageboard', messages });
  } else {
    res.render('login', {
      login: 'You must be logged in to view/create resources',
    });
  }
});

module.exports = router;
