const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Welcome to my Express.js server!');
});

app.get('/about', (req, res) => {
    res.send('This is a place where I can add about information');
});

app.get('/greet', (req, res) => {
    // Extract the "name" query parameter from the request
    const { name } = req.query;

    // Check if the "name" parameter is provided
    if (name) {
        // Respond with a greeting message including the provided name
        res.send(`Hello, ${name}!`);
    } else {
        // If "name" parameter is not provided, respond with a generic message
        res.send('Hello, stranger!');
    }
});
