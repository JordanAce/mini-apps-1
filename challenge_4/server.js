const express = require ('express');
let app = express();
const port = 3000;
const path = require ('path');


app.use(express.static(path.join(__dirname, ".", "public")))


app.listen(port, () => {
  console.log(`Server Listening on port ${port}`)
})


