"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var items = require("./items.js");


var app = express();

// items.add({text: 'Buy milk'});
// items.add({text: 'Make dinner'});
// items.add({text: 'Save the world'});

// Basic middlewares
app.use(logRequest);
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/todos", function (req, res) {
  items.all(function(docs) {
    res.json(docs);
  });
});

app.post("/todos", function (req, res) {
  items.add(req.body.text, function(item) {
    res.status(201).json(item);
  });
});

app.put("/todos/:id", function (req, res) {
  items.update(req.params.id, function(item) {
    res.status(200).json(item);
  });
});

app.delete("/todos/:id", function (req, res) {
  items.remove(req.params.id, function(item) {
    res.status(200).json(item);
  });
});

var port = parseInt(process.env.PORT || "3000")
app.listen(port, function () {
  console.log("Listening on port 3000...")
});

function findItem(req, res, found) {
  var id = parseInt(req.params.id);
  var item = items.get(id);
  if (item) {
    found(item);
  } else {
    res.status(404).json({error: "Item not found"})
  }
}

function logRequest(req, res, next) {
  var parts = [
    new Date(),
    req.method,
    req.originalUrl,
  ];
  console.log(parts.join(" "));

  next();
}
