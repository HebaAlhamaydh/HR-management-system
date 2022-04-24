'use strict';

let formEvent = document.getElementById("formId");//getElementById form 
let cardId=document.getElementById("cardSection");///getcardsectionid
let allEmployee = [];
//////constructor/////
function Employee( fullName, department, level, imageURL) {
    this.employeeID = gergenerate();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    allEmployee.push(this);

}
//console.log(allEmployee);
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
            this.salary=this.salary-(this.salary*0.075);
        }

        else {
            if (this.level == "Junior") {
                this.salary = getRndInteger(500, 1000);
                this.salary=this.salary-(this.salary*0.075);
            }
        }


    }
}
////Function to generate a unique four digits employee id number///
function gergenerate() {
    let idNumber = Math.floor((Math.random() * 100) + 1);
    return idNumber;
}

///////create object(create employees instances)////
let employee1 = new Employee( "Ghazi Samer", "Administration", "Senior","./assets/Ghazi.jpg");
let employee2 = new Employee( "Lana Ali", "Finance", "Senior","./assets/Lana.jpg");
let employee3 = new Employee( "Tamara Ayoub", "Marketing", "Senior","./assets/Tamara.jpg");
let employee4 = new Employee("Safi Walid", "Administration", "midSenior","./assets/Safi.jpg");
let employee5 = new Employee( "Omar Zaid", "Development", "Senior","./assets/Omar.jpg");
let employee6 = new Employee("Rana Saleh", "Development", "Junior","./assets/Rana.jpg");
let employee7 = new Employee("Hadi Ahmad", "Finance", "midSenior","./assets/Hadi.jpg");

////////////render prototype function (to creat a card for employee)////////
Employee.prototype.render = function () {

    let border=document.createElement('div');
    border.style=" border:1px solid black;border-radius: 25%;width:50%; margin-left:25%; margin-right:25%";
    cardId.appendChild(border);
   
    //create userImages in sectionCard//
    let imageEmployee=document.createElement('img');
    imageEmployee.src=this.imageURL;
    cardId.appendChild(imageEmployee);

    //create <h1> (employee name) in sectionCard//
    let nameEmployee=document.createElement('h1');
    nameEmployee.textContent="Name: "+this.fullName;
    cardId.appendChild(nameEmployee);

    //create <h4> (id number) in sectionCard//
    let idEmployee=document.createElement('h4');
    idEmployee.textContent="ID: "+this.employeeID;
    cardId.appendChild(idEmployee);

    // create <p> Department in sectionCard//
    let departmentEmployee=document.createElement('p');
    departmentEmployee.textContent="Department: "+this.department;
    cardId.appendChild(departmentEmployee); 

    // create <p>level in sectionCard//
    let levelEmployee=document.createElement('p');
    levelEmployee.textContent="Level: "+this.level;
    cardId.appendChild(levelEmployee);    
}

/////////Add event listener to get the data from the form/////
formEvent.addEventListener("submit", handleSubmit);

function handleSubmit(event) {    
    event.preventDefault();//default behaviour of submition the form refresh the page
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;

    let employee = new Employee( fullName, department, level,image);
    employee.calculateSalary();
    employee.render();
}

//////////function render all///
function renderAll(){
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].calculateSalary();
        allEmployee[i].render();
    }
}
renderAll();
