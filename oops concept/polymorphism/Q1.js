

// IOT - DEVICES POLYMORPHISM

class Mobile{
    command(){
        console.log("some devices connecting");
    }
}

class Ac extends Mobile{

    command(){
        console.log("ac is started");
    }

}

class Tv extends Mobile{

    command(){
        console.log("Tv is started");
    }
    
}

class Lights extends Mobile{

    command(){
        console.log("lights is started");
    }

}
class Fan extends Mobile{

    command(){
        console.log("Fan is started");
    }

}

let myCommand = [new Ac(), new Tv(), new Lights(), new Fan()]

myCommand.forEach(role => {
    
   role.command()
    
});
