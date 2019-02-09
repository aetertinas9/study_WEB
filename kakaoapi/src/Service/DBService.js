
var mysql      = require('mysql');
var config = require('../../config');
var connection = mysql.createConnection({
  host     : config.store.mysqlHost,
  user     : config.store.mysqlUser,
  password : config.store.mysqlPassword,
  database: config.store.mysqlDatabase,
  connectionLimit: config.store.ConnectionLimit
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

/*
var mysql = require('mysql');
var config = require('../../config');
var util = require('util');

var DBService = function(){};

DBService.Init = function () {

    this._pool = mysql.createPool({
        host: config.store.Host,
        user: config.store.User,
        password: config.store.Password,
        database: config.store.Database,
        connectionLimit: config.store.ConnectionLimit,
    });

    // 사용 가능한 커넥션이 없을경우
    this._pool.on('enqueue', function () {
        console.log(util.format("*** Waiting ***"));
    });


    console.log(util.format('*** connected ***'));
};

DBService.Query = function (query, value, succEvent) {

    this._pool.getConnection(function (err, connection) {
        connection.query(query, value, function (err, rows) {
            if (err) {
                connection.release();
                throw err;
            }

            succEvent(rows);
            connection.release();
        });
    });
};

module.exports = DBService;
*/
