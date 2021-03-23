const mockAPIResponse = require('./mockAPI.js')
const PORT = 8081
const axios = require("axios")
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);
const MEAN_CLOUD_API_KEY = process.env.API_KEY
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

var express = require('express')
const app = express()

const cors = require('cors');
app.use(cors())
var bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(express.static('dist'))

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
})
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.post('/add-url', async (req, res) => {
    try {
   
    const url = req.body.url;
   
    apiURL = BASE_API_URL;
    apiKey = process.env.API_KEY;
    const apiResponse = await axios.get(
      `${apiURL}?key=${apiKey}&url=${url}&lang=en`
    );

    const { agreement, subjectivity, confidence, irony,score_tag } = apiResponse.data;
    res.send({
      agreement,
      subjectivity,
      confidence,
      irony,
      score_tag,

    });
 
    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports={app}