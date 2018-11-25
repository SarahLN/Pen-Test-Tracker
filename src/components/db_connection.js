class DB_Connection {

  constructor() {
    var mysql = require('mysql');
    this.connection = mysql.createConnection({
      host  : 'localhost',
      user  : 'root',
      password  : 'PASSWORD HERE',
      database  : 'pentestdb'
    });
  }

  connect_to_db() {
    this.connection.connect();
  }

  disconnect_from_db() {
    this.connection.end();
  }

  run_query(query, callback) {
    this.connect_to_db();
    this.connection.query(query, function (error, results, fields) {
      if (error) throw error;
      //console.log('results: ', results);
      callback(results);
    });
    this.disconnect_from_db();
  }
};

module.exports = DB_Connection;
