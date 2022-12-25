const responseHelper = require('express-response-helper').helper();



const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models/index.js")

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


app.use(responseHelper);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my web." });
});

app.get('/user', async (req, res) => {
  const users = await db.User.findAll();
  res.respond(users, 200);
  
});

app.get('/404', function(req, res) {
  // The usual way (without express-response-helper)
  // res.status(404).send('Resoure Not Found');

  // But with express-response-helper;
  res.failNotFound('Resoure Not Found');

  // This returns a response like this:
  /*
    {
      "status": 404,
      "error": "404",
      "messages": "Resoure Not Found"
    }
  */
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});