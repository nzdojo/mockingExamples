var assert = require('assert'); 
var PersonDataAccess = require('./personDataAccess');
var sinon = require('sinon');
require('mocha-sinon');

describe("Testing function the save personal details.", function () {

    it('Add a new person to the database', function (done) {
        var personDataAccess = new PersonDataAccess();
        var person = { Name: 'Tony', LastName: 'Bennett' };
        personDataAccess.Add(person);
        
        assert(false, 'call to save data failed');
        done();
    });
    
    
});
