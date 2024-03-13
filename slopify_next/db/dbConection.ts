import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "CocacolA2016",
    database: "slopy",
});

export default db;