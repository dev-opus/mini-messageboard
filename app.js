require('dotenv/config');
const express = require('express');
const app = express();
const path = require('path');

const exphbs = require('express-handlebars');
const port = process.env.PORT || 8080;

const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

// set-up body-parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// set-up template-engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

// set up express-sessions and mongostore
const sessionStore = new MongoStore({
  mongoUrl: process.env.DB_STRING,
  dbName: 'accounts',
  collectionName: 'sessions',
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 72,
    },
  })
);

// load passport
require('./config/passport-config');
app.use(passport.initialize());
app.use(passport.session());

// router level middleware
app.use('/', require('./routes/homepage'));
app.use('/index', require('./routes/index'));
app.use('/new', require('./routes/new'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/logout', require('./routes/logout'));

// fire up the server!
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
