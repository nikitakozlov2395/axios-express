const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const jsonParser = bodyParser.json();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
});

app.post('/hello', jsonParser, (req, res) => {
	if (!req.body) return res.sendStatus(400);
  	console.log(req.body); 
    res.send(`Hello ${req.body.name}, you are ${req.body.age} old!`); 
});

app.listen(3000, () => console.log('Server is open'));
