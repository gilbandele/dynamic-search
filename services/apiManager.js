"use strict";

var connection = require('../database/connection');
var moment = require('moment');
var apiManager = {};
var rightNow = moment().format('YYYY-MM-DD HH:mm:ss');


/** Connect to database **/
connection.connect((err) => {
  if (err) {
    console.error('error establishing connection' + err.stack);
    return
  }
  console.log('connected as id' + connection.threadId);
});


apiManager.getProductsByName = (name, callback) => {
  connection.query('SELECT * FROM <table> WHERE <field_name> LIKE = ?', name, (err, result) => {
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