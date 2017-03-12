"use strict";

var connection = require('../database/connection');
var moment = require('moment');
var apiManager = {};
var rightNow = moment().format('YYYY-MM-DD HH:mm:ss');


/** Connect to database **/
connection.connect((err) => {
  if (err) {
    console.log(err);
    console.error('error establishing connection' + err.stack);
    return;
  }
  console.log('connected as id' + connection.threadId);
});


apiManager.getProductsByName = (name, callback) => {
  var searchName = name+'%';
  connection.query('SELECT list_sku, list_name FROM products WHERE list_name LIKE ? LIMIT 50', searchName, (err, result) => {
    if (err) {
      console.log(err);
      callback(err);
    }
    callback(null, result);
  });
};


apiManager.closeDatabaseConnection = () => {
  connection.end((err) => {
    if (err) {
      console.error('error terminating connection' + err.stack);
    }

    console.log('connection is terminated now');
  });
};

module.exports = apiManager;