function StartNewGame() {
    criminalPerson = DataLayer.GetCriminal();
    suspectCount = initial_suspect_count;
    suspectsList = DataLayer.GetSuspects();
}

function Accuse(person) {
    return (person.id = criminalPerson.id) ? !0 : !1;
}