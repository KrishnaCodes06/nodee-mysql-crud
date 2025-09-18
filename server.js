// server.js

const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// This middleware is crucial for Express to parse the JSON body of incoming requests
app.use(express.json());

// --- DATABASE CONNECTION ---
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // <-- Replace with your actual password
  database: 'store_db'            // <-- The database we created in Step 1
});

// Connect to the MySQL database
db.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Successfully connected to the database.');
});


// === THE CRUD OPERATIONS ===

// 1. CREATE a new product (C)
// Method: POST, URL: /products
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const sql = 'INSERT INTO products (name, price) VALUES (?, ?)';
  
  db.query(sql, [name, price], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send(`Product added with ID: ${result.insertId}`);
  });
});

// 2. READ all products (R)
// Method: GET, URL: /products
app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';

  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// 3. UPDATE an existing product (U)
// Method: PUT, URL: /products/:id
app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const sql = 'UPDATE products SET name = ?, price = ? WHERE id = ?';

  db.query(sql, [name, price, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Product updated successfully.');
  });
});

// 4. DELETE a product (D)
// Method: DELETE, URL: /products/:id
app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Product deleted successfully.');
  });
});


// --- START THE SERVER ---
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});