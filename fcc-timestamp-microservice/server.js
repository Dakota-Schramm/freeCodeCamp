// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
const e = require('express');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// ADD OTHER ENDPOINTS HERE
// Endpoint for ?date
const timestampJson = (date) => {
  if (date.toString() !== 'Invalid Date') {
    return {
      unix: date.getTime(),
      utc: date.toUTCString()
    }
  } else {
    return {
      error: date.toString()
    }
  }
}

app.get("/api/", (req, res) => {
  res.json(timestampJson(new Date()));
})
app.get("/api/:date", (req, res) => {
  const queryDate = req.params.date
  console.log(queryDate);

  let date;
  // If date passed is Unix time
  if (queryDate.match(/^[0-9]+$/) != null) {
    date = new Date(Number(req.params.date));
    res.json(timestampJson(date))
  } else {
    date = new Date(queryDate);
    res.json(timestampJson(date));
  }
  console.log(date);
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
