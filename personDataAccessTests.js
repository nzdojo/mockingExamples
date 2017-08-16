var assert = require('assert'); 
var PersonDataAccess = require('./personDataAccess');
var Database = require('./database.js');  // this will be faked, need a reference to it
var sinon = require('sinon');
require('mocha-sinon');

describe("Testing function the save personal details.", function () {

    it('Add a new person to the database', function (done) {
        var sandbox = sinon.sandbox.create();
        var database = new Database();
        var stubWritePerson = sandbox.stub(database, 'WritePerson');
        var spyCallback = sandbox.spy();
        var personDataAccess = new PersonDataAccess(database);
        var person = { Name: 'Tony', LastName: 'Bennett' };
        personDataAccess.Add(person);
        
        assert(stubWritePerson.calledWith(person.Name, person.LastName), 'Write Person not called correctly');
        assert(spyCallback.calledOnce, 'The database needs to have called the callback once');
       
        sandbox.restore();
        done();
    });
    
    
});
