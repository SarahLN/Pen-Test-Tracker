var mysql = require('mysql');

var connection = mysql.createConnection({
  host  : 'localhost',
  user  : 'root',
  password  : 'PASSWORD HERE',
  database  : 'pentestdb'
});

connection.connect();

connection.query('INSERT INTO testtable (description) VALUES ("test1")', function (error, results, fields) {
  if (error) throw error;
  console.log('1 record inserted');
});

connection.end();

alert('test');
