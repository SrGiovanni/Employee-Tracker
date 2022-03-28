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
    ('executive secretary', 45, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Unica', 'Zurn', 0, NULL)
    ('Virginia', 'Woolf', 1, 0),
    ('Ronald', 'Firbank', 2, 1),
    ('Piers', 'Gaveston', 3, 0),
    ('Charles', 'LeRoi', 2, 1),
    ('Katherine', 'Mansfield', 4, 3),
    ('Dora', 'Carrington', 6, 0),
    ('Edward', 'Bellamy', 3, 0),
    ('Montague', 'Summers', 4, 3),
    ('Octavia', 'Butler', 4, 3),
    ;