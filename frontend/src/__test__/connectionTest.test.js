import { request } from 'express';
import React from 'react';
import ReactDOM from 'react-dom';




beforeAll(() => {
    return connectDB();
});

afterAll(() => {
    app.close();
    return mongoose.connection.close();
});

it('GET books / endpoint', async () => {
    const res = await request.get('/api/books').send();
    expect(res.statusCode).toBe(200);
});

