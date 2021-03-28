// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": true}));
app.listen(port, () => {
  console.log(`Sever listening at http://localhost:${port}`);
});

app.get('/', function (req, res) {
res.render('index');
})
const convertToCSV = function (jsonData) {
  let csvString = '';
  let items = Object.keys(jsonData).splice(0, Object.keys(jsonData).length - 1);
  for (let i = 0; i < items.length; i++) {
    if (i === items.length - 1) {
      csvString += items[i] + '\n';
    } else {
      csvString += items[i] + ', ';
    }
  }

  let innerfunction = function(jsonData) {
    for (var key in jsonData) {
      if (key === 'sales') {
        csvString += jsonData[key] + '\n';
      } else if (key !== 'children') {
        csvString += jsonData[key] + ', ';
      } else if (jsonData.children) {
        for (let j = 0; j < jsonData.children.length; j++) {
          innerfunction(jsonData.children[j]);
        }
      }
    }
  }
  innerfunction(jsonData);
  return csvString;
}
app.post('/', (req, res) => {
  let data = convertToCSV(req.body);
  res.send(JSON.stringify(data));
  res.end();
});


