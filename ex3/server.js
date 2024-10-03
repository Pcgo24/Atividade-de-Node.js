const express = require ('express');
const utils = require ('./utils');

const app = express ();
const port = 3000;


app.get ('/', (req, res) => {
    res.send ('Bem vindo página home')
});

app.get ('/sobre', (req, res) => {
    res.send ('Essa página é sobre a página sobre sobre o sobre')
});

app.get ('/numero', (req, res) => {
    const ranNumCont = utils.ranNum();
    res.send (`O número aleatório é : ${ranNumCont}`)
});

app.listen (port, () => {
    console.log (`Server listening at
        http://localhost:${port}`)
});