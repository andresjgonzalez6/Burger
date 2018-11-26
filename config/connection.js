const mysql = require("mysql");
require("dotenv").config();
let db = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

module.exports = db;