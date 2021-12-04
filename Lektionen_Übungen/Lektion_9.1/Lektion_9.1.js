"use strict";
var Lektion_09_1;
(function (Lektion_09_1) {
    class Vector {
        x = 0; //bei deklaration = 0 werden in Consolenausgabe nichtmehr NaN angezeigt, sonder x/y = 0
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor; //Referenz auf ein Objekt 
            this.y *= _factor; //factor hat Wert 2
        } //Was macht scale in diesem Zusammenhang? //Was macht this?
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector(10, -3); //new ruft Cosntructor auf, der die Objekte der Klasse "baut"
    //ist wichtig, wenn weitere Infos zum Bau einfließen sollen
    v1.scale(2); //nimmt die Werte des Vektors * 2 -> Consolenausgabe: Vector {x: 20, y: -6}
    console.log(v1); //Vector x: NaN, y: NaN
})(Lektion_09_1 || (Lektion_09_1 = {}));
//# sourceMappingURL=Lektion_9.1.js.map