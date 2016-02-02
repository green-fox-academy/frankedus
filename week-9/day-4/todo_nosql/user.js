var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'test',
  database: 'todo'
});

connection.connect();

function addTodo(attribute) {
  connection.query('INSERT INTO todo SET ?', attribute, function(err, result){
    if (err) throw err;
    console.log(result.insertId);
  });
}

module.exports = {
  add:addTodo
};
