/*
Aufgabe: <Aufgabe_08.1_OldMacDonaldsFarm >
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <>
Quellen: <Zusammengearbeitet mit Debbie, Asya und Christina >
*/

namespace OldMacDonaldsFarm {

    let timer: number = 0;



    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        day();
        document.querySelector("#nextDay")?.addEventListener("click", day);
    }




    export interface Stock {
        name: string;
        amount: number;
    }

    export let stock: Stock[] = [{

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



    function day(): void {
        
        let cow: Animal = new Animal("Dolly", "Cow", "Moo");
        let cat: Animal = new Animal("Lilly", "Cat", "Miau");
        let donkey: Animal = new Animal("Susi", "Donkey", "Iah");
        let chicken: Animal = new Animal("Hans", "Chicken", "Boak");
        let dog: Animal = new Animal("Bello", "Dog", "Woof");

        setTimeout(function (): void {
            cow.sing(0);
            cow.eat(20, 0);
        },         500);

        setTimeout(function (): void {
            cat.sing(1);
            cat.eat(2, 1);
        },         2500);

        setTimeout(function (): void {
            donkey.sing(2);
            donkey.eat(15, 2);
        },         5000);

        setTimeout(function (): void {
            chicken.sing(3);
            chicken.eat(2, 3);
        },         8000);

        setTimeout(function (): void {
            dog.sing(4);
            dog.eat(5, 4);
        },         10000);

        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#day");
        timer++;
        dayCounter.innerHTML = "Day: " + timer;
        console.log("Day " + timer);
    }



}