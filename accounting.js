'use strict';
let tableEmployee = document.getElementById("tableId");///getcardsectionid
let tableFooterEmployee = document.getElementById("tfootId");
tfootId
let employeeArr = [];
let ret = localStorage.getItem("employee");
 employeeArr = JSON.parse(ret);

let acountingArr = [];
//////constructer///
function Acounting(departementName, numberOfEmployees, totalSalary, averageSalary) {
    this.departementName = departementName;
    this.numberOfEmployees = numberOfEmployees;
    this.totalSalary = totalSalary;
    this.averageSalary = averageSalary;
    acountingArr.push(this);
}

/////////initialization value///////
let numberAdmin = 0;
let numberMarkting = 0;
let numberDevlopment = 0;
let numberFinance = 0;

let totalAdmin = 0;
let totalMarkting = 0;
let totalDevlopment = 0;
let totalFinance = 0;

let averageAdmin = 0;
let averageMarkting = 0;
let averageDevlopment = 0;
let averageFinance = 0;

let totalNumberOfEmployeesAll=0;
let  totalAverageSalaryAll=0;
let salaryAll=0;


/////////////////////////
departementInformation();
////////////////
new Acounting("Administration",numberAdmin,totalAdmin,averageAdmin);

new Acounting("Marketing",numberMarkting,totalMarkting,averageMarkting);

new Acounting("Development",numberDevlopment,totalDevlopment,averageDevlopment);

new Acounting("Finance",numberFinance,totalFinance,averageFinance );
//////////////////////
renderTable();
// ////////////render prototype function (to creat a card for employee)////////
function renderTable() {
    for (var i = 0; i < acountingArr.length; i++) {


        totalNumberOfEmployeesAll+=acountingArr[i].numberOfEmployees;
        totalAverageSalaryAll+=acountingArr[i].averageSalary;
        salaryAll+=acountingArr[i].totalSalary;

        let tr = document.createElement("tr");
        tableEmployee.appendChild(tr);
       

        let departmentName = document.createElement("td");
        departmentName.textContent = acountingArr[i].departementName ;
        tr.appendChild(departmentName);

        let numberOfEmployees = document.createElement("td");
        numberOfEmployees.textContent = acountingArr[i].numberOfEmployees;
        tr.appendChild(numberOfEmployees);

        let averageSalary = document.createElement("td");
        
        averageSalary.textContent = acountingArr[i].totalSalary;
        tr.appendChild(averageSalary);

        let totalSalary = document.createElement("td");
        totalSalary.textContent = acountingArr[i].averageSalary ;
        tr.appendChild(totalSalary);
    
    }
        ////// table footer (total number of employees, total average ,total salary )for all departments


        let lastTr = document.createElement("tr");
        tableFooterEmployee.appendChild(lastTr);

        let total = document.createElement("td");
        total .textContent = "" ;
        lastTr.appendChild(total);

        let totalNumberOfEmployees = document.createElement("td");
        totalNumberOfEmployees .textContent = totalNumberOfEmployeesAll ;
        lastTr.appendChild(totalNumberOfEmployees);

        let totalAverageSalary = document.createElement("td");
        totalAverageSalary .textContent = totalAverageSalaryAll;
        lastTr.appendChild(totalAverageSalary );

        let totalSalaryAll = document.createElement("td");
        totalSalaryAll.textContent =salaryAll; 
        lastTr.appendChild(totalSalaryAll);
   
  

}

function departementInformation() {

    for (let i = 0; i < employeeArr.length ; i++) {
        if (employeeArr[i].department == "Administration") {
            numberAdmin++;
            totalAdmin+=employeeArr[i].salary;
            averageAdmin=totalAdmin/numberAdmin;
        }
        if (employeeArr[i].department == "Marketing") {
            numberMarkting++;
           totalMarkting+=employeeArr[i].salary;
           averageMarkting=totalMarkting/numberMarkting;
        }
        if (employeeArr[i].department == "Development") {
            numberDevlopment++;
            totalDevlopment+=employeeArr[i].salary;
            averageDevlopment=totalDevlopment/numberDevlopment;
         
        }
        if (employeeArr[i].department == "Finance") {
            numberFinance++;
          totalFinance+=employeeArr[i].salary;
          averageFinance=totalFinance /numberFinance;
        }

        
}


}
