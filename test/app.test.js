const request = require('supertest');
const app = require('../src/app');

describe('Health Check', () => {
    it('should return 200 and a message', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'OK' });
    });
});