# HR-management-system

## Add employee information in a separate card in the home page 


|Id   |Full  Name|Departement| Level  |  image | Salarey  |   |
|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |
|   |   |   |   |   |   |   |
## In aap.js page
1. saving employee array of objects to local storage in aap.js page
````javascript
function saveData(data)
{
    let stringFiyData=JSON.stringify(data);
    localStorage.setItem("employee",stringFiyData);
}
````
2. getting the data from the local storage
````javascript
function getData()
{
let retriveData=localStorage.getItem("employee");
    let arrayData=JSON.parse(retriveData);
}
````
3. rendering the data is not lost when refresh 
## In accounting.js page
1.  getting the data from the local storage
````javascript

let retriveData=localStorage.getItem("employee");
    let arrayData=JSON.parse(retriveData);

````
2. create constructor of department information and render it in a table 
3. create renderTable  function  to generate a table of departement information
4. create departementInformation function to calculate Number of employees,Average salary,Total salary in each department.



