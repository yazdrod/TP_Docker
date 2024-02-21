// Uncomment this block to use sqlite
/*module.exports = {
    dialect: "sqlite",
    storage: "./my-db.sqlite",
}*/

// Uncomment this block to use mysql
module.exports = {
    dialect: "mysql",
    hostname: "sql_docker",
    username: "root",
    password: "",
    database: "mydatabase",
    port: 3306
}

// TODO : adapt this file to load parameters from environment variables (process.env.VARIABLE_NAME)
