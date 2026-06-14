const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3200;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/placeholder-pages', express.static(path.join(__dirname, '../public/placeholder_pages')));

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'guardian_vale_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Routes
// Get all testimonials/feedback
app.get('/api/feedback', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query('SELECT * FROM feedback ORDER BY created_at DESC LIMIT 10');
    connection.release();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch feedback' });
  }
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO contacts (first_name, last_name, email, phone, message) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, email, phone, message]
    );
    connection.release();
    res.json({ success: true, message: 'Thank you! We will contact you soon.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Submit feedback/recommendation
app.post('/api/feedback', async (req, res) => {
  const { name, email, rating, message, feedbackType } = req.body;

  if (!name || !email || !rating || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const connection = await pool.getConnection();
    await connection.query(
      'INSERT INTO feedback (name, email, rating, message, feedback_type) VALUES (?, ?, ?, ?, ?)',
      [name, email, rating, message, feedbackType || 'general']
    );
    connection.release();
    res.json({ success: true, message: 'Thank you for your feedback!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Guardian Vale Security Server running on http://localhost:${PORT}`);
  console.log('Make sure MySQL is running and database is set up');
});
