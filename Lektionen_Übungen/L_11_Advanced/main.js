"use strict";
var Advanced;
(function (Advanced) {
    window.addEventListener("load", handleLoad);
    let objekt = new Advanced.AdvancedSubClass;
    function handleLoad() {
        objekt.method(); //Methode, die an das Objekt gebunden ist wird aufgerufen
        Advanced.AdvancedSuperClass.saySomething();
    }
})(Advanced || (Advanced = {}));
//# sourceMappingURL=main.js.map