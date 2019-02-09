module.exports = {
      development: {
        username: "root",
        password: "arcaida1",
        database: "testDB",
        host: "127.0.0.1",
	port: 6306,
        dialect: "mariadb",
	pool:{max:5,min:0,idle:10000}
},
    store: {
        mysqlHost: "127.0.0.1",
        mysqlPort: "3306",
        mysqlUser: "root",
        mysqlPassword: "********",
        mysqlDatabase: "testDB",
        dialect: 'mysql',
        ConnectionLimit: 100

    },
    redis: {
        redisHost: "127.0.0.1",
        redisPort: 6379,
        redisPassword: "********"
    },
    test: {
      username: 'root',
      password: '********',
      database: 'testDB',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      dialect: 'mysql'
    }
};
