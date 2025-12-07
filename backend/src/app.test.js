const request = require('supertest');
const app = require('./app');
test('POST crea producto', async ()=>{
  const r = await request(app).post('/api/productos').send({sku:'A',nombre:'X'});
  expect(r.status).toBe(201);
});
test('POST error', async ()=>{
  const r = await request(app).post('/api/productos').send({sku:'A'});
  expect(r.status).toBe(400);
});