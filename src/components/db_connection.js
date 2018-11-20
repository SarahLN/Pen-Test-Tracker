class DB_Connection {

  constructor() {
    var mysql = require('mysql');
    this.connection = mysql.createConnection({
      host  : 'localhost',
      user  : 'root',
      password  : 'yy3d5Inj9as6oFPT90',
      database  : 'pentestdb'
    });
  }

  connect_to_db() {
    this.connection.connect();
  }

  disconnect_from_db() {
    this.connection.end();
  }

  run_query(query) {
    this.connect_to_db();
    this.connection.query(query, function (error, results, fields) {
      if (error) throw error;
      console.log('query ran: ', query);
    });
    this.disconnect_from_db();
  }
};

module.exports = DB_Connection;
