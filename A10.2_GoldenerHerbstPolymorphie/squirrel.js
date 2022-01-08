"use strict";
var GoldenerHerbst_Polymorphie;
(function (GoldenerHerbst_Polymorphie) {
    class Squirrel extends GoldenerHerbst_Polymorphie.Moveable {
        randomScaleX;
        randomScaleY;
        randomNumber = (Math.floor(Math.random() * 800) + 100);
        counter = 0;
        constructor(_position, _velocity, _randomScale) {
            super(_position, _velocity);
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
        }
        draw() {
            GoldenerHerbst_Polymorphie.crc2.save();
            GoldenerHerbst_Polymorphie.crc2.translate(this.posX, this.posY);
            GoldenerHerbst_Polymorphie.crc2.fillStyle = "#422B1B";
            //Arm 1
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(70, 85, 5, 15, 20, 16, 40);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Body
            GoldenerHerbst_Polymorphie.crc2.save();
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(100, 90, 20, 30, -10, 20, 40);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Arm 2
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(74, 95, 5, 15, 10, 16, 40);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Head
            let r3 = 15;
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.arc(80, 60, r3, 0, 2 * Math.PI);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Ear
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.moveTo(70, 50);
            GoldenerHerbst_Polymorphie.crc2.lineTo(75, 35);
            GoldenerHerbst_Polymorphie.crc2.lineTo(80, 50);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Ear right
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.moveTo(80, 50);
            GoldenerHerbst_Polymorphie.crc2.lineTo(85, 35);
            GoldenerHerbst_Polymorphie.crc2.lineTo(90, 50);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Leg 1
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(85, 115, 5, 15, 20, 16, 40);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Leg 2
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(100, 118, 5, 15, 20, 16, 40);
            GoldenerHerbst_Polymorphie.crc2.closePath();
            GoldenerHerbst_Polymorphie.crc2.fill();
            GoldenerHerbst_Polymorphie.crc2.restore();
            //Tail
            GoldenerHerbst_Polymorphie.crc2.beginPath();
            GoldenerHerbst_Polymorphie.crc2.ellipse(125, 95, 15, 30, 10, 10, 40);
            GoldenerHerbst_Polymorphie.crc2.fill();
            //Eye
            //Mouth
            GoldenerHerbst_Polymorphie.crc2.restore();
        }
        update() {
            if (this.posX > GoldenerHerbst_Polymorphie.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > GoldenerHerbst_Polymorphie.crc2.canvas.height || this.posY < GoldenerHerbst_Polymorphie.crc2.canvas.height * 0.65) {
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
            this.counter++;
            this.draw();
        }
    }
    GoldenerHerbst_Polymorphie.Squirrel = Squirrel;
})(GoldenerHerbst_Polymorphie || (GoldenerHerbst_Polymorphie = {}));
//# sourceMappingURL=squirrel.js.map