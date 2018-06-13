var connection = require("./connection");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput],function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";

    console.log(queryString);

    connection.query(queryString, [table, cols, vals], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";

    console.log(queryString);
    console.log(table, objColVals, condition)
    connection.query(queryString, [table, objColVals, condition], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
