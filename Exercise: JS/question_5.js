var Employee = [
    {
        name: "Kunark",
        age: 21,
        salary: 15100,
        DOB: "17-February-1997"
    },
    {
        name: "Nitika",
        age: 18,
        salary: 100,
        DOB: "29-October-2000"
    },
    {
        name: "Ekta",
        age: 21,
        salary: 500,
        DOB: "29-October-1997"
    },
    {
        name: "Amit",
        age: 22,
        salary: 999,
        DOB: "2-October-1996"
    },
    {
        name: "Rahul",
        age: 29,
        salary: 115100,
        DOB: "12-February-1990"
    },
    {
        name:"Chadler",
        age:39,
        salary:515100,
        DOB:"17-March-1980"
    },
    {
        name:"Monica",
        age:38,
        salary:415100,
        DOB:"17-April-1981"
    }
]
console.log("All Employee: ");
Employee.forEach(function(emp){
    console.log(emp);
})
console.log("");







//Filter for salary greater then 5000

var salFilter = [];
salFilter = Employee.filter(function(emp){
    if(emp.salary > 5000){
        // salFilter.push(emp);
        return emp;
    }
});

console.log("Employee having salary greater than 5000: ");

salFilter.forEach(function(emp){
    console.log(emp);
});

console.log("");







// group employee on basis of age

console.log("Grouped by Age: ")

var group_10_20 = [];
var group_20_30 = [];
var group_30 = [];
var groupByAge = Employee.filter(function(emp){
    if(emp.age < 20 && emp.age >= 10){
        group_10_20.push(emp);
    }else if(emp.age < 30 && emp.age >= 20){
        group_20_30.push(emp);
    }else{
        group_30.push(emp);
    }
});

console.log("Employee in age group of 10 to 20 ");
group_10_20.forEach(function(element){
    console.log(element);
});

console.log("Employee in age group of 20 to 30 ");
group_20_30.forEach(function(element){
    console.log(element);
});

console.log("Employee in age group of 30+ ");
group_30.forEach(function(element){
    console.log(element);
});

console.log("");








//fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.

var updateSalary = Employee.map(function(emp){
	if(emp.salary < 1000 && emp.age > 20) {
		emp.salary *= 5; 
	}
	return emp;
})

console.log("Updated salaries: ");
updateSalary.forEach(function(emp){
    console.log(emp);
})