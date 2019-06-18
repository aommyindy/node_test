const app = require('../app/app')
const request = require('supertest')

describe('app', () => {
    it('should return Hello World', async () => {
        const resp = await request(app).get('/')
        expect(resp.statusCode).toEqual(200)
        expect(resp.text).toEqual('Hello World')
    })

    it('should reture error 404', async () => {
        const resp = await request(app).get('/dummy')
        expect(resp.statusCode).toEqual(404)
    })

    it('should post data and return json data resopons', async () => {
        const resp = await request(app)
            .post('/')
            .send({
                "code": "007"
            })

        expect(resp.statusCode).toEqual(200)
        expect(resp.body).toEqual({
            success: true,
            data: {
                "code": "007"
            }
        })
    });
})