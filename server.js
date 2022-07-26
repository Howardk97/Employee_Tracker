// Bring in files
const mysql = require("mysql2");
const inquirer = require("inquirer");
const fs = require('fs');

// connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

//   const userOptions = ({ start_options }) => {
//     console.log("Working!");

//     console.log(`${start_options}`);
// }


// Steps to Success
// Create Options for User to choose: View Departments, View Roles, View Employees, Add Deparment, Add Role, Add Employee, Update Employee Role
const userPrompt = inquirer.prompt([
    {
        name: "start_options",
        type: "list",
        message: "Select an option.",
        checked: true,
        choices: ["View Departments", "View Roles", "View Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    }
])
.then((data) => {
    const choice = `${data.start_options}`;

    console.log(choice)
    // console.log(choice === "View Departments")
    // If user chooses "View Departments"
    if(choice === "View Departments") {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'employee_db',
            password: 'codingisfun97'
          });

        console.log("View Departments!!!");
        // Goal: Display table showing department names and department ids
        const sql = 'SELECT department.id, department.name FROM department;';
        // console.log(sql);
        connection.query(sql,
        function(err, results) {
            console.log(results); // results contains rows returned by server
    }
    
  );

    // const propertyValues = Object.values(person);

    // console.log(propertyValues);

    } 
    // If user chooses "View Roles"
    if(choice === "View Roles") {
        console.log("View Roles!!!")
    } 
    // If user chooses "View Employees"
    if(choice === "View Employees") {
        console.log("View Employees!!!")
    }
    // If user chooses "Add Department" 
    if(choice === "Add Department") {
        console.log("Add Department!!!")
    }
    // If user chooses "Add Role"
    if(choice ==="Add Role") {
        console.log("Add Role!!!")
    }
    // If user chooses "Add Employee"
    if(choice === "Add Employee") {
        console.log("Add Employee!!!")
    }
    // If user chooses "Update Employee Role"
    if(choice === "Update Employee Role") {
        console.log("Update Employee Role")
    }
});
