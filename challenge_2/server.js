// eslint-disable-next-line no-undef
const express = require('express');
const app = express();
// eslint-disable-next-line no-undef
const path = require('path');
const port = 3000;


// eslint-disable-next-line no-undef
app.use(express.static('client'));



app.get('/', function (req, res) {
 res.send('TESTING')
 res.end();
})

app.post('/upload_json', (req, res) => {
  console.log(req);
  console.log(res);
});

app.listen(port, () => {
  console.log(`Sever listening at http://localhost:${port}`);
});
