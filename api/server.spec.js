const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
    describe('index route', () => {
        it('should return 200 status code', () => {
            const expectedStatusCode = 200;
            let response;

            return request(server).get('/')
                .then(res => {
                    response = res;

                    expect(response.status).toEqual(expectedStatusCode);
                });
        });
        it('should return a JSON object', () => {
            const expectedBody = { API: 'Running... ' };
            let response;

            return request(server).get('/')
                .then(res => {
                    response = res;

                    expect(response.body).toEqual(expectedBody);
                });
        });
    });
    describe('register route', () => {
        it('sends 400 status if no email and password', () => {
            return request(server)
                .post('/api/auth/register')
                .then(res => expect(res.status).toBe(400))
        });
    });
    describe('login route', () => {
        it('sends 400 status if login creds are unregistered', () => {
            return request(server)
                .post('/api/auth/login')
                .then(res => expect(res.status).toBe(400))
        });
    });
});