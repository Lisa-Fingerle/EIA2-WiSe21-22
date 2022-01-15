"use strict";
var GoldenerHerbst_Advanced;
(function (GoldenerHerbst_Advanced) {
    class Nut {
        constructor(_position, _velocity) {
        }
        draw() {
            GoldenerHerbst_Advanced.crc2.save();
            GoldenerHerbst_Advanced.crc2.translate(this.posX, this.posY);
            GoldenerHerbst_Advanced.crc2.strokeRect(-2, -2, 2, 2);
            GoldenerHerbst_Advanced.crc2.restore();
        }
        update() {
        }
    }
    GoldenerHerbst_Advanced.Nut = Nut;
})(GoldenerHerbst_Advanced || (GoldenerHerbst_Advanced = {}));
//# sourceMappingURL=nut.js.map