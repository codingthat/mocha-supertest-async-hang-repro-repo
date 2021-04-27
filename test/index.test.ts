import app from '../app';
import supertest from 'supertest';
import { expect } from 'chai';

describe('the server', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });
    after(function (done) {
        // shut down the Express.js server, then tell Mocha we're done:
        app.close(done);
    });
    it('should respond to a GET at /', async function () {
        const res = await request.get('/').send();
        expect(res.status).to.equal(200);
        expect(res.text).to.equal('Server running');
    });
});