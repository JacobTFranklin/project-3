// Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

//Cors middleware
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public/my-app/dist/my-app"));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname,'public/my-app/dist/my-app/index.html'));
});

//Require models
var db = require('./models/');

//Require routes
require('./routes/routes.js')(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

