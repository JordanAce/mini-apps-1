const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ccinfo')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection Error'));
db.once('open', function () {
  console.log('Database Connected')
})

const CCUser = new mongoose.Schema({

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
  return NewCCUser.findOneAndUpdate({name: data.name}, data, {upsert: true, new:true}).exec()
  .then((response) => {
    return response;
  })
  .catch((error) => {
    console.log('ERROR UPDATING DATABSE', error)
  })

}

module.exports.update = update;
//module.exports.create = create;