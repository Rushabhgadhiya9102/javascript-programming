// ------- P A R E N T - C L A S S ----------- 

class Employee{

    constructor(){
        this.e_name = '';
        this.e_salary = '';
        this.e_age = '';
    }

    setDetails(name, salary, age){
        
        this.e_name = name;
        this.e_salary = salary;
        this.e_age = age;

        this.getDetails()

    }

    getDetails(){

        console.log(`Employee: ${this.e_name}`);
        console.log(`Salary: ${this.e_salary}`);
        console.log(`Age: ${this.e_age}`);
        
    }

}

// ------- C H I L D - C L A S S -----------

class Salary extends Employee {
    
    constructor() {
        super()
        this.s_hra = "";
        this.s_ma = "";
        this.s_pf = "";

    }

    setSalaryDetails(hra, ma, pf) {

        this.s_hra = hra;
        this.s_ma = ma;
        this.s_pf = pf;
        this.netSalary = hra + ma - pf;
        this.grossSalary = this.netSalary + this.e_salary 
        
        this.getSalaryDetails();

    }

    getSalaryDetails() {

        console.log(`netSalary : ${this.netSalary}`);
        console.log(`grossSalary : ${this.grossSalary}`);
    
    }
}

const obj = new Salary()

obj.setDetails("rushabh", 150000, 22);
obj.setSalaryDetails(15000, 3000, 1500);