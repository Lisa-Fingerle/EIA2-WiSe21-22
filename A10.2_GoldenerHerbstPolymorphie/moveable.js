"use strict";
var GoldenerHerbst_Polymorphie;
(function (GoldenerHerbst_Polymorphie) {
    class Moveable {
        posX;
        posY;
        velocityX;
        velocityY;
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        draw() {
            //
        }
        update() {
            //
        }
    }
    GoldenerHerbst_Polymorphie.Moveable = Moveable;
})(GoldenerHerbst_Polymorphie || (GoldenerHerbst_Polymorphie = {}));
//# sourceMappingURL=moveable.js.map