"use strict";
/*
Aufgabe: <Aufgabe_08.2 Goldener Herbst>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <26.11.2021>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Christina >
*/
//Code ist noch nicht ganz fertig, Blätter fehlen noch und Eichhörnchen müssen neu positioniert werden
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
        drawGreenTree({ x: 0, y: 375 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 3; index++) {
            drawEvergreen({ x: Math.random() * 500, y: Math.random() * 20 });
        }
        drawBush({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);
        for (let index = 0; index < 6; index++) {
            drawSquirrel({ x: Math.random() * 1000, y: Math.random() * 400 });
        }
        drawLeafs1({ x: 130, y: 350 }, { x: 100, y: 100 }, 250, 300);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");
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
    function drawEvergreen(_position) {
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
    function drawGreenTree(_position2, _size2, _min2, _max2) {
        let stepMin = 50;
        let stepMax = 100;
        let x = -10;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min2 - Math.random() * (_max2 - _min2);
            crc2.save();
            crc2.translate(x, y + (position + 20));
            //Trunk
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
            //Leafs
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
    function drawBush(_position, _size, _min, _max) {
        let stepMin = 350;
        let stepMax = 50;
        let x = 0;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 50));
            let nParticles = 100;
            let radiusParticle = 10;
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
    function drawSquirrel(_position) {
        crc2.resetTransform();
        crc2.save();
        crc2.translate(_position.x, _position.y);
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
        let r3 = 15;
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
    }
    function drawLeafs1(_position, _size, _min, _max) {
        let stepMin = 350;
        let stepMax = 50;
        let x = 0;
        let position = crc2.canvas.height * backgroundPosition;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 50));
            //stem
            /*
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.lineTo(12, 12);
            crc2.lineTo(7, 16);
            crc2.lineTo(5, 18);
            crc2.lineTo(10, 10);

            crc2.stroke();

            crc2.closePath();
            crc2.fill();*/
            //Leaf
            crc2.beginPath();
            crc2.ellipse(-5, 10, 5, 15, 10, 16, 40);
            crc2.closePath();
            crc2.fillStyle = "#446C31";
            crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=script.js.map