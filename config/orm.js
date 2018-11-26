const connection = require("./connection");
let orm = {
    selectAll: (column) => {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [column], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: (burger_name) => {
        let insertString = 'INSERT INTO burgers(burger_name) VALUES = ??'
        connection.query(insertString, [burger_name], function (err, res) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        if (err) throw err;
        console.log(result);
    }
};

module.exports = orm;