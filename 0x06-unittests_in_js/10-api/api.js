const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
    const id = parseInt(req.params.id)
    if (!isNaN(id)) {
        res.send(`Payment methods for cart ${req.params.id}`);
    } else {
        res.status(404);
    }
});

app.get('/available_payments', (req, res) => {
    const payments = {
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    };
    res.send(payments);
});

app.post('/login', (req, res) => {
    const data = req.body;
    res.send(`Welcome ${data.userName}`);
});


app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
})

module.exports = app;