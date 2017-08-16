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
        personDataAccess.Add(person, spyCallback);
        
        assert(stubWritePerson.calledWith(person.Name, person.LastName), 'Write Person not called correctly');
        assert(spyCallback.calledOnce, 'The database needs to have called the callback once');
       
        sandbox.restore();
        done();
    });
    
    it('Add a new person to the database - using mocking', function (done) {

        var database = new Database();
        var personDataAccess = new PersonDataAccess(database);
        var person = { Name: 'Tony', LastName: 'Bennett' };
        var mockDatabase = sinon.mock(database);        
        mockDatabase.expects('WritePerson').withArgs(person.Name, person.LastName).once();
        
        personDataAccess.Add(person, function() {});
        
        mockDatabase.verify();
       
        //sandbox.restore();
        done();
    });
    
});
