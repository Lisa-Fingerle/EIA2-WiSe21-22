namespace GoldenerHerbst_Classes {

    export class LeafOrange {

        position: Vector;
        velocity: Vector;
        type: number;
        size: number;

        constructor(_size: number, _position?: Vector) {
            if (_position)
                this.position = _position;
            else
                this.position = new Vector(0, 0);

            this.velocity = new Vector(0, 0);
            this.velocity.random(100, 200);

            this.type = Math.floor(Math.random() * 4);
            this.size = _size;

        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;

        }

        drawLeafOrange(): void {
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

        

        
    }
}
