class StarkClass {
    name: string = "Brandon";
    static castle: string = "Winterfell!";
    saying: string;

    constructor(){
        this.saying = "Winterfell!"
    }

    hello(person:string){
        console.log("Hello, " + person)
    }
}

var ned = new StarkClass();
ned.saying = "Winter is coming";
//console.log(StarkClass.castle);
ned.hello("Robert");