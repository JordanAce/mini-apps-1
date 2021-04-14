const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ccinfo')

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database Connection Error'));
db.once('open', function () {
  console.log('Database Connected')
})

