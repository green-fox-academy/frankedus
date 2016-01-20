'use strict';

var url = "http://localhost:3000/todos";
var item = document.createElement('li');
var todoContainer = document.querySelector('.todo-container')
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

getTodoItems(getTodoListCallback);

function getTodoListCallback(res) {
  res.forEach(function(item) {
    var newItem = document.createElement('p');
    newItem.innerText = item.text;
    newItem.setAttribute('id', item.id)
    todoContainer.appendChild(newItem);
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

function appendNewItem(res) {
  var output = document.createElement('p');
  output.innerText = res.text;
  output.setAttribute('id', response.id)
  todoContainer.appendChild(output);
};

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
}


todoInput.addEventListener('keypress', function (event) {
  var keycode = event.keyCode;
  if (keycode === 13) {
    event.preventDefault();
    postItemToServer(todoInput.value, appendNewItem);
    todoInput.value = '';
  }
})

todoContainer.addEventListener('dblclick', function (event) {
  var element = event.target;
  deleteTodoItem(element.id, deleteCallback);
})
