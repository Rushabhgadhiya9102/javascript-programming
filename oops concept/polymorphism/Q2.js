
class Antivirus{

    security(){
        console.log("Devices is protected");
        
    }

}

class Laptop extends Antivirus{

    security(){
        console.log("Your laptop is protected");
        
    }

}

class Mobile extends Antivirus{

    security(){
        console.log("Your mobile is protected");
        
    }

}

let my_devices = [new Laptop(), new Mobile()]

my_devices.forEach(devices => {
    devices.security()
})

