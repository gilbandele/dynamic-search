"use strict";

var mysql = require('mysql');


/** Create Connection Object **/
var connection = mysql.createConnection({
  host: '104.196.142.35',
  port: 3306,
  user: 'root',
  password: '',
  database: 'gilbandele'
});

module.exports = connection;