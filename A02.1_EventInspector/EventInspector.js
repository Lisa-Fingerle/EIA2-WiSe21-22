"use strict";
//Gruppenarbeit mit Debbie, Asya, Christina
var L02_EventInspector;
(function (L02_EventInspector) {
    window.addEventListener("load", handleLoad);
    let xPosition;
    let yPosition;
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0").addEventListener("click", logInfo);
        document.getElementById("div1").addEventListener("click", logInfo);
        document.getElementById("div0").addEventListener("keyup", logInfo);
        document.getElementById("div1").addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        xPosition = _event.x;
        yPosition = _event.y;
        document.getElementById("span").innerHTML = "Position X: " + xPosition + " Position Y: " + yPosition;
        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
    }
    function logInfo(_event) {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }
})(L02_EventInspector || (L02_EventInspector = {}));
//# sourceMappingURL=EventInspector.js.map