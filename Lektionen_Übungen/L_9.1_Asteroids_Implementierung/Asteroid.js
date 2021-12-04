"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        position;
        velocity;
        type;
        size;
        constructor(_size, _position) {
            console.log("Asteroid constructor");
            if (_position)
                this.position = _position; //die Position des Asteroids
            else
                this.position = new L09_Asteroids.Vector(0, 0); //neuer Vektor wird kreiert
            this.velocity = new L09_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200); //Schnelligkeit 100 px/s - 200px/s
            //einen von 4 Typen (0, 1, 2, 3) -> Aus Array
            this.type = Math.floor(Math.random() * 4); //eine Zahl zwischen 0 und 4, Math.floor macht ganze Zahlen, ohne Kommastellen
            this.size = _size; //Größe des Asteroids soll übernommen werden
        }
        move(_timeslice) {
            // console.log("Asteroid move");
            let offset = new L09_Asteroids.Vector(this.velocity.x, this.velocity.y); //Weg, der sich der Asteroid bewegen soll -> Kopie des Velocity Vektors
            offset.scale(_timeslice);
            this.position.add(offset); //Verschiebung auf die Position des Asteroids addieren
            //Asteroiden werden immer rechts/links aus dem Bild rausgehen und werden auf der anderen Seite wieder angezeigt
            if (this.position.x < 0)
                this.position.x += L09_Asteroids.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += L09_Asteroids.crc2.canvas.height;
            if (this.position.x > L09_Asteroids.crc2.canvas.width)
                this.position.x -= L09_Asteroids.crc2.canvas.width;
            if (this.position.y > L09_Asteroids.crc2.canvas.height)
                this.position.y -= L09_Asteroids.crc2.canvas.height;
        }
        draw() {
            // console.log("Asteroid draw");
            L09_Asteroids.crc2.save(); //alte Transformation soll abgespeichert werden
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.scale(this.size, this.size); //Skalierung in Horizontale und Vertikale
            L09_Asteroids.crc2.translate(-50, -50); //Verschiebung um 50 nach links und rechts, damit der Asteroid in der Ecke liegt
            L09_Asteroids.crc2.stroke(L09_Asteroids.asteroidPaths[this.type]); //Pfad, aus aseroid Paths -> liegen in dem Array
            L09_Asteroids.crc2.restore();
        }
        isHit(_hotspot) {
            let hitsize = 50 * this.size;
            let difference = new L09_Asteroids.Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
            return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map