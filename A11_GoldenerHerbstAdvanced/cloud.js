"use strict";
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
    class Cloud extends GoldenerHerbst_Advanced.Moveable {
        constructor(_position, _velocity) {
            super(_position, _velocity);
        }
        draw() {
            let gradient = GoldenerHerbst_Advanced.crc2.createLinearGradient(0, 0, 0, GoldenerHerbst_Advanced.crc2.canvas.height);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(0.8, "grey");
            GoldenerHerbst_Advanced.crc2.save();
            GoldenerHerbst_Advanced.crc2.translate(this.posX, this.posY);
            GoldenerHerbst_Advanced.crc2.scale(0.6, 0.6);
            GoldenerHerbst_Advanced.crc2.beginPath();
            GoldenerHerbst_Advanced.crc2.moveTo(-115, -20);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(-155, 0, -155, 50, -55, 50);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(-35, 80, 35, 80, 55, 50);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(135, 50, 135, 20, 105, 0);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(165, -60, 85, -70, 55, -50);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(35, -95, -35, -80, -35, -50);
            GoldenerHerbst_Advanced.crc2.bezierCurveTo(-85, -95, -135, -80, -115, -20);
            GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
            GoldenerHerbst_Advanced.crc2.fill();
            GoldenerHerbst_Advanced.crc2.closePath();
            GoldenerHerbst_Advanced.crc2.restore();
        }
        update() {
            if (this.posX > GoldenerHerbst_Advanced.crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.posY > GoldenerHerbst_Advanced.crc2.canvas.height * 0.20 || this.posY < 10) {
                this.velocityY = -this.velocityY;
            }
            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.draw();
        }
    }
    GoldenerHerbst_Advanced.Cloud = Cloud;
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=cloud.js.map