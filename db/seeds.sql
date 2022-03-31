INSERT INTO department (name)
VALUES
    ('c suite'),
    ('marketing'),
    ('engineering');

INSERT INTO role (title, salary, department_id)
VALUES
    ('CEO', 60, 1),
    ('sales lead', 50, 2),
    ('salesperson', 45, 2),
    ('engineering lead', 50, 3),
    ('engineer', 47, 3),
    ('executive secretary', 45, 1);name

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Unica', 'Zurn', 1, NULL),
    ('Virginia', 'Woolf', 2, 1),
    ('Ronald', 'Firbank', 2, 1),
    ('Piers', 'Gaveston', 3, 1),
    ('Charles', 'LeRoi', 2, 1),
    ('Katherine', 'Mansfield', 5, 4),
    ('Dora', 'Carrington', 6, 1),
    ('Edward', 'Bellamy', 3, 5),
    ('Montague', 'Summers', 5, 4),
    ('Octavia', 'Butler', 5, 4)
    ;