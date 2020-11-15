var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Main page', function() {
        it.skip('status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it.skip('content', function(done) {
            request('http://localhost:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World -> 3');
                done();
            });
        });
    });

    describe ('About page', function() {
        it.skip('status', function(done){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});
