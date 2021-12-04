namespace L09_Asteroids {
    export class Vector {
        x: number; 
        y: number; //Eigenschaften x, y 

        constructor(_x: number, _y: number) { //x, y können besetzt werden mit set 
            this.set(_x, _y); 
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void { //Vektor kann scaliert werden um einen factor
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void { //Vektoren werden aufaddiert
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void { //Vektor mit zufälliger Richtung in einem bestimmten Random bereich
            let length: number = _minLength + Math.random() * (_maxLength - _minLength); 
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
}