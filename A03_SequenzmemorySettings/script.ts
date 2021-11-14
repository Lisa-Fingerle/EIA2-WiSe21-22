

namespace L03_Sequenzmemory_Settings {

   

    window.addEventListener("load", handleLoad);
    
    let sizeCards: number;
    let backgroundColor: string;
    let cardsColor: string;
    let fontColor: string;
    let fontType: string;
    let gameTime: number;
    let showCardsTime: number = 2;
    let input: string;
    let formData: FormData;
    let sequence: string[] = [];
    

    function handleLoad (): void {
        
        let start: HTMLElement = <HTMLElement>document.querySelector("#start");
        formData = new FormData(document.forms[0]);
        console.log(formData);
        start.addEventListener("click", createGame);
    }


    

    function createGame (): void {
        
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        form.classList.add("is-hidden");
        //allCards = <HTMLDivElement>document.getElementById("#cards");
        sequence =  input.split("");
        
       
        
        //console.log("Game starts");


        startGame();
        input = <string>formData.get("Text"); //funktioniert nicht ganz
        console.log(input);

    }


    


    

    function startGame(): void {
        setInterval(checkTime, 1000);
        
        
        console.log("Start");
        
        
    }

    function winMessage(): void {
        alert("You won!");
    }

    function wrongMessage(): void {
        alert("You lost");
    }

    function checkTime(): void {

    }
}