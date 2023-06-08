const units  = require("./Model/units");
const figures = require("./Model/figures");
let express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const path = require('path')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/src/index.html')))


const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Listening on port " + port)
})

app.get('/units', (req, res) => {
  res.json(units);
});

app.get('/figures', (req, res) => {
  res.json(figures);
});



  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });