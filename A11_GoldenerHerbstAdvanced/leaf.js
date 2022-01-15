"use strict";
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
    class Leaf extends GoldenerHerbst_Advanced.Moveable {
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
            GoldenerHerbst_Advanced.crc2.save();
            GoldenerHerbst_Advanced.crc2.translate(this.posX, this.posY);
            GoldenerHerbst_Advanced.crc2.beginPath();
            GoldenerHerbst_Advanced.crc2.ellipse(0, 0, 11, 20, 10, 16, 40);
            GoldenerHerbst_Advanced.crc2.closePath();
            GoldenerHerbst_Advanced.crc2.fillStyle = "#d30000";
            GoldenerHerbst_Advanced.crc2.fill();
            GoldenerHerbst_Advanced.crc2.restore();
        }
        update() {
            if (this.posX > GoldenerHerbst_Advanced.crc2.canvas.width || this.posX < 0) {
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
            this.counter++;
            this.draw();
        }
    }
    GoldenerHerbst_Advanced.Leaf = Leaf;
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=leaf.js.map