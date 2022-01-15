"use strict";
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
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
    }
    GoldenerHerbst_Advanced.Moveable = Moveable;
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=moveable.js.map