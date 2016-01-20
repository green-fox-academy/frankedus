'use strict';

function createRequest (url, callback) {
  var probaRequest = new XMLHttpRequest();
  probaRequest.open('POST', url);
  probaRequest.setRequestHeader('Content-Type', 'application/json');
  probaRequest.send(data);
  probaRequest.onreadystatechange = function() {
    console.log('allapot:', probaRequest.readyState);
    if (probaRequest.readyState === 4) {
      callback(probaRequest.response);
    }
  };
}

var url = "https://mysterious-dusk-8248.herokuapp.com/todos";
var todoContainer = document.querySelector('.todo-container');

var todoCallback = function(response) {
  console.log(JSON.parse(response));
  var todoArray = JSON.parse(response);
  todoArray.forEach(function(todoItem) {
    console.log(todoItem.text);

    var newTodoItem = document.createElement('p');
    newTodoItem.innerText = todoItem.text;
    todoContainer.appendChild(newTodoItem);
  });
}

createRequest(url, todoCallback);
