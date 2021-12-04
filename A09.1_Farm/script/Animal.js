"use strict";
var OldMacDonaldsFarm;
(function (OldMacDonaldsFarm) {
    let text;
    let songDOMElement;
    class Animal {
        name;
        type;
        sound;
        positionMouth;
        constructor(_name, _type, _sound) {
            this.name = _name;
            this.type = _type;
            this.sound = _sound;
        }
        sing(_food) {
            //console.log("Song Funktion aufgerufen");
            let nameDOMElement = document.querySelector("#animalName");
            songDOMElement = document.querySelector("#song");
            nameDOMElement.innerHTML = this.name;
            songDOMElement.innerHTML = " ``Old MacDonald had a farm, ee-i-ee-i-o." + "<br>" + "<br>" + "And on his farm he had a " + this.type + " ee-i-ee-i-o. " + "<br>" + "<br>"
                + "With a " + (this.sound + " ").repeat(2) + " here, and a " + (this.sound + " ").repeat(2) + "there" + "<br>" + "<br>"
                + "Here a " + (this.sound) + ", there a " + (this.sound) + ", everywhere a " + (this.sound + " ").repeat(2) + "."
                + "<br>" + "<br>" + "Old MacDonald had a farm, ee-i-ee-i-o.``";
        }
        eat(_amount, _foodPosition) {
            OldMacDonaldsFarm.stock[_foodPosition].amount -= _amount;
            text = document.querySelector("#animal" + _foodPosition);
            text.innerHTML = "There is <i>" + OldMacDonaldsFarm.stock[_foodPosition].amount + "</i>" + "kg " + OldMacDonaldsFarm.stock[_foodPosition].name + " left.";
            let eating = document.querySelector("#eating");
            eating.innerHTML = "The " + this.type + " " + this.name + " eats " + OldMacDonaldsFarm.stock[_foodPosition].name + ".";
            //console.log("The " + this.type + "" + this.name + " eats" + stock[_foodPosition].name + ".");
        }
    }
    OldMacDonaldsFarm.Animal = Animal;
})(OldMacDonaldsFarm || (OldMacDonaldsFarm = {}));
//# sourceMappingURL=Animal.js.map