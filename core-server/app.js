var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

var cors = require("cors");
app.use(cors());

var bodyparser = require("body-parser");
app.use(bodyparser.json({ extended: true }));

require("dotenv").config();

var mongoose = require("mongoose");
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var indexroutes = require("./routes/index");

app.use(indexroutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

//////////////////////////////
app.listen(port, function () {
  console.log("server has been started");
});
