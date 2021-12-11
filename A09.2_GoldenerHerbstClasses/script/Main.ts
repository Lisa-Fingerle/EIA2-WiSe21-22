/*
Aufgabe: <Aufgabe_09.2 Goldener Herbst_CLasses>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <11.12.2021>
Quellen: <Jirkas Code zu Asteroids>
*/

//Leider konnte ich die Implementierung aus Zeitgründen nicht wirklich machen.
//einiges habe ich aus Jirkas Code genommen und ein bisschen rumprobiert.

namespace GoldenerHerbst_Classes {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let backgroundPosition: number = 0.6;
    
    
    let leafs: Leaf[] = [];


    export function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        let horizon: number = crc2.canvas.height * backgroundPosition;
        let posMountains: Vector = { x: 0, y: horizon };
        
        

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

        

    
        

    


    function update(): void {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let leaf of leafs) {
            leaf.move(1 / 50);
            leaf.draw();
        }
    }
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#A7D3FF");
        gradient.addColorStop(backgroundPosition, "#DC7726");
        gradient.addColorStop(1, "#104210");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
        

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let nParticles: number = 30;
        let radiusParticle: number = 40;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let r1: number = 10;
        let r2: number = 80;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }


    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 50;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }


    function drawEvergreen(_min: number, _max: number, _minSize: number, _maxSize: number): void {

        let stepMin: number = 40;
        let stepMax: number = 70;
        let x: number = 0;
        let horizon: number = crc2.canvas.height * backgroundPosition;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 20));

            let yTree1: number = -30;
            let yTree2: number = -130;
            let treeColor: string[] = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize: number = _minSize + Math.random() * (_maxSize - _minSize);

            crc2.scale(treeSize, treeSize);
            crc2.fillStyle = "#2f2011";
            crc2.fillRect(0, 0, 22, -40);

            for (let z: number = 0; z < 3; z++) {
                crc2.beginPath();
                crc2.moveTo(-50, yTree1);
                crc2.lineTo(72, yTree1);
                crc2.lineTo(11, yTree2);
                crc2.closePath();
                crc2.fillStyle = treeColor[z];
                crc2.fill();

                yTree1 += -30;
                yTree2 += -30;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }

    function drawGreenTree(_position: Vector, _size: Vector): void {
        
        
        crc2.fillStyle = "#2f2011";
        crc2.fillRect(110, 350, 22, 40);

        let nParticles: number = 70;
        let radiusParticle: number = 20;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "#446C31");
        gradient.addColorStop(1, "#447C31");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();

        }

    }

    
    

    

    
}

