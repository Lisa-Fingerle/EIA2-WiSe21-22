"use strict";
//transformation verketten, dann mit Transform rausgehen -> Hierarchische Struktur
//Eichhörnchen aus einzelnen Teilen zusammensetzen
/*
Aufgabe: <Aufgabe_08.2 Goldener Herbst>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Christina >
*/
var GoldenerHerbst;
(function (GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let backgroundPosition = 0.5;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * backgroundPosition;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 870, y: 55 });
        drawCloud({ x: 300, y: 90 }, { x: 250, y: 75 });
        drawMountains(posMountains, 75, 150, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        drawTrees2({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        drawTrees1({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 3; index++) {
            drawTrees3({ x: Math.random() * 500, y: Math.random() * 20 });
        }
        drawSquirrel({ x: Math.random() * 1000, y: 250 + Math.random() * 100 });
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(backgroundPosition, "#E7F3FF");
        gradient.addColorStop(1, "#3CA651");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 100;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 45;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        let stepMin = 50;
        let stepMax = 50;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawTrees1(_position, _size, _min, _max) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            crc2.beginPath();
            crc2.moveTo(140, 400);
            crc2.lineTo(140, 400);
            crc2.lineTo(120, 400);
            crc2.lineTo(120, 340);
            crc2.lineTo(140, 340);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            let nParticles = 80;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size.x;
                let y = -(Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    /*function drawTrees2(_position: Vector, _size: Vector): void {
        crc2.beginPath();
        crc2.moveTo(100, 100);
        crc2.lineTo(200, 200);
        crc2.stroke();
    }*/
    function drawTrees2(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            crc2.beginPath();
            crc2.moveTo(0, 430);
            crc2.lineTo(0, 430);
            crc2.lineTo(-20, 430);
            crc2.lineTo(-20, 380);
            crc2.lineTo(0, 380);
            crc2.fillStyle = "#45311D";
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.fill();
            let nParticles = 70;
            let radiusParticle = 20;
            let particle = new Path2D();
            let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#447C31");
            crc2.save();
            crc2.translate(_position2.x, _position2.y);
            crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x = (Math.random() - 0.5) * _size2.x;
                let y = -(Math.random() * _size2.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawTrees3(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(300, 330);
        crc2.lineTo(300, 330);
        crc2.lineTo(280, 330);
        crc2.lineTo(280, 280);
        crc2.lineTo(300, 280);
        crc2.fillStyle = "#45311D";
        crc2.lineWidth = 1;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(280, 280);
        crc2.lineTo(280, 280);
        crc2.lineTo(220, 280);
        crc2.lineTo(260, 245);
        crc2.lineTo(230, 245);
        crc2.lineTo(260, 215);
        crc2.lineTo(245, 215);
        crc2.lineTo(290, 175); //Spitze
        crc2.lineTo(335, 215);
        crc2.lineTo(320, 215);
        crc2.lineTo(350, 245);
        crc2.lineTo(320, 245);
        crc2.lineTo(370, 280);
        crc2.lineTo(280, 280);
        crc2.fillStyle = "#1F320B";
        crc2.fill();
        crc2.closePath();
        crc2.restore();
    }
    function drawSquirrel(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.save();
        crc2.rotate(-0.3);
        crc2.beginPath();
        crc2.moveTo(-5, -5);
        crc2.lineTo(-10, -15);
        crc2.lineTo(-20, -20);
        crc2.lineTo(-16, -25);
        crc2.lineTo(-24, -30);
        crc2.lineTo(-20, -35);
        crc2.lineTo(-28, -40);
        crc2.lineTo(-24, -45);
        crc2.lineTo(-20, -50);
        crc2.lineTo(0, -50);
        crc2.lineTo(-5, -45);
        crc2.lineTo(3, -40);
        crc2.lineTo(0, -35);
        crc2.lineTo(5, -30);
        crc2.lineTo(10, -25);
        crc2.lineTo(5, -20);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map