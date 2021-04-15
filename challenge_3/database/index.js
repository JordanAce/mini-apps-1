const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ccinfo')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection Error'));
db.once('open', function () {
  console.log('Database Connected')
})

const CCUser = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name : String,
  email: String,
  password: String,
  ln1 : String,
  ln2 : String,
  city: String,
  state: String,
  zip: String,
  phonenum: String,
  ccnum: String,
  expiration: String,
  CVV: String,
  billingzip: String
})

const NewCCUser = mongoose.model('ccinfo', CCUser);

let update = (data) => {
  console.log('DATABASE RECEIVING DATA', {data});
}

module.exports.update = update;
//module.exports.create = create;