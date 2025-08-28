const request = require('supertest');
const app = require('../index');
const pool = require('../db');

describe('GET /users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.users)).toBe(true);
  });
});

// tutup koneksi pool
afterAll(async () => {
  await pool.end();
});
