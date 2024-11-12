import request from 'supertest';
import app from '../../src/server';

describe('Request passes successfully', () => {
    // should respond http code is 200
    // should respond application/json header

    it("Should respond back with 200 status code", async () => {
        const response = await request(app).get('/');
        expect(response.status).toEqual(200);
    })

    it('Should respond back with json format', async () => {
        const response = await request(app).get('/');
        expect(response.headers['content-type']).toContain('application/json');
    });
})
