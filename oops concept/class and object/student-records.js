class Students{

    constructor(id, name, course, average){

        this.id = id;
        this.name = name;
        this.course = course;
        this.average = average;

    }

    details(){

        console.log("Grid: " + this.id);
        console.log("Name: " + this.name);
        console.log("Sub_Course: " + this.course);
        console.log("Average: " + this.average);
        console.log("  ");
        
    }

}

let student1 = new Students(7348, "Rushabh", "C language", "96%");
let student2 = new Students(7962, "Rudra", "Html/Css", "86%");
let student3 = new Students(7900, "Rohan", "Bootstrap", "80%");
let student4 = new Students(7495, "Milan", "Integrated personality development course", "85%");


student1.details()
student2.details()
student3.details()
student4.details()