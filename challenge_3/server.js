const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const port = 3000;
const db = require('./database/index.js')



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/ccinfo', function(req,res) {
  db.update(req.body);
})


app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});
