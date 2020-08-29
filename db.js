const pg = require("pg");

const Pool = new pg.Pool({
  host: "46.242.239.81",
  port: 5432,
  user: "32939260_todolist",
  password: "todolist118",
  database: "32939260_todolist",
});

module.exports = Pool;
