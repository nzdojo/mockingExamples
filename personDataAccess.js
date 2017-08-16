function PersonDataAccess(database) {
    this.database = database;
}

PersonDataAccess.prototype.Add = function(person, callback) {
    this.database.WritePerson(person.Name, person.LastName, callback());
};

module.exports = PersonDataAccess;