var randomPoem;
(function (randomPoem) {
    var subjekt = ["Der Dozent", "Das Rentier", "Prinzessin Lillifee", "Hulk", "Garfield", "Willi wills wissen"];
    var praedikat = ["hinterfragt", "isst", "knutscht", "tötet", "vergrault", "verlässt", "zerreißt"];
    var objekt = ["die Matheaufgabe", "den Weihnachtsmann", "das Objekt der Begierde", "den Donut", "die helfende Hand", "den Protagonisten"];
    /**console.log(subjekt);
    console.log(praedikat);
    console.log(objekt);*/
    for (var index = 6; index > 0; index--) {
        var wert = getVerse(subjekt, praedikat, objekt);
        console.log(wert);
    }
})(randomPoem || (randomPoem = {}));
function getVerse(_subjekt, _praedikat, _objekt) {
    var vers = "";
    var randomSubjekt = Math.floor(Math.random() * _subjekt.length);
    var randomPraedikat = Math.floor(Math.random() * _praedikat.length);
    var randomObjekt = Math.floor(Math.random() * _objekt.length);
    vers += _subjekt.splice(randomSubjekt, 1) + " " + _praedikat.splice(randomPraedikat, 1) + " " + _objekt.splice(randomObjekt, 1);
    return (vers);
}
//# sourceMappingURL=script.js.map