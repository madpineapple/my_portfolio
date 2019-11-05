const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

//set up app
const app = express();

//bodyParser
app.use(express.urlencoded({ extended: false }));
//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Routes
app.use ('/', require('./routes/index'));

const PORT= process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));