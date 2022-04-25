'use strict';
let empArr = [];
let ret = localStorage.getItem("emp");
empArr = JSON.parse(ret); 
 let acountingArr=[];
// localStorage.clear();
function Acounting (depName,noOfemp,totSalary,avgSalary)
{

    this.depName=depName;
    this.noOfemp=noOfemp;
    this.totSalary=totSalary;
    this.avgSalary=avgSalary;
    acountingArr.push(this);
}
let noAdmin = 0;
let noMarkting = 0;
let noFinance = 0;
let noDevlepment = 0;


let avgAdmin = 0;
let avgMarkting = 0;
let avgFinance = 0;
let avgDevlepment = 0;

let totAdmin = 0;
let totMarkting = 0;
let totFinance = 0;
let totDevlepment = 0;

info();
if (noAdmin>0)
new Acounting("Administration",noAdmin,totAdmin,avgAdmin);
if (noMarkting>0)
new Acounting("Marketing",noMarkting,totMarkting,avgMarkting);
if(noDevlepment>0)
new Acounting("Development",noDevlepment,totDevlepment,avgDevlepment);
if (noFinance>0)
new Acounting("Finance",noFinance,totFinance,avgFinance);

//add department row
let tableEl = document.getElementById("depTable");
addTableRow();
function addTableRow(){
    for (var i = 0; i < acountingArr.length; i++)
    {
let adminTr = document.createElement("tr");
tableEl.appendChild(adminTr);

let depTd = document.createElement("td");
depTd.textContent = acountingArr[i].depName;
adminTr.appendChild(depTd);

let depTd2 = document.createElement("td");
depTd2.textContent = acountingArr[i].noOfemp;
adminTr.appendChild(depTd2);


let depTd3 = document.createElement("td");
depTd3.textContent = acountingArr[i].totSalary;
adminTr.appendChild(depTd3);

let depTd4 = document.createElement("td");
depTd4.textContent = acountingArr[i].avgSalary;
adminTr.appendChild(depTd4);
    }
}
function info()  {

    for (var i = 0; i < empArr.length; i++) {
        if (empArr[i].department == "Administration") {
            noAdmin++;
            totAdmin+=empArr[i].salary;
            avgAdmin=totAdmin/noAdmin;
            
           

        }
        if (empArr[i].department == "Marketing") {
            noMarkting++;
           totMarkting+=empArr[i].salary;
           avgMarkting=totMarkting/noMarkting;
         

        }
        if (empArr[i].department == "Development") {
            noDevlepment++;
          totDevlepment+=empArr[i].salary;
          avgDevlepment=totDevlepment/noDevlepment;
         

        }
        if (empArr[i].department == "Finance") {
            noFinance++;
          totFinance+=empArr[i].salary;
          avgFinance=totFinance/noFinance;
        

        }
        
    }
}