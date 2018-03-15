const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote',  (req, res) => {
	fs.readFile('./test.json', 'utf8', (err, data) => {
		if (err) throw err;
		stringifyFile = data;
		res.send(data);
	});
});

app.post('/updateNote/:note', (req, res) => {
	fs.writeFile('./test.json', stringifyFile + ' ' + req.params.note, (err) => {
		if (err) throw err;
		console.log('file updated');
	});
})

app.listen(3000);
