"use-strict"


var mongoClient = require("./mongoClient.js").mongoClient;
var collectionName = "todos";


var TodoItem = function () {
  this.id = nextId();
  this.text = "";
  this.completed = false;
}

TodoItem.prototype.update = function(attributes) {
  this.text = attributes.text || "";
  this.completed = !!attributes.completed;
};

var currId = 0;
function nextId() {
  return ++currId;
}

var items = {};

function getItem(id, callback) {
  connection.query('SELECT text,completed FROM todo WHERE todo_id=?', id, function(err, result){
    if (err) {throw err;}
    console.log(result);
    callback(result);
  });
}

function addItem(item, callback) {
  connection.query('INSERT INTO todo SET text=?', item, function(err, result){
    if (err) throw err;
    console.log(result.insertId);
    callback(result);
  });
}

function removeItem(id,callback) {
  connection.query('DELETE FROM todo WHERE todo_id=?', id, function(err, result){
    if (err) throw err;
    console.log(result.insertId);
    callback(result);
  });
}

function allItems(callback) {
  var values = [];
  mongoClient(function(err, db) {
    if(err) throw err;
    var collection = db.collection(collectionName).find({}).toArray(function(err, docs) {
      if(err) throw err;
      values.concat(docs);
      console.log(values);
      db.close();
    });
  });
  return values;
}

function updateItem(id, callback) {
  connection.query('UPDATE todo SET completed="true" WHERE todo_id=?;', id, function(err, result){
      if (err) throw err;
      console.log(result);
      callback(result);
    });
}


module.exports = {
  get: getItem,
  add: addItem,
  remove: removeItem,
  all: allItems,
  update: updateItem
};
