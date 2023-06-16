import mysql from "mysql"

export const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b351e072f369f8",
    password: "78ffca45",
    database: "heroku_cd7c8c30010f56c"
})
