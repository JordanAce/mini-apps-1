const express = require('express');
let app = express();
const bodyParser = require('body-parser')
const port = 3000;
const db = require('./database/index.js')



app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post('/ccinfo', function(req,res) {
  return db.update(req.body)
  .then((response) =>
  {
    res.send(response);
  })
  .catch((error) => {
    console.log('ERROR POSTING TO DATABASE', error)
  })
})

app.get('/ccinfo', function (req, res) {
  return db.show(req.body)
  .then((response) => {
    console.log('RETRIEVING DATABASE', response)
    res.send(response);
  })
  .catch((error) =>{
    console.log('ERROR RETRIEVING DATABASE')
  })
})

app.listen(port, () => {
  console.log(`Now listening on port ${port}`)
});
