'use strict';

function createGET (url, callback) {
  var todoRequest = new XMLHttpRequest();
  todoRequest.open('GET', url);
  todoRequest.send();
  todoRequest.onreadystatechange = function () {
    if (todoRequest.readyState === 4) {
      callback(todoRequest.response);
    }
  };
}

function createPOST (url, textMes, callback) {
  var todoRequest = new XMLHttpRequest();
  todoRequest.open('POST', url);
  todoRequest.setRequestHeader('Content-Type','application/json');
  todoRequest.send(JSON.stringify({text: textMes}));
  todoRequest.onreadystatechange = function () {
    if (todoRequest.readyState === 4) {
      callback(url, todoCallback);
    }
  };
}

function createPUT (url) {
  var todoRequest = new XMLHttpRequest();
  todoRequest.open('PUT', url);
  // todoRequest.setRequestHeader('Content-Type','application/json');
  todoRequest.send();
}

function createDELETE (url) {
  var todoRequest = new XMLHttpRequest();
  todoRequest.open('DELETE', url);
  todoRequest.send();
}

var todoContainer = document.querySelector('.todo-container');

var todoCallback = function (response) {
  var todoArray = JSON.parse(response);
  todoContainer.innerHTML = '';
  todoArray.forEach(function (todoItem) {
    var newTodoItem = document.createElement('p');
    newTodoItem.setAttribute('id', todoItem.todo_id );
    newTodoItem.innerText = todoItem.text;
    console.log(todoItem.completed);
    if (todoItem.completed === 'true') {
      newTodoItem.setAttribute('class', 'completed' );
    }
    todoContainer.appendChild(newTodoItem);
    var newCheckbox = addCheckbox(todoItem);
    newCheckbox.setAttribute('class','checkbox');
    newTodoItem.appendChild(newCheckbox);
  });
  //refresh();
}

function addCheckbox(todoItem) {
  var newCheckbox = document.createElement('INPUT');
  newCheckbox.setAttribute('type', 'checkbox');
  newCheckbox.setAttribute('id', todoItem.todo_id);
  return newCheckbox;
}

// function refresh() {
//   window.scrollTo(0,document.body.scrollHeight);
// }

var url = 'http://localhost:3000/todos';

var refreshButton = document.querySelector('.refresh-button');
var todoInput = document.querySelector('.todo-input');
var sendButton = document.querySelector('.send-button');
var deleteButton = document.querySelector('.delete-button');
var submitButton = document.querySelector('.submit-button');

refreshButton.addEventListener('click', function () {
  createGET(url, todoCallback);
});

sendButton.addEventListener('click', function () {
  createPOST(url, todoInput.value, createGET);
  todoInput.value = '';
});

deleteButton.addEventListener('click', function () {
  var items = document.querySelectorAll('.checkbox');
  for (var i = 0; i < items.length; i++){
    if (items[i].checked === true) {
    createDELETE(url + '/' + items[i].id)
    }
  createGET(url, todoCallback);
  //refresh();
  }

});

submitButton.addEventListener('click', function () {
  var items = document.querySelectorAll('.checkbox');
  for (var i = 0; i < items.length; i++){
    if (items[i].checked === true) {
      var data = items[i].parentNode;
      items[i].setAttribute('class', 'completed' );
      createPUT(url + '/'+ items[i].id)
    }
  createGET(url, todoCallback);
  //refresh();
  }

});

// setInterval(function() {
//   createGET(url, todoCallback);
// }, 15000);

window.onkeydown = function keyEventHandler(e) {
    var keyCode = e.keyCode;
    if(keyCode === 13) {
      e.preventDefault();
      createPOST(url, todoInput.value, createGET);
      todoInput.value = '';
    }
};
//page start
createGET(url, todoCallback)
