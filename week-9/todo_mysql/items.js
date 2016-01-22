"use-strict"

var TodoItem = function () {
  this.id = nextId();
  this.text = "";
  this.completed = false;
}

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'todo'
});

connection.connect();

TodoItem.prototype.update = function(attributes) {
  this.text = attributes.text || "";
  this.completed = !!attributes.completed;
};

var currId = 0;
function nextId() {
  return ++currId;
}

var items = {};

function getItem(callback) {
  connection.query('SELECT * FROM todo', function(err, id) {
    if (err) throw err;
    console.log(id);
    callback(id);
  });
}

function addItem(attributes) {
  connection.query('INSERT INTO todo SET ?', attributes, function(err, result){
    if (err) throw err;
  });
}

function removeItem(id) {
  delete items[id];
}

function allItems() {
  var values = [];
  for (var id in items) {
    values.push(items[id]);
  }
  return values;
}

module.exports = {
  get: getItem,
  add: addItem,
  remove: removeItem,
  all: allItems,
};
