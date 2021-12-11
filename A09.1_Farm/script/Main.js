"use strict";
/*
Aufgabe: <Aufgabe_08.1_OldMacDonaldsFarm >
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <04.12.2021>
Quellen: <Zusammengearbeitet mit Debbie, Asya und Christina >
*/
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    let timer = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        day();
        document.querySelector("#nextDay")?.addEventListener("click", day);
    }
    OldMacDonaldsFarm.stock = [{
            name: "Grass",
            amount: 500
        },
        {
            name: "Cat Food",
            amount: 20
        },
        {
            name: "Hay",
            amount: 1000
        },
        {
            name: "Seeds",
            amount: 100
        },
        {
            name: "Meat",
            amount: 55
        }];
    function day() {
        let cow = new OldMacDonaldsFarm.Animal("Dolly", "Cow", "Moo");
        let cat = new OldMacDonaldsFarm.Animal("Lilly", "Cat", "Miau");
        let donkey = new OldMacDonaldsFarm.Animal("Susi", "Donkey", "Iah");
        let chicken = new OldMacDonaldsFarm.Animal("Hans", "Chicken", "Boak");
        let dog = new OldMacDonaldsFarm.Animal("Bello", "Dog", "Woof");
        setTimeout(function () {
            cow.sing(0);
            cow.eat(20, 0);
        }, 500);
        setTimeout(function () {
            cat.sing(1);
            cat.eat(2, 1);
        }, 2500);
        setTimeout(function () {
            donkey.sing(2);
            donkey.eat(15, 2);
        }, 5000);
        setTimeout(function () {
            chicken.sing(3);
            chicken.eat(2, 3);
        }, 8000);
        setTimeout(function () {
            dog.sing(4);
            dog.eat(5, 4);
        }, 10000);
        let dayCounter = document.querySelector("#day");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
    }
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Main.js.map