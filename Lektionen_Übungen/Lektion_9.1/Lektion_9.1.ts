namespace Lektion_09_1 {
    
    class Vector {
        x: number = 0; //bei deklaration = 0 werden in Consolenausgabe nichtmehr NaN angezeigt, sonder x/y = 0
        y: number = 0;


        constructor(_x: number, _y: number) {  //es werden direkt die richtigen Werte für x und y mitgegeben
            this.set(_x, _y);    
        }
        
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void { //nennt man Methode (Funktionsaufruf innerhalb von einer Klasse)
            this.x *= _factor; //Referenz auf ein Objekt 
            this.y *= _factor; //factor hat Wert 2
        }  //Was macht scale in diesem Zusammenhang? //Was macht this?

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }

    let v1: Vector = new Vector(10, -3); //new ruft Cosntructor auf, der die Objekte der Klasse "baut"
    //ist wichtig, wenn weitere Infos zum Bau einfließen sollen
    
    v1.scale(2); //nimmt die Werte des Vektors * 2 -> Consolenausgabe: Vector {x: 20, y: -6}
    console.log(v1);  //Vector x: NaN, y: NaN


}



