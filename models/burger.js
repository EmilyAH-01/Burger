var orm = require("../config/orm.js");

// Execute database functions (written in orm.js)
var craving = {
  all: function(cb) {
    orm.all("cravings", function(res) {
      cb(res);
    });
  },

  create: function(columns, inputs, cb) {
    orm.create("cravings", columns, inputs, function(res) {
      cb(res);
    });
  },
  update: function(affectedObj, status, cb) {
    orm.update("cravings", affectedObj, status, function(res) {
      cb(res);
    });
  }
};

module.exports = craving;
