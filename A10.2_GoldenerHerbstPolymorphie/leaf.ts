namespace GoldenerHerbst_Polymorphie {

    export class Leaf extends Moveable {
        public randomScaleX: number;
        public randomScaleY: number;
        public randomNumber: number = (Math.floor(Math.random() * 800) + 100);
        public counter: number = 0;

        constructor( _position: Vector, _velocity: Vector, _randomScale: Vector) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.posX, this.posY);

            crc2.beginPath();
            crc2.ellipse (0, 0, 11, 20, 10, 16, 40);
            crc2.closePath();
            crc2.fillStyle = "#d30000";
            crc2.fill();
            
            crc2.restore();
            
        }

        public update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }


            if (this.counter == this.randomNumber) {
                //this.velocityX = -this.velocityX;
                //this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }

            

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter ++;
            this.draw();
        }
    }

    
}



