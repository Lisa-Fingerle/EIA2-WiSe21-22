namespace randomPoem {

    let subjects: string[] = ["Der Dozent", "Das Rentier", "Prinzessin Lillifee", "Hulk", "Garfield", "Willi wills wissen"];
    let predicates: string[] = ["hinterfragt", "isst", "knutscht", "tötet", "vergrault", "verlässt", "zerreißt"];
    let objects: string[] = ["die Matheaufgabe", "den Weihnachtsmann", "das Objekt der Begierde", "den Donut", "die helfende Hand", "den Protagonisten"];


    /**console.log(subjekt);
    console.log(praedikat);
    console.log(objekt);*/


    for (let index: number = subjects.length; index > 0; index--) {

        let value: string = getVerse(subjects, predicates, objects);
        console.log(value);

    }





    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {

        let verse: string = "";

        let randomSubject: number = Math.floor(Math.random() * _subject.length);
        let randomPredicate: number = Math.floor(Math.random() * _predicate.length);
        let randomObject: number = Math.floor(Math.random() * _object.length);

        verse += _subject.splice(randomSubject, 1) + " " + _predicate.splice(randomPredicate, 1) + " " + _object.splice(randomObject, 1);

        return (verse);
    }


}