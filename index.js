import express from 'express';
import pool from './db.js';

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json({ success: true, users: result.rows });
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

if (process.env.NODE_ENV !== 'test') {  // supaya saat test server nggak listen
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
}

export default app;  // export app supaya bisa di-import untuk test
