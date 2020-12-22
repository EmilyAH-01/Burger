var orm = require("../config/orm.js");

// Execute database functions (written in orm.js)
var burger = {
  showAll: function(cb) {
    orm.showAll("burgers", function(res) {
      cb(res);
    });
  },

  createNew: function(columns, inputs, cb) {
    orm.createNew("burgers", columns, inputs, function(res) {
      cb(res);
    });
  },
  updateCurrent: function(affectedObj, status, cb) {
    orm.updateCurrent("burgers", affectedObj, status, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
