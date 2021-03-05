const { urlencoded } = require('express');
const express = require('express');
const app = express();
const path = require('path');

const exphbs = require('express-handlebars');
const port = process.env.PORT || 8080;

// set-up body-parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// set-up template-engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

// router level middleware
app.use('/', require('./routes/index'));

// fire up the server!
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
