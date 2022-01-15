"use strict";
var Advanced;
(function (Advanced) {
    class AdvancedSubClass extends Advanced.AdvancedSuperClass {
        method() {
            console.log("Hallo!");
        }
        newMethod() {
            console.log("hi!");
        }
    }
    Advanced.AdvancedSubClass = AdvancedSubClass;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=SubClass.js.map