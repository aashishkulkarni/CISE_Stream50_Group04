const { server: app, database } = require('../server');
const supertest = require("supertest");
const request = supertest(app);
const mongoose = require('mongoose');


beforeAll(() => {
    database

})



it('Test article grabbing', async () => {
    const res = await request.get('/article/getAllArticles').send();
    expect(res.statusCode).toBe(200);
})

it('Test pending article ', async () => {
    const res = await request.get('/article/getAllPendingArticles').send();
    expect(res.statusCode).toBe(200);
})

