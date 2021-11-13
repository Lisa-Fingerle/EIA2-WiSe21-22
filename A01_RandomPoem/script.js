"use strict";
var randomPoem;
(function (randomPoem) {
    let subjects = ["Der Dozent", "Das Rentier", "Prinzessin Lillifee", "Hulk", "Garfield", "Willi wills wissen"];
    let predicates = ["hinterfragt", "isst", "knutscht", "tötet", "vergrault", "verlässt", "zerreißt"];
    let objects = ["die Matheaufgabe", "den Weihnachtsmann", "das Objekt der Begierde", "den Donut", "die helfende Hand", "den Protagonisten"];
    /**console.log(subjekt);
    console.log(praedikat);
    console.log(objekt);*/
    for (let index = subjects.length; index > 0; index--) {
        let value = getVerse(subjects, predicates, objects);
        console.log(value);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        verse += _subject.splice(randomSubject, 1) + " " + _predicate.splice(randomPredicate, 1) + " " + _object.splice(randomObject, 1);
        return (verse);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=script.js.map