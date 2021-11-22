

namespace Lektion_08 {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;  //Objekt/Datenstruktur, die Funktionen/methoden mitbringt
    
    
    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        
        console.log(crc2); //Eigenschaften, alle Methoden unter CanvasRenderingContext2D
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        for (let i: number = 0; i < 100; i++ ) { //Dreieck wird 100 mal gezeichnet
            let x: number = Math.random() * 400;
            let y: number = Math.random() * 300;
            drawTriangle(x, y);

        }
    }
        
    function drawTriangle(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 70);
        crc2.lineTo(_x + 80, _y + 35);
    
        crc2.fillStyle = "#ff0000";
        crc2.strokeStyle = "blue";
        crc2.lineWidth = 5;
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

}
        
       
        
        
    




