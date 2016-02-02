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

function getItem(id) {
  return items[id];
}

function addItem(attributes) {
  var item = new TodoItem();
  item.update(attributes);
  items[item.id] = item;
  return item;
}

function removeItem(id) {
  delete items[id];
}

function allItems(callback) {
  mongoClient(function(err, db) {
    if(err) throw err;

    var collection = db.collection(collectionName)
                       .find({})
                       .toArray(function(err, docs) {
                          if(err) throw err;
                          callback(docs);
                          db.close();
                       });
  });
}

module.exports = {
  get: getItem,
  add: addItem,
  remove: removeItem,
  all: allItems,
};
