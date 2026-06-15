const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    if (req.method === 'GET') {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM feedback ORDER BY created_at DESC LIMIT 10');
      connection.release();
      return res.status(200).json(rows);
    }

    if (req.method === 'POST') {
      const { name, email, rating, message, feedbackType } = req.body;

      if (!name || !email || !rating || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const connection = await pool.getConnection();
      await connection.query(
        'INSERT INTO feedback (name, email, rating, message, feedback_type) VALUES (?, ?, ?, ?, ?)',
        [name, email, rating, message, feedbackType || 'general']
      );
      connection.release();
      
      return res.status(200).json({ success: true, message: 'Thank you for your feedback!' });
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process feedback', details: error.message });
  }
};
