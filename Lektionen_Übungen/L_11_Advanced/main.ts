namespace Advanced {
    
    window.addEventListener("load", handleLoad);

    let objekt: AdvancedSubClass = new AdvancedSubClass;

    function handleLoad(): void {
        
        objekt.method(); //Methode, die an das Objekt gebunden ist wird aufgerufen
        AdvancedSuperClass.saySomething();
    }
    

}