module.exports = {
  "development": {
    "username": "root",
    "password": null, // boa pratica utilizar var de ambiente, em vez de subir a senha do BD pro Git: process.env.MYSQL_PASSWORD
    "database": "dhschool",
    "host": "127.0.0.1", // localhost
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "dhschool",
    "host": "127.0.0.1", // localhost
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "dhschool",
    "host": "127.0.0.1", // localhost
    "dialect": "mysql"
  }
}
