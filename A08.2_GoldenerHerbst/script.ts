
/*
Aufgabe: <Aufgabe_08.2 Goldener Herbst>
Name: <Lisa Fingerle>
Matrikel: <268510>
Datum: <26.11.2021>
Quellen: <Zusammengearbeitet mit Debbie, Asya, Christina >
*/

//Code ist noch nicht ganz fertig, Blätter fehlen noch und Eichhörnchen müssen neu positioniert werden

namespace GoldenerHerbst {

    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let backgroundPosition: number = 0.6;


    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * backgroundPosition;
        let posMountains: Vector = { x: 0, y: horizon };


        drawBackground();
        
        drawSquirrels({ x: 1, y: 1 }, 15, 80);
        drawSun({ x: 870, y: 105 });
        drawCloud({ x: 300, y: 90 }, { x: 150, y: 35 });
        drawCloud({ x: 600, y: 30 }, { x: 100, y: 40 });
        drawCloud({ x: 100, y: 30 }, { x: 200, y: 40 });
        
        drawMountains(posMountains, 75, 150, "grey", "white");
        drawMountains(posMountains, 50, 110, "grey", "lightgrey");
        
        drawEvergreen(-30, -50, .6, .9);
        
        drawGreenTree({ x: 130, y: 350 }, { x: 100, y: 100 });
        
        drawLeafOrange({ x: 1000, y: 350 }, { x: 100, y: 100 }, 1000, 300);
        drawLeafRed({ x: 1000, y: 350 }, { x: 100, y: 100 }, 1000, 300);
        
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
        
        //crc2.scale(treeSize, treeSize);
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

    
    function drawBush(_position: Vector, _size: Vector, _min: number, _max: number): void {
        let stepMin: number = 350;
        let stepMax: number = 50;
        let x: number = 0;
        let position: number = crc2.canvas.height * backgroundPosition;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 50));



            let nParticles: number = 100;
            let radiusParticle: number = 10;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#446C31");
            gradient.addColorStop(1, "#C3AE2E");

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
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();


        }

        while (x < crc2.canvas.width);

    }

    

    function drawSquirrels(_position: Vector, _min: number, _max: number): void {

        let stepMin: number = 150;
        let stepMax: number = 500;
        let x: number = 0;
        let position: number = crc2.canvas.height * backgroundPosition;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 100));

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
            let r3: number = 15;
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

            //Eye
            
            //Mouth


            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();

        } while (x < crc2.canvas.width);

    }

    function drawLeafOrange(_position: Vector, _size: Vector, _min: number, _max: number): void {

        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;
        let position: number = crc2.canvas.height * backgroundPosition;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 50));

            crc2.beginPath();
            crc2.ellipse(-5, 10, 5, 20, 10, 16, 40);
            crc2.closePath();
            crc2.fillStyle = "#a43e00";
            crc2.fill();

            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();

        }
        while (x < crc2.canvas.width);

    }

    function drawLeafRed(_position: Vector, _size: Vector, _min: number, _max: number): void {
        let stepMin: number = 20;
        let stepMax: number = 50;
        let x: number = 0;
        let position: number = crc2.canvas.height * backgroundPosition;

        do {
            let y: number = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (position + 50));

            crc2.beginPath();
            crc2.ellipse (0, 0, 11, 20, 10, 16, 40);
            crc2.closePath();
            crc2.fillStyle = "#d30000";
            crc2.fill();

            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();

            

        }
        while (x < crc2.canvas.width);
    }

}


