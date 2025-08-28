import request from 'supertest';
import app from '../index.js';
import pool from '../db.js';

describe('GET /users', () => {
  afterAll(async () => {
    await pool.end(); // tutup koneksi pool setelah test
  });

  it('should return 200 and users array', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.users)).toBe(true);
  });
});
