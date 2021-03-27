// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));

app.get('/', function (req, res) {
res.render('index.html');
res.end();
})

app.post('/upload_json', (req, res) => {
let data = req.body.json.split(',');
let parsedData = JSON.parse(data);
console.log(typeof (parsedData));
res.send(parsedData.children);
res.end();
});


app.listen(port, () => {
  console.log(`Sever listening at http://localhost:${port}`);
});
