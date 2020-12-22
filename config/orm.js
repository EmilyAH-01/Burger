var connection = require("../config/connection.js");

// Converts object key/value pairs to SQL syntax, ***taken from 01-Activities/17-CatsApp***
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Bacon Cheeseburger => 'Bacon Cheeseburger')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Bacon Cheeseburger'} => ["name='Bacon Cheeseburger'"]
      // e.g. {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Database functions
var orm = {
  all: function(table, cb) {
    connection.query("SELECT * FROM ??", table, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  create: function(table, columns, inputs, cb) {
    var query = "INSERT INTO " + table + " (" + columns.toString() + ") VALUES (?,?)";

    connection.query(query, inputs, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: function(table, affectedObj, status, cb) {
    var query = "UPDATE " + table + " SET " + objToSql(affectedObj) + " WHERE " + status;

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
