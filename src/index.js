const express = require('express');
const app = express();

// Manages directories independly of the os
const path = require('path');

// setings
// Saves port variable inside app
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares

// routes
app.use(require('./routes/')); // provide to the app the routes.
// static files

// The server is listening
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
});

