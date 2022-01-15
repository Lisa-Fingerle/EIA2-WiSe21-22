namespace Advanced {

    export abstract class AdvancedSuperClass {

        public static method(): void {
            //
        }

        static saySomething(): void {
            console.log("something");
        }

        public abstract newMethod(): void; //braucht keinen Konkreten Körper, da es eine abstrakte ist
        //abstract sorgt dafür, dass alle Subklassen dieser Superklasse eine new Method Methode hat und benutzt
        //jede Subklasse hat dann eine eigene "Version" dieser Methode

         
    

    }

    




}