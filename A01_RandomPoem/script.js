var randomPoem;
(function (randomPoem) {
    var subjects = ["Der Dozent", "Das Rentier", "Prinzessin Lillifee", "Hulk", "Garfield", "Willi wills wissen"];
    var predicates = ["hinterfragt", "isst", "knutscht", "tötet", "vergrault", "verlässt", "zerreißt"];
    var objects = ["die Matheaufgabe", "den Weihnachtsmann", "das Objekt der Begierde", "den Donut", "die helfende Hand", "den Protagonisten"];
    /**console.log(subjekt);
    console.log(praedikat);
    console.log(objekt);*/
    for (var index = subjects.length; index > 0; index--) {
        var value = getVerse(subjects, predicates, objects);
        console.log(value);
    }
    function getVerse(_subject, _predicate, _object) {
        var verse = "";
        var randomSubject = Math.floor(Math.random() * _subject.length);
        var randomPredicate = Math.floor(Math.random() * _predicate.length);
        var randomObject = Math.floor(Math.random() * _object.length);
        verse += _subject.splice(randomSubject, 1) + " " + _predicate.splice(randomPredicate, 1) + " " + _object.splice(randomObject, 1);
        return (verse);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map