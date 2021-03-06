const express = require('express');
const router = express.Router();
const messages = require('../models/messages');

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
