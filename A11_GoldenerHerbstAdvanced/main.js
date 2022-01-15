"use strict";
/*
Aufgabe: <Aufgabe_10.2>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <08.01.2022>
Quellen: <Zusammengearbeitet mit Debbie, Tini, Asya,>
*/
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
    GoldenerHerbst_Advanced.goldenCut = 0.62;
    let moveable = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        GoldenerHerbst_Advanced.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        canvas.addEventListener("mousedown", placeNuts);
        createBackground();
        createLeafs(15);
        createSquirrels(5);
        createCloud();
        imageData = GoldenerHerbst_Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = GoldenerHerbst_Advanced.crc2.canvas.height * GoldenerHerbst_Advanced.goldenCut;
        let posMountains = { x: 0, y: horizon };
        GoldenerHerbst_Advanced.drawBackground();
        GoldenerHerbst_Advanced.drawSun({ x: 870, y: 105 });
        GoldenerHerbst_Advanced.drawMountains(posMountains, 75, 150, "grey", "white");
        GoldenerHerbst_Advanced.drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        GoldenerHerbst_Advanced.drawEvergreen(-30, -50, .6, .9);
    }
    function createLeafs(_nLeaf) {
        for (let index = 0; index < _nLeaf; index++) {
            let randomScaleY = 0.1 + Math.random() * (0.1 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new GoldenerHerbst_Advanced.Leaf({ x: GoldenerHerbst_Advanced.crc2.canvas.width, y: GoldenerHerbst_Advanced.crc2.canvas.height * -0.1 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    GoldenerHerbst_Advanced.createLeafs = createLeafs;
    function createSquirrels(_nSquirrel) {
        for (let index = 0; index < _nSquirrel; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new GoldenerHerbst_Advanced.Squirrel({ x: GoldenerHerbst_Advanced.crc2.canvas.width / 2, y: GoldenerHerbst_Advanced.crc2.canvas.height * 1 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new GoldenerHerbst_Advanced.Cloud({ x: GoldenerHerbst_Advanced.crc2.canvas.width * .7, y: GoldenerHerbst_Advanced.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Advanced.Cloud({ x: GoldenerHerbst_Advanced.crc2.canvas.width * .10, y: GoldenerHerbst_Advanced.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Advanced.Cloud({ x: GoldenerHerbst_Advanced.crc2.canvas.width * .5, y: GoldenerHerbst_Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new GoldenerHerbst_Advanced.Cloud({ x: GoldenerHerbst_Advanced.crc2.canvas.width * .2, y: GoldenerHerbst_Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        GoldenerHerbst_Advanced.crc2.clearRect(0, 0, GoldenerHerbst_Advanced.crc2.canvas.width, GoldenerHerbst_Advanced.crc2.canvas.height);
        GoldenerHerbst_Advanced.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
            moveable[index].draw();
        }
    }
    function placeNuts(_event) {
        moveable.push(new GoldenerHerbst_Advanced.Nut({ x: GoldenerHerbst_Advanced.crc2.canvas.width / 2, y: GoldenerHerbst_Advanced.crc2.canvas.height * 1 }, { x: 0.17, y: 0.1 }));
    }
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=main.js.map