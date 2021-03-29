const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', async (req, res) => {
  if (req.isAuthenticated()) {
    const messages = await Message.find({}).populate('user').limit(15).lean();
    res.render('index', { title: 'Mini Messageboard', messages });
  } else {
    res.render('login', {
      login: 'You must be logged in to view/create resources',
    });
  }
});

module.exports = router;
