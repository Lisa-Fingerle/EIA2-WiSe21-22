"use strict";
/*
Aufgabe: <Aufgabe_10.2>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <08.01.2022>
Quellen: <Zusammengearbeitet mit Debbie, Tini, Asya,>
*/
var GoldenerHerbst_Polymorphie;
(function (GoldenerHerbst_Polymorphie) {
    GoldenerHerbst_Polymorphie.goldenCut = 0.62;
    let moveable = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        GoldenerHerbst_Polymorphie.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createLeafs(15);
        createSquirrels(5);
        createCloud();
        imageData = GoldenerHerbst_Polymorphie.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = GoldenerHerbst_Polymorphie.crc2.canvas.height * GoldenerHerbst_Polymorphie.goldenCut;
        let posMountains = { x: 0, y: horizon };
        GoldenerHerbst_Polymorphie.drawBackground();
        GoldenerHerbst_Polymorphie.drawSun({ x: 870, y: 105 });
        GoldenerHerbst_Polymorphie.drawMountains(posMountains, 75, 150, "grey", "white");
        GoldenerHerbst_Polymorphie.drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        GoldenerHerbst_Polymorphie.drawEvergreen(-30, -50, .6, .9);
    }
    function createLeafs(_nLeaf) {
        for (let index = 0; index < _nLeaf; index++) {
            let randomScaleY = 0.1 + Math.random() * (0.1 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new GoldenerHerbst_Polymorphie.Leaf({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * -0.1 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    GoldenerHerbst_Polymorphie.createLeafs = createLeafs;
    function createSquirrels(_nSquirrel) {
        for (let index = 0; index < _nSquirrel; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new GoldenerHerbst_Polymorphie.Squirrel({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width / 2, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * 1 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new GoldenerHerbst_Polymorphie.Cloud({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width * .7, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Polymorphie.Cloud({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width * .10, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Polymorphie.Cloud({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width * .5, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Polymorphie.Cloud({ x: GoldenerHerbst_Polymorphie.crc2.canvas.width * .2, y: GoldenerHerbst_Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        GoldenerHerbst_Polymorphie.crc2.clearRect(0, 0, GoldenerHerbst_Polymorphie.crc2.canvas.width, GoldenerHerbst_Polymorphie.crc2.canvas.height);
        GoldenerHerbst_Polymorphie.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
            moveable[index].draw();
        }
    }
})(GoldenerHerbst_Polymorphie || (GoldenerHerbst_Polymorphie = {}));
//# sourceMappingURL=main.js.map