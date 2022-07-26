INSERT INTO department (dep_name)
VALUES  ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 4),
        ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 120000, 1),
        ("Account Manager", 160000, 2),
        ("Accountant", 125000, 2),
        ("Legal Team Lead", 250000, 3),
        ("Lawyer", 19000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES  ("Karen", "Fisher", 1),
        ("Tommy", "Zell", 2),
        ("Chris", "Evens", 3),
        ("Kelly", "Slaw", 4);