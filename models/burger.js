var orm = require("../config/orm.js");

// Execute database functions (written in orm.js)
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(columns, inputs, cb) {
    orm.create("burgers", columns, inputs, function(res) {
      cb(res);
    });
  },
  update: function(affectedObj, status, cb) {
    orm.update("burgers", affectedObj, status, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
