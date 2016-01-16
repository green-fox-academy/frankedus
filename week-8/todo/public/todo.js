'use strict';

var url = "http://localhost:3000/todos";
var item = document.createElement('li');
var addButton = document.querySelector('.add-button');
var deleteButton = document.querySelector('.delete-button');
var todoInput = document.querySelector('.input');


function getTodoItems(callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var res = JSON.parse(req.response);
      return callback(res);
    };
  };
};

getTodoItems(getTodoList);

function getTodoList(res) {
  res.forEach(function(e) {
    var newItem = document.createElement('p');
    newItem.innerText = e.id + '. ' + e.text;
    newItem.setAttribute('id', e.id)
    document.body.appendChild(newItem);
  });
}

function postItemToServer(text, callback) {
  var req = new XMLHttpRequest();
  req.open('POST', url);
  req.setRequestHeader('Content-Type', 'application/json');
  req.send(JSON.stringify({'text': text}));
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var res = JSON.parse(req.response);
      callback(res);
    }
  };
}

function deleteTodoItem(id, callback) {
  var req = new XMLHttpRequest();
  req.open('DELETE', url+'/'+id);
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState === 4) {
      var res = JSON.parse(req.response);
      callback(res);
    }
  }
}

function deleteCallback(res) {
  document.getElementById(res.id).remove();
  todoInput.value = '';
}

function appendNewItem(response) {
  var output = document.createElement('p');
  output.innerText = response.id + '. ' + response.text;
  output.setAttribute('id', response.id)
  document.body.appendChild(output);
};

addButton.addEventListener('click', function () {
  postItemToServer(todoInput.value, appendNewItem);
  todoInput.value = '';
})

deleteButton.addEventListener('click', function () {
  deleteTodoItem(todoInput.value, deleteCallback);
})
