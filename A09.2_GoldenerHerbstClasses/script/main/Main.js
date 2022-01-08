"use strict";
/*
Aufgabe: <Aufgabe_09.2 Goldener Herbst_CLasses>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <11.12.2021>
Quellen: <Jirkas Code zu Asteroids>
*/
//Leider konnte ich die Implementierung aus Zeitgründen nicht wirklich machen.
//einiges habe ich aus Jirkas Code genommen und ein bisschen rumprobiert.
var GoldenerHerbst_Classes;
(function (GoldenerHerbst_Classes) {
    window.addEventListener("load", handleLoad);
    GoldenerHerbst_Classes.backgroundPosition = 0.6;
    let leafs = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        GoldenerHerbst_Classes.crc2 = canvas.getContext("2d");
        let horizon = GoldenerHerbst_Classes.crc2.canvas.height * GoldenerHerbst_Classes.backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        createPaths();
        window.setInterval(update, 20);
        drawBackground();
        drawSun({ x: 870, y: 105 });
        drawCloud({ x: 300, y: 90 }, { x: 150, y: 35 });
        drawCloud({ x: 600, y: 30 }, { x: 100, y: 40 });
        drawCloud({ x: 100, y: 30 }, { x: 200, y: 40 });
        drawMountains(posMountains, 75, 150, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        drawEvergreen(-30, -50, .6, .9);
        drawGreenTree({ x: 130, y: 350 }, { x: 100, y: 100 });
    }
    GoldenerHerbst_Classes.handleLoad = handleLoad;
    function update() {
        GoldenerHerbst_Classes.crc2.fillRect(0, 0, GoldenerHerbst_Classes.crc2.canvas.width, GoldenerHerbst_Classes.crc2.canvas.height);
        for (let leaf of leafs) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }
    function drawBackground() {
        console.log("Background");
        let gradient = GoldenerHerbst_Classes.crc2.createLinearGradient(0, 0, 0, GoldenerHerbst_Classes.crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(GoldenerHerbst_Classes.backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
        GoldenerHerbst_Classes.crc2.fillStyle = gradient;
        GoldenerHerbst_Classes.crc2.fillRect(0, 0, GoldenerHerbst_Classes.crc2.canvas.width, GoldenerHerbst_Classes.crc2.canvas.height);
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 30;
        let radiusParticle = 40;
        let particle = new Path2D();
        let gradient = GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        GoldenerHerbst_Classes.crc2.save();
        GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Classes.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            GoldenerHerbst_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            GoldenerHerbst_Classes.crc2.translate(x, y);
            GoldenerHerbst_Classes.crc2.fill(particle);
            GoldenerHerbst_Classes.crc2.restore();
        }
        GoldenerHerbst_Classes.crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 10;
        let r2 = 80;
        let gradient = GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        GoldenerHerbst_Classes.crc2.save();
        GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Classes.crc2.fillStyle = gradient;
        GoldenerHerbst_Classes.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        GoldenerHerbst_Classes.crc2.fill();
        GoldenerHerbst_Classes.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        GoldenerHerbst_Classes.crc2.save();
        GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Classes.crc2.beginPath();
        GoldenerHerbst_Classes.crc2.moveTo(0, 0);
        GoldenerHerbst_Classes.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Classes.crc2.lineTo(x, y);
        } while (x < GoldenerHerbst_Classes.crc2.canvas.width);
        GoldenerHerbst_Classes.crc2.lineTo(x, 0);
        GoldenerHerbst_Classes.crc2.closePath();
        let gradient = GoldenerHerbst_Classes.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        GoldenerHerbst_Classes.crc2.fillStyle = gradient;
        GoldenerHerbst_Classes.crc2.fill();
        GoldenerHerbst_Classes.crc2.restore();
    }
    function drawEvergreen(_min, _max, _minSize, _maxSize) {
        let stepMin = 40;
        let stepMax = 70;
        let x = 0;
        let horizon = GoldenerHerbst_Classes.crc2.canvas.height * GoldenerHerbst_Classes.backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            GoldenerHerbst_Classes.crc2.save();
            GoldenerHerbst_Classes.crc2.translate(x, y + (horizon + 20));
            let yTree1 = -30;
            let yTree2 = -130;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            GoldenerHerbst_Classes.crc2.scale(treeSize, treeSize);
            GoldenerHerbst_Classes.crc2.fillStyle = "#2f2011";
            GoldenerHerbst_Classes.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                GoldenerHerbst_Classes.crc2.beginPath();
                GoldenerHerbst_Classes.crc2.moveTo(-50, yTree1);
                GoldenerHerbst_Classes.crc2.lineTo(72, yTree1);
                GoldenerHerbst_Classes.crc2.lineTo(11, yTree2);
                GoldenerHerbst_Classes.crc2.closePath();
                GoldenerHerbst_Classes.crc2.fillStyle = treeColor[z];
                GoldenerHerbst_Classes.crc2.fill();
                yTree1 += -30;
                yTree2 += -30;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            GoldenerHerbst_Classes.crc2.restore();
        } while (x < GoldenerHerbst_Classes.crc2.canvas.width);
    }
    function drawGreenTree(_position, _size) {
        GoldenerHerbst_Classes.crc2.fillStyle = "#2f2011";
        GoldenerHerbst_Classes.crc2.fillRect(110, 350, 22, 40);
        let nParticles = 70;
        let radiusParticle = 20;
        let particle = new Path2D();
        let gradient = GoldenerHerbst_Classes.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#446C31");
        gradient.addColorStop(1, "#447C31");
        GoldenerHerbst_Classes.crc2.save();
        GoldenerHerbst_Classes.crc2.translate(_position.x, _position.y);
        GoldenerHerbst_Classes.crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            GoldenerHerbst_Classes.crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            GoldenerHerbst_Classes.crc2.translate(x, y);
            GoldenerHerbst_Classes.crc2.fill(particle);
            GoldenerHerbst_Classes.crc2.restore();
        }
    }
})(GoldenerHerbst_Classes || (GoldenerHerbst_Classes = {}));
//# sourceMappingURL=Main.js.map