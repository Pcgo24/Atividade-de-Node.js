const express = require ('express');

const app = express ();
const port = 3000;


app.get ('/', (req, res) => {
    res.send ('Bem vindo página home')
});

app.get ('/saudacoes/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send (`Olá ${nome}!`)
});

app.listen (port, () => {
    console.log (`Server listening at
        http://localhost:${port}`)
});