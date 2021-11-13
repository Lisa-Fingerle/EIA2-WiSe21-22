"use strict";
var L03_Sequenzmemory_Settings;
(function (L03_Sequenzmemory_Settings) {
    window.addEventListener("load", handleLoad);
    let sizeCards;
    let backgroundColor;
    let cardsColor;
    let fontColor;
    let fontType;
    let gameTime;
    let showCardsTime = 2;
    let input;
    let formData;
    let sequence = [];
    function handleLoad() {
        let start = document.querySelector("#start");
        formData = new FormData(document.forms[0]);
        console.log(formData);
        start.addEventListener("click", createGame);
    }
    function createGame() {
        let form = document.querySelector("form");
        form.classList.add("is-hidden");
        //allCards = <HTMLDivElement>document.getElementById("#cards");
        sequence = input.split("");
        for (let i = 0; i < input.length; i++) {
            let random = Math.floor(Math.random() * sequence.length);
            let card = document.createElement("div");
            card.classList.add("column");
            card.id = sequence.splice(random, 1).join();
            let test = ("<div class='card'>" + card.id + "</div>");
            card.innerHTML = test;
        }
        //console.log("Game starts");
        startGame();
        input = formData.get("Text"); //funktioniert nicht ganz
        console.log(input);
    }
    function startGame() {
        setInterval(checkTime, 1000);
        console.log("Start");
    }
    function winMessage() {
        alert("You won!");
    }
    function wrongMessage() {
        alert("You lost");
    }
    function checkTime() {
    }
})(L03_Sequenzmemory_Settings || (L03_Sequenzmemory_Settings = {}));
//# sourceMappingURL=script.js.map