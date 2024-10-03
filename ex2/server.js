const express = require ('express');
const app = express ();
const port = 3000;


app.get ('/', (req, res) => {
    res.send ('Bem vindo página home')
});

app.get ('/sobre', (req, res) => {
    res.send ('Essa página é sobre a página sobre sobre o sobre')
});

app.get ('/contato', (req, res) => {
    res.send ('+55 42 999536969 telefone @paulo.pcgo')
});

app.listen (port, () => {
    console.log (`Server listening at
        http://localhost:${port}`)
});