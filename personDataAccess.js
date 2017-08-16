function PersonDataAccess(database) {
    this.database = database;
}

PersonDataAccess.prototype.Add = function(person) {
    this.database.WritePerson(person.Name, person.LastName);
};

module.exports = PersonDataAccess;