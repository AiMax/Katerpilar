const express = require('express');
const app = express();

// Manages directories independly of the os
const path = require('path');

// setings
// Saves port variable inside app
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public'))); // All the files in this file will be public for the browser.

// middlewares

// routes
app.use(require('./routes/')); // provide to the app the routes.
// static files

// The server is listening
app.listen(process.env.PORT, () => {
    console.log(`Server on port: ${app.get('port')}`);
});

