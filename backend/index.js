/*const units  = require("./Model/units");
const figures = require("./Model/figures");
const areaUnits = require("./Model/areaUnits");*/
let express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require('./db')
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

app.get('/api/units', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM units') 
    res.json(rows)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Interrnel Server Error'})
  }
  
});

app.get('/api/figures', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM figures') 
    res.json(rows)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Interrnel Server Error'})
  }
});

app.get('/api/areaunits', async(req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM areaunits') 
    res.json(rows)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: 'Interrnel Server Error'})
  }
});


  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });