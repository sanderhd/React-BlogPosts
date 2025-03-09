const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const session = require("express-session");

const app = express();
const db = new sqlite3.Database("database.db");

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'hallo',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

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

  db.run(
    "INSERT INTO posts (title, author, content, date) VALUES (?, ?, ?, ?)",
    [title, author, content, date],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID, title, author, content, date });
    }
  );
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (row) {
      res.status(400).json({ error: "User already exists" });
      return;
    }

    db.run(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password],
      function (err) {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({ id: this.lastID, email });
      }
    );
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (!row) {
        res.status(401).json({ error: "Invalid email or password" });
        return;
      }
      req.session.user = { id: row.id, email: row.email };
      res.json({ id: row.id, email: row.email });
    }
  );
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.clearCookie("connect.sid");
    res.json({ message: "Logout successful" });
  });
});

app.get("/session", (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.status(401).json({ error: "Not authenticated" });
  }
});

app.get("/users", (req, res) => {
  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(5000, () => console.log("Server draait op poort 5000"));
