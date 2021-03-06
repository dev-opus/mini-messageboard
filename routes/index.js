const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
