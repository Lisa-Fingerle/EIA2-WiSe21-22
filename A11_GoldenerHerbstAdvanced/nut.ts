namespace GoldenerHerbst_Advanced {
    export class Nut  {
        

        constructor(_position: Vector, _velocity: Vector) {
            
            
        }

        

        draw(): void {
            crc2.save();
            crc2.translate(this.posX, this.posY);
            crc2.strokeRect(-2, -2, 2, 2);
            crc2.restore();
            
        }

        update(): void {
            
        }
    }

}