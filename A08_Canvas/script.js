"use strict";
//Zusammengearbeitet mit Debbie, Asya, Christina
var A08_Canvas;
(function (A08_Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let button;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        console.log(crc2);
        crc2 = canvas.getContext("2d");
        button = document.querySelector("#button");
        button.addEventListener("click", reloadButton);
        for (let i = 0; i < 50; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            drawCircleBlue(x, y);
            let a = Math.floor(Math.random() * 800);
            let b = Math.floor(Math.random() * 600);
            drawCirclePink(a, b);
            let c = Math.floor(Math.random() * 800);
            let d = Math.floor(Math.random() * 600);
            drawLines1(c, d);
            let e = Math.floor(Math.random() * 800);
            let f = Math.floor(Math.random() * 800);
            drawTriangle(e, f);
        }
    }
    function reloadButton() {
        window.location.reload();
    }
    function generateColor() {
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            +
                Math.floor(Math.random() * 255) + ")";
        return color;
    }
    function drawLines1(_c, _d) {
        crc2.beginPath();
        crc2.moveTo(_c, _d);
        crc2.quadraticCurveTo(300, 200, 400, 300);
        crc2.strokeStyle = generateColor();
        crc2.stroke();
    }
    function drawTriangle(_e, _f) {
        crc2.beginPath();
        crc2.moveTo(_e, _f);
        crc2.lineTo(_e, _f + 40);
        crc2.lineTo(_e + 40, _f + 10);
        crc2.fillStyle = generateColor();
        crc2.lineWidth = 1;
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawCircleBlue(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#B9BFFF";
        crc2.strokeStyle = "#B9BFFF";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
    function drawCirclePink(_a, _b) {
        crc2.beginPath();
        crc2.arc(_a, _b, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB8E6";
        crc2.strokeStyle = "#FFB8E6";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
})(A08_Canvas || (A08_Canvas = {}));
//# sourceMappingURL=script.js.map