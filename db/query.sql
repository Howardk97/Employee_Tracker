SELECT roles.id AS id, roles.title AS title, department.dep_name AS department, roles.salary AS salary
FROM roles 
JOIN employee_db.department ON roles.department_id = department.id;

SELECT employee.id AS id, employee.first_name AS first_name, employee.last_name AS last_name, roles.title AS role, department.dep_name AS department, roles.salary AS salary
FROM employee 
INNER JOIN employee_db.roles ON employee.role_id = roles.id
INNER JOIN employee_db.department ON roles.department_id = department.id;