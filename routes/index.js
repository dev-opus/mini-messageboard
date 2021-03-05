const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Cash is no distraction as long as Passion is the glue',
    user: 'crunchy',
    added: new Date(),
  },
  {
    text: 'To live, is to suffer',
    user: 'hiatus_',
    added: new Date(),
  },
];

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

module.exports = router;
