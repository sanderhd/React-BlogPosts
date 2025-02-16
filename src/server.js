const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("database.db");

app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  db.all("SELECT * FROM posts", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/posts", (req, res) => {
  const { title, author, content } = req.body;
  const date = new Date().toISOString().split("T")[0];

  db.run("INSERT INTO posts (title, author, content, date) VALUES (?, ?, ?, ?)", 
    [title, author, content, date], 
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, title, author, content, date });
  });
});

app.listen(5000, () => console.log("Server draait op poort 5000"));
