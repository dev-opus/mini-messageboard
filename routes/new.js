const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  const data = {
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  };

  messages.push(data);
  res.redirect('/');
});

module.exports = router;
