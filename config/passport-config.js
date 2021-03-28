const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { verifyPassword } = require('../utils/password');
const User = require('../models/User');

const verifyCb = async (username, password, done) => {
  try {
    const user = await User.findOne({ username }).lean();
    if (!user) {
      return done(null, false);
    }

    const { salt, hash } = user;
    const valid = verifyPassword(password, salt, hash);

    if (valid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    done(error);
  }
};

const strategy = new LocalStrategy(verifyCb);
passport.use(strategy);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findById(userId);
    return done(null, user);
  } catch (error) {
    done(error);
  }
});
