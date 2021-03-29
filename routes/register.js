const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { genPassword } = require('../utils/password');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  try {
    if (
      req.body.password === undefined ||
      req.body.password === '' ||
      /^\s+$/.test(req.body.password)
    ) {
      res.render('register', { password: 'Password must not be empty' });
    }
    const saltHash = genPassword(req.body.password);
    const { salt, hash } = saltHash;
    const testUser = await User.findOne({ username: req.body.username }).lean();

    if (testUser) {
      return res.render('register', { already: 'Username taken!' });
    }

    const newUser = new User({
      username: req.body.username,
      salt,
      hash,
    });

    await newUser.save();

    res.redirect('/login');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
