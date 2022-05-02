const app = require('../app')
const request = require('supertest')

describe('POST /beers/findTwoBeers', () => {

    test('Should respond with an array [0,1].', async () => {
        const response = await request(app).post('/beers/findTwoBeers').send({
            beers: [15, 20, 25, 39, 12, 18, 19, 21],
            target: 35
        })
        expect(response.body).toStrictEqual({ "index": [0,1] });
    })

    test('Should respond with an empty array.', async () => {
        const response = await request(app).post('/beers/findTwoBeers').send({
            beers: [10, 15, 20],
            target: 40
        })
        expect(response.body).toStrictEqual({ "index": [] });
    })

    test('Should respond with one of the many possible solutions.', async () => {
        const response = await request(app).post('/beers/findTwoBeers').send({
            beers: [10, 15, 18, 12, 20, 20],
            target: 30
        })
        expect(response.body).toStrictEqual({ "index": [0,4] });
    })

    test('Should respond with status code 400.', async () => {
        const response = await request(app).post('/beers/findTwoBeers').send({
            beers: '' ,
            target: 30
        })
        expect(response.statusCode).toBe(400);
    })
})