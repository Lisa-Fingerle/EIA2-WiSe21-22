"use strict";
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
    function drawBackground() {
        let gradient = GoldenerHerbst_Advanced.crc2.createLinearGradient(0, 0, 0, GoldenerHerbst_Advanced.crc2.canvas.height);
        gradient.addColorStop(0, "#9aadb5");
        gradient.addColorStop(GoldenerHerbst_Advanced.goldenCut, "white");
        gradient.addColorStop(0.65, "#204f27");
        gradient.addColorStop(.8, "#4b9157");
        GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        GoldenerHerbst_Advanced.crc2.fillRect(0, 0, GoldenerHerbst_Advanced.crc2.canvas.width, GoldenerHerbst_Advanced.crc2.canvas.height);
    }
    GoldenerHerbst_Advanced.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        GoldenerHerbst_Advanced.crc2.save();
        GoldenerHerbst_Advanced.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Advanced.crc2.beginPath();
        GoldenerHerbst_Advanced.crc2.moveTo(0, 0);
        GoldenerHerbst_Advanced.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Advanced.crc2.lineTo(x, y);
        } while (x < GoldenerHerbst_Advanced.crc2.canvas.width);
        GoldenerHerbst_Advanced.crc2.lineTo(x, 0);
        GoldenerHerbst_Advanced.crc2.closePath();
        let gradient = GoldenerHerbst_Advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        GoldenerHerbst_Advanced.crc2.fill();
        GoldenerHerbst_Advanced.crc2.restore();
    }
    GoldenerHerbst_Advanced.drawMountains = drawMountains;
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 10;
        let r2 = 80;
        let gradient = GoldenerHerbst_Advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        GoldenerHerbst_Advanced.crc2.save();
        GoldenerHerbst_Advanced.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Advanced.crc2.fillStyle = gradient;
        GoldenerHerbst_Advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        GoldenerHerbst_Advanced.crc2.fill();
        GoldenerHerbst_Advanced.crc2.restore();
    }
    GoldenerHerbst_Advanced.drawSun = drawSun;
    function drawEvergreen(_min, _max, _minSize, _maxSize) {
        let stepMin = 40;
        let stepMax = 70;
        let x = 0;
        let horizon = GoldenerHerbst_Advanced.crc2.canvas.height * GoldenerHerbst_Advanced.goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Advanced.crc2.save();
            GoldenerHerbst_Advanced.crc2.translate(x, y + (horizon + 20));
            let yTree1 = -30;
            let yTree2 = -130;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            GoldenerHerbst_Advanced.crc2.scale(treeSize, treeSize);
            GoldenerHerbst_Advanced.crc2.fillStyle = "#2f2011";
            GoldenerHerbst_Advanced.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                GoldenerHerbst_Advanced.crc2.beginPath();
                GoldenerHerbst_Advanced.crc2.moveTo(-50, yTree1);
                GoldenerHerbst_Advanced.crc2.lineTo(72, yTree1);
                GoldenerHerbst_Advanced.crc2.lineTo(11, yTree2);
                GoldenerHerbst_Advanced.crc2.closePath();
                GoldenerHerbst_Advanced.crc2.fillStyle = treeColor[z];
                GoldenerHerbst_Advanced.crc2.fill();
                yTree1 += -30;
                yTree2 += -30;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            GoldenerHerbst_Advanced.crc2.restore();
        } while (x < GoldenerHerbst_Advanced.crc2.canvas.width);
    }
    GoldenerHerbst_Advanced.drawEvergreen = drawEvergreen;
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=background.js.map