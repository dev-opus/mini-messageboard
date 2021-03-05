const { urlencoded } = require('express');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT || 8080;

// set-up body-parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set-up template-engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

// fire up the server!
app.listen(port, () => {
  console.log(`App is running on port: ${port}`);
});
