const pg = require("pg");

const Pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "example",
  password: "example",
  database: "example",
});

module.exports = Pool;
