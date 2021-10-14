namespace randomPoem {

    let subjekt: string[] = ["Der Dozent", "Das Rentier", "Prinzessin Lillifee", "Hulk", "Garfield", "Willi wills wissen"];
    let praedikat: string[] = ["hinterfragt", "isst", "knutscht", "tötet", "vergrault", "verlässt", "zerreißt"];
    let objekt: string[] = ["die Matheaufgabe", "den Weihnachtsmann", "das Objekt der Begierde", "den Donut", "die helfende Hand", "den Protagonisten"];


    /**console.log(subjekt);
    console.log(praedikat);
    console.log(objekt);*/


    for (let index: number = 6; index > 0; index--) {

        let wert: string = getVerse(subjekt, praedikat, objekt);
        console.log(wert);
    
    }


}


function getVerse(_subjekt: string[], _praedikat: string[], _objekt: string[]): string {

    let vers: string = "";

    let randomSubjekt: number = Math.floor(Math.random() * _subjekt.length);
    let randomPraedikat: number = Math.floor(Math.random() * _praedikat.length);
    let randomObjekt: number = Math.floor(Math.random() * _objekt.length);

    vers += _subjekt.splice(randomSubjekt, 1) + " " + _praedikat.splice(randomPraedikat, 1) + " " + _objekt.splice(randomObjekt, 1);

    return (vers);
}


