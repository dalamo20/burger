var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", cb);
    },
    // The variables cols and vals are arrays.
    insertOne: function(burgerName, cb) {
      orm.insertOne("burgers", ["burger_name", "devoured"], [burgerName, false], cb);
    },
    updateOne: function(id, cb) {
      orm.updateOne("burgers", {devoured: true}, {id}, cb);
    }
  };

module.exports = burger;