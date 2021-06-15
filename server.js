const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodypaser = require('body-parser');
const path = require('path');


const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

// Log request
app.use(morgan('dev'));

// Parse request to body-parser
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs'); // By default takes the folder crud_node/views
//app.set('views', path.resolve(__dirname, "views/ejs")); /* If you want to change the default folder views use this line and change the path */

// Load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

// Load routes
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});