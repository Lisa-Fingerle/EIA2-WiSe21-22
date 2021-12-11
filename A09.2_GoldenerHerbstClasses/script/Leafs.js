"use strict";
var GoldenerHerbst_Classes;
(function (GoldenerHerbst_Classes) {
    class LeafOrange {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new GoldenerHerbst_Classes.Vector(0, 0);
            this.velocity = new GoldenerHerbst_Classes.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        move(_timeslice) {
            let offset = new GoldenerHerbst_Classes.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += GoldenerHerbst_Classes.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += GoldenerHerbst_Classes.crc2.canvas.height;
            if (this.position.x > GoldenerHerbst_Classes.crc2.canvas.width)
                this.position.x -= GoldenerHerbst_Classes.crc2.canvas.width;
            if (this.position.y > GoldenerHerbst_Classes.crc2.canvas.height)
                this.position.y -= GoldenerHerbst_Classes.crc2.canvas.height;
        }
    }
    GoldenerHerbst_Classes.LeafOrange = LeafOrange;
    function drawLeafOrange() {
        let stepMin = 20;
        let stepMax = 50;
        let x = 0;
        let position = GoldenerHerbst_Classes.crc2.canvas.height * GoldenerHerbst_Classes.backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Classes.crc2.save();
            GoldenerHerbst_Classes.crc2.translate(x, y + (position + 50));
            GoldenerHerbst_Classes.crc2.beginPath();
            GoldenerHerbst_Classes.crc2.ellipse(-5, 10, 5, 20, 10, 16, 40);
            GoldenerHerbst_Classes.crc2.closePath();
            GoldenerHerbst_Classes.crc2.fillStyle = "#a43e00";
            GoldenerHerbst_Classes.crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            GoldenerHerbst_Classes.crc2.restore();
        } while (x < GoldenerHerbst_Classes.crc2.canvas.width);
    }
    function drawLeafRed() {
        let stepMin = 20;
        let stepMax = 50;
        let x = 0;
        let position = GoldenerHerbst_Classes.crc2.canvas.height * GoldenerHerbst_Classes.backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Classes.crc2.save();
            GoldenerHerbst_Classes.crc2.translate(x, y + (position + 50));
            GoldenerHerbst_Classes.crc2.beginPath();
            GoldenerHerbst_Classes.crc2.ellipse(0, 0, 11, 20, 10, 16, 40);
            GoldenerHerbst_Classes.crc2.closePath();
            GoldenerHerbst_Classes.crc2.fillStyle = "#d30000";
            GoldenerHerbst_Classes.crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            GoldenerHerbst_Classes.crc2.restore();
        } while (x < GoldenerHerbst_Classes.crc2.canvas.width);
    }
})(GoldenerHerbst_Classes || (GoldenerHerbst_Classes = {}));
//# sourceMappingURL=Leafs.js.map