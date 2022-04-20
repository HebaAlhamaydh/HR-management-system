'use strict';
// let allEmployee=[];
//////constructor/////
function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary=salary;
    // allEmployee.push(this);
    
}
////Function to calculate Random Number///
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/////prototype function for calculating the salary////
Employee.prototype.calculateSalary = function () {
       
    if (this.level == "Senior") {
        this.salary = getRndInteger(1500, 2000);
        this.salary=this.salary-(this.salary*0.075);
        
    }
    else {
        if (this.level == "midSenior") {
            this.salary = getRndInteger(1000, 1500);
            this.salary=this.salary-(this.salary*0.0075);
        }

        else {
            if (this.level == "Junior") {
                this.salary = getRndInteger(500, 1000);
                this.salary=this.salary-(this.salary*0.0075);
            }
        }


    }
}
/////////////render prototype function ////////

Employee.prototype.render = function () {
    
document.write("<h1>employee Name is:"+this.fullName+"The salary is :"+this.salary+"<h1>");

}

    ///////create object(create employees instances)////
    let employee1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
    let employee2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
    let employee3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
    let employee4 = new Employee(1003, "Safi Walid", "Administration", "midSenior");
    let employee5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
    let employee6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
    let employee7 = new Employee(1006, "Hadi Ahmad", "Finance", "midSenior");
    ////////call functions employee1/////
    employee1.calculateSalary();
    employee1.render();
    /////////////call functions employee2/////
    employee2.calculateSalary();
    employee2.render();
   ////////////call functions employee3/////
    employee3.calculateSalary();
    employee3.render();
    /////////////call functions employee4/////
    employee4.calculateSalary();
    employee4.render();
    /////////////call functions employee5/////
    employee5.calculateSalary();
    employee5.render();
    /////////////call functions employee6/////
    employee6.calculateSalary();
    employee6.render();
    /////////////call functions employee7/////
    employee7.calculateSalary();
    employee7.render();
   
    
    

    