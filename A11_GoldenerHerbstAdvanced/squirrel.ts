namespace GoldenerHerbst_Advanced {

    export class Squirrel extends Moveable {
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

            crc2.fillStyle = "#422B1B";

            //Arm 1
            crc2.beginPath();
            crc2.ellipse(70, 85, 5, 15, 20, 16, 40);
            crc2.closePath();
            crc2.fill();

            //Body
            crc2.save();
            crc2.beginPath();
            crc2.ellipse(100, 90, 20, 30, -10, 20, 40);
            crc2.closePath();
            crc2.fill();

            //Arm 2
            crc2.beginPath();
            crc2.ellipse(74, 95, 5, 15, 10, 16, 40);
            crc2.closePath();
            crc2.fill();

            //Head
            let r3: number = 15;
            crc2.beginPath();
            crc2.arc(80, 60, r3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Ear
            crc2.beginPath();
            crc2.moveTo(70, 50);
            crc2.lineTo(75, 35);
            crc2.lineTo(80, 50);
            crc2.closePath();
            crc2.fill();

            //Ear right
            crc2.beginPath();
            crc2.moveTo(80, 50);
            crc2.lineTo(85, 35);
            crc2.lineTo(90, 50);
            crc2.closePath();
            crc2.fill();

            //Leg 1
            crc2.beginPath();
            crc2.ellipse(85, 115, 5, 15, 20, 16, 40);
            crc2.closePath();
            crc2.fill();

            //Leg 2
            crc2.beginPath();
            crc2.ellipse(100, 118, 5, 15, 20, 16, 40);
            crc2.closePath();
            crc2.fill();
            crc2.restore();

            //Tail
            crc2.beginPath();
            crc2.ellipse(125, 95, 15, 30, 10, 10, 40);
            crc2.fill();

            //Eye
            
            //Mouth

            crc2.restore();
        }

        public update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }

            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
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