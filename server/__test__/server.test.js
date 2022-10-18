
const request = require('supertest');
const articleRouter = require('../router/articleRouter');
const mongoose = require('mongoose');

const server = require('../server');

beforeAll(() => {
    const url = process.env.MONGOLAB_URI

    // Connect to the MongoDB cluster
    mongoose.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

})

afterAll(() => {
    server.close();
    return mongoose.connection.close();
});

it('article', async () => {
    const res = await request.get(articleRouter).send();
    expect(res.statusCode).toBe(200);
})