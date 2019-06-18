const app = require('../../app/app')
const request = require('supertest')

describe('login', () => {
    it('should return toker when login complete', async () => {
        const resp = await request(app).post('/login')
        expect(resp.statusCode).toEqual(200)
    })

    it('should return status 200 when call /login/test', async () => {
        const resp = await request(app).get('/login/test')
        expect(resp.statusCode).toEqual(200)
    })
})