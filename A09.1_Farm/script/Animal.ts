namespace OldMacDonaldsFarm {

    let text: HTMLElement;
    let songDOMElement: HTMLElement;

    export class Animal {
        name: string;
        type: string;
        sound: string;
        positionMouth: Vector;
    
        constructor(_name: string, _type: string, _sound: string) {

            this.name = _name;
            this.type = _type;
            this.sound = _sound;
            
        }

        sing(_food: number): void {
            //console.log("Song Funktion aufgerufen");
            let nameDOMElement: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            songDOMElement = <HTMLElement>document.querySelector("#song");

            nameDOMElement.innerHTML = this.name;
            songDOMElement.innerHTML = " ``Old MacDonald had a farm, ee-i-ee-i-o." + "<br>" + "<br>" + "And on his farm he had a " + this.type + " ee-i-ee-i-o. " + "<br>" + "<br>" 
            + "With a " + (this.sound + " ").repeat(2) + " here, and a " + (this.sound + " ").repeat(2) + "there" + "<br>" + "<br>"
            + "Here a " + (this.sound) + ", there a " + (this.sound) + ", everywhere a " + (this.sound + " ").repeat(2) + "." 
            + "<br>" + "<br>" + "Old MacDonald had a farm, ee-i-ee-i-o.``";
            

        }

        eat (_amount: number, _foodPosition: number): void {
            stock[_foodPosition].amount -= _amount;
            text = <HTMLElement>document.querySelector("#animal" + _foodPosition);
            text.innerHTML = "There is <i>" + stock[_foodPosition].amount + "</i>" + "kg " + stock[_foodPosition].name + " left.";
            
            let eating: HTMLElement = <HTMLElement>document.querySelector("#eating");
            eating.innerHTML = "The " + this.type + " " + this.name + " eats " + stock[_foodPosition].name + ".";

            //console.log("The " + this.type + "" + this.name + " eats" + stock[_foodPosition].name + ".");
        }
    }
 
}