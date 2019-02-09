var Sequelize = require('sequelize');

var sequelize = new Sequelize('testDB', 'root', '********', {
  host: '127.0.0.1',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
/*
// Or you can simply use a connection uri
var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
*/
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var User = sequelize.define('users',
        { uname: Sequelize.STRING , upw: Sequelize.STRING},
        { freezeTableName: true , timestamps: false}
);


/*
  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      uname: 'Lee',
      upw:'AAA'
    });
  });
*/

  User.findAll().then(users => {
    console.log(users);
  });
