'use strict';
​
​
function createRequest (method, url, data, callback) {
  var probaRequest = new XMLHttpRequest();
  probaRequest.open(method, url);
  probaRequest.setRequestHeader('Content-Type', 'application/json');
  probaRequest.send(data);
  probaRequest.onreadystatechange = function () {
    console.log('allapot: ', probaRequest.readyState);
    if (probaRequest.readyState === 4) {
      callback(probaRequest.response);
    }
  };
}
​
/*'use strict'
function createRequest(method, url, data, callback) {
  var probaRequest = new XMLHttpRequest();
  probaRequest.open(method, url);
  probaRequest.setRequestHeader('Content-type', 'application/json');
  probaRequest.send(data);
  probaRequest.onreadystatechange = function () {
    console.log('allapot: ', probaRequest.readyState);
    if (probaRequest.readyState === 4) {
      callback(probaRequest.response);
    }
  };
}
​
var url = 'https://mysterious-dusk-8248.herokuapp.com/todos';
var todoContainer = document.querySelector('.todo-container')
var todoCallback = function (response) {
  console.log(JSON.parse(response));
  var todoItem = JSON.parse(response);
  var newTodoItem = document.createElement('p');
  newTodoItem.innerText = todoItem.text;
  todoContainer.appendChild(newTodoItem);
}
var dataToSend = JSON.stringify({text: 'jiykljfygkjgfkjgflkj'});
createRequest('POST', url, dataToSend, todoCallback);
*/

createRequest(url, todoCallback);
