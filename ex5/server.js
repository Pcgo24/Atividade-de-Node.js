const express = require ('express');
const api = require ('./info.json');
const fs = require ('fs');
const path = require ('path');



const app = express ();
const port = 3000;


app.get ('/', (req, res) => {
    fs.readFile("index.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
});

app.get ('/api/data', (req, res) => {
    res.send (api)
});



app.listen (port, () => {
    console.log (`Server listening at
        http://localhost:${port}`)
});