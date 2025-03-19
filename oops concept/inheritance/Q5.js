// FUNCTION OVERLOADING
// USING 

class Func{

    constructor(){
        this.result = 0
    }

    sum(... args){

        if(args.length === 0){
            console.log("no parameter");
            
        }else if(args.length === 1){
            console.log("two parameter needed");
            
        }else{
            console.log("condition satisfied");
            
            this.result = 0

            for (let i = 0; i < args.length; i++){
                this.result += args[i]
            }

        }
    }

    getResult(){
        console.log(this.result);
        
    }


}

const obj1 = new Func()
obj1.sum()
obj1.getResult()

obj1.sum(1)
obj1.getResult()

obj1.sum(1,2,3)
obj1.getResult()

obj1.sum(1,2,3,4,5,6,7,8,9,10)
obj1.getResult()