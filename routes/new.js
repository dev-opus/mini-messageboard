const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('form');
  } else {
    res.render('login', {
      login: 'You must be logged in to view/create resources',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    if (req.isAuthenticated()) {
      const message = new Message({
        text: req.body.text,
        user: req.user._id,
      });
      await message.save();
      res.redirect('/index');
    }
  } catch (error) {}
});

module.exports = router;
