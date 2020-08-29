const express = require("express");
const Pool = require("./db");
const cors = require("cors");

const server = new express();

//middleware
server.use(cors());
server.use(express.json());

server.listen(5000, () => {
  console.log("Server started at port 5000");
});

server.post("/add", async (req, res) => {
  try {
    const [line1, line2] = [req.body.line1, req.body.line2];
    console.log(req);
    const anwser = await Pool.query(
      "INSERT INTO todo(line1, line2) VALUES($1, $2)",
      [line1, line2]
    )
      .then(
        res.json(`Line1: ${line1}, and line2: ${line2} successfully added!`)
      )
      .then(console.log("/add done."));
  } catch (err) {
    console.error("Some error on ADD :c");
  }
});

server.get("/todos", async (req, res) => {
  try {
    console.log("todo JSON request.");
    const toDoList = await Pool.query("SELECT * FROM todo");
    res.json(toDoList.rows);
  } catch (err) {
    console.error(err.message);
  }
});

server.get("/todos/:id", async (req, res) => {
  try {
    console.log("todo/id JSON request.");
    const { id } = req.params;
    const toDoList = await Pool.query("SELECT * FROM todo WHERE t_id = $1", [
      id,
    ]);
    res.json(toDoList.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

server.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
  } catch (err) {
    console.error(err.message);
  }
});

server.post("/reset", async (req, res) => {
  try {
    await Pool.query("DELETE FROM todo").then(
      await Pool.query("ALTER SEQUENCE todo_t_id_seq RESTART").then(
        await Pool.query("UPDATE todo SET t_id = DEFAULT").then(
          res.json(`Database restarted!`)
        )
      )
    );
  } catch (err) {
    console.error("Some error :c on RESET");
  }
});

server.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Pool.query("DELETE FROM todo WHERE t_id = $1", [id])
      .then(await Pool.query("ALTER SEQUENCE todo_t_id_seq RESTART"))
      .then(await Pool.query("UPDATE todo SET t_id = DEFAULT"))
      .then(res.json(`Row with t_id = ${id} successfully deleted!`));
    console.log("/delete done");
  } catch (err) {
    console.error("Some error :c on DELETE");
  }
});
