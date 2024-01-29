const express = require('express');
//  creates express app
const app = express();
const port = 3000;

//  starting a server
app.listen(port, () => {
    console.log(`My calculator is live at http://localhost:${port}`);
});

// base route
app.get('/', (req, res) => {
    res.send('This is a calculator');
});

//  add method
//  use 2 inputs
app.get('/add/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = Number(num1) + Number(num2);

    //  have confirmation
    res.send(`The total is ${result}`);
});

//  subtract method
app.get('/subtract/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = Number(num1) - Number(num2);

    //  have confirmation
    res.send(`The total is ${result}`);
});

//  multiply

app.get('/multiply/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = Number(num1) * Number(num2);

    //  have confirmation
    res.send(`The total is ${result}`);
});

//  divide
app.get('/divide/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    const result = Number(num1) / Number(num2);

    //  have confirmation
    res.send(`The quotient is ${result}`);
});
