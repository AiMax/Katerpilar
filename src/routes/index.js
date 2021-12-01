const express = require("express");
const router = express.Router() // Give us the option to manage all the routes

router.get('/', (req, res) => {
    // We use te path to merge the dirname an the direction and transform it 
    res.render('index', {title: 'First Website'});
});

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'});
});


module.exports = router;