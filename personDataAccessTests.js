var assert = require('assert'); 
var PersonDataAccess = require('./personDataAccess');

describe("Testing function the save personal details.", function () {

    it('Add a new person to the database', function (done) {
        var personDataAccess = new PersonDataAccess();
        personDataAccess.Add(person);
        assert(false, "To be implemented");
    });
    
});
