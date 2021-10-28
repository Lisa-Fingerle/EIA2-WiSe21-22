//Gruppenarbeit mit Debbie, Asya, Christina

namespace L02_EventInspector {


    window.addEventListener("load", handleLoad);

    let xPosition: number;
    let yPosition: number;

    function handleLoad(): void {

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


    function setInfoBox(_event: MouseEvent): void {
        xPosition = _event.x;
        yPosition = _event.y;
        document.getElementById("span").innerHTML = "Position X: " + xPosition + " Position Y: " + yPosition;
        document.getElementById("span").style.left = _event.x + "px";
        document.getElementById("span").style.top = _event.y + "px";
        
    }


    function logInfo(_event: Event): void {
        console.log("Target: " + _event.target);
        console.log("CurrentTarget: " + _event.currentTarget);
        console.log("Type Event: " + _event.type);
        console.log(_event);
    }

}