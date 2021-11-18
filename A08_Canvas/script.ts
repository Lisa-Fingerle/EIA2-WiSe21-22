//Zusammengearbeitet mit Debbie, Asya, Christina

namespace A08_Canvas {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let button: HTMLButtonElement;
    
    

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        console.log(crc2);
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        button = <HTMLButtonElement>document.querySelector("#button");
        button.addEventListener("click", reloadButton);

        for (let i: number = 0; i < 50; i++) {

            let x: number = Math.random() * 800;
            let y: number = Math.random() * 600;
            drawCircleBlue(x, y);

            let a: number = Math.floor(Math.random() * 800);
            let b: number = Math.floor(Math.random() * 600);
            drawCirclePink(a, b);

            let c: number = Math.floor(Math.random() * 800);
            let d: number = Math.floor(Math.random() * 600);
            drawLines1(c, d);
            

            let e: number = Math.floor(Math.random() * 800);
            let f: number = Math.floor(Math.random() * 800);
            drawTriangle(e, f);
        }


    }

    function reloadButton (): void {
        window.location.reload();
    }

    function generateColor(): string {
        var color: string = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","  
        +  
        Math.floor(Math.random() * 255) + ")";
        return color;
        
    }
    
        

    function drawLines1(_c: number, _d: number): void {
        crc2.beginPath();
        crc2.moveTo(_c, _d);
        crc2.quadraticCurveTo(300, 200, 400, 300);
        crc2.strokeStyle = generateColor();  
        crc2.stroke();
        
    }

      
    

    function drawTriangle(_e: number, _f: number): void {
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

    function drawCircleBlue(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "#B9BFFF";
        crc2.strokeStyle = "#B9BFFF";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

    function drawCirclePink(_a: number, _b: number): void {
        crc2.beginPath();
        crc2.arc(_a, _b, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB8E6";
        crc2.strokeStyle = "#FFB8E6";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    }
}

