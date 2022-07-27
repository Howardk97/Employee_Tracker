// Bring in files
const mysql = require("mysql2");
const inquirer = require("inquirer");
const fs = require('fs');
const console_table = require('console.table');

// Create Options for User to choose: View Departments, View Roles, View Employees, Add Deparment, Add Role, Add Employee, Update Employee Role
const startPrompt = inquirer.prompt([
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

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'employee_db',
        password: 'codingisfun97'
      });
    // console.log(choice === "View Departments")
    // If user chooses "View Departments"
    if(choice === "View Departments") {
        // Display table showing department names and department ids
        
        // Connect to sql to get data from department table
        connection.query(`SELECT department.id AS Id, department.dep_name AS Name FROM department;`,
        function(err, results) {
            console.table(results);
        });

    // const propertyValues = Object.values(person);

    // console.log(propertyValues);

    } 
    // If user chooses "View Roles"
    if(choice === "View Roles") {
        // const sql = `SELECT * FROM roles;`;

        connection.query(`SELECT roles.id AS id, roles.title AS title, department.dep_name AS department, roles.salary AS salary
        FROM roles 
        JOIN employee_db.department ON roles.department_id = department.id;`,
            function(err, results) {
                console.table(results); // results contains rows returned by server
            });
    } 
    // If user chooses "View Employees"
    if(choice === "View Employees") {
        connection.query(`SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, roles.title AS role, department.dep_name AS department, roles.salary AS salary
        FROM employee 
        INNER JOIN employee_db.roles ON employee.role_id = roles.id
        INNER JOIN employee_db.department ON roles.department_id = department.id;`,
            function(err, results) {
                console.table(results); // results contains rows returned by server
        });
    }
    // If user chooses "Add Department" 
    if(choice === "Add Department") {
        // Prompt user to enter a department
        inquirer.prompt([
            {
                type: "input",
                name: "newDepartment",
                message: "Enter new department name."
            }
        ]).then(data => {
            // Add to database
            connection.query(`INSERT INTO department (dep_name)
            VALUES (?)`, `${data.newDepartment}`, 
            function(err, results) {
            console.log("Added to Department List.");
        });
        })

    }
    // If user chooses "Add Role"
    if(choice === "Add Role") {
        inquirer.prompt([
            {
                type: "input",
                name: "newRole",
                message: "Enter new role name."
            },

            {
                type: "input",
                name: "newSalary",
                message: "Enter new role salary."
            },

            {
                type: "input",
                name: "newDepartment",
                message: "Enter new role department number."
            }
        ]).then(data => {
            // Add to database
            // prompt = [`${data.newRole}`, `${data.newSalary}`, `${data.newDepartment}`]
            connection.query(`INSERT INTO department (dep_name)
            VALUES (?)`, [`${data.newDepartment}`], 
            function(err, results) {
            console.log(results);
            });

            connection.query(`INSERT INTO roles (title, salary, department_id)
            VALUES (?)`, [`${data.newRole}`, `${data.newSalary}`, 1], 
            function(err, results) {
            console.log(results);
            });

            // connection.query(`INSERT INTO roles (title, salary, department_id)
            // VALUES (?)`, [`${data.newRole}`, `${data.newSalary}`, `${data.newDepartment}`], 
            // function(err, results) {
            // console.log(results);
            // });
        
        // If department entry is already in table
            // Do nothing
        // Else
            // Add to department table
        //     connection.query(`INSERT INTO department (dep_name)
        //     VALUES (?)`, `${data.newDepartment}`, 
        //     function(err, results) {
        //     console.log("Added to Department List.");
        // });

        // If 
        })
    }
    // If user chooses "Add Employee"
    if(choice === "Add Employee") {
        console.log("Add Employee!!!")
        inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter the employee's first name."
            },

            {
                type: "input",
                name: "last_name",
                message: "Enter the employee's last name."
            },

            {
                type: "input",
                name: "role",
                message: "Enter the employee's job role."
            },

            {
                type: "input",
                name: "manager",
                message: "Enter the employee's manager."
            },
        ]).then((data) => {
            connection.query(`INSERT INTO employee (first_name, last_name, role_id)
            VALUES (?)`, [`${first_name}`, `${last_name}`, `$`], 
            function(err, results) {
            console.log(results);
            });
        })
    }
    // If user chooses "Update Employee Role"
    if(choice === "Update Employee Role") {
        console.log("Update Employee Role")
    }
});
