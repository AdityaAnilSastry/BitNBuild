const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tiger',
  database: 'login'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use(express.static(__dirname));


// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sql = `SELECT * FROM users WHERE username = '${username}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const user = result[0];
      bcrypt.compare(password, user.password, (err, match) => {
        if (match) {
          // res.send('Login successful');
          res.redirect('/home.html');
        } else {
          res.send('Invalid username or password');
        }
      });
    } else {
      res.send('Invalid username or password');
    }
  });
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    const sql = `INSERT INTO users (username, password) VALUES ('${username}', '${hash}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send('Registration successful');
    });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
