// import the database connection
const conn = require("../index.js")


module.exports = {
    //a function which fetches all the users.
    getAll: function (callback) {
      const sql = `SELECT * FROM users`
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      //a function that retrieves one user record based on the provided id.
      getOne: function(id,callback) {
        const sql = `SELECT * FROM users WHERE user_id=?`
        conn.query(sql, [id] , function (error, results, fields) {
        callback(error, results);
      });
      },
      // a function that can be used to add a user to the users table.
      add: function (id,name,callback) {
        const sql = `INSERT INTO users (user_id,name) VALUES (?,?)`
        conn.query(sql, [[id],[name]], function (error, results) {
        callback(error, results);
      });
      } 
    };