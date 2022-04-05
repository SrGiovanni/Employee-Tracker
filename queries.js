const db = require('./db/connection')


/** getDepartments */
const getAllDepartments = () => {
  const sql = 'SELECT * FROM department;'
  return db.query(sql);
};

/** getRoles */
const getAllRoles = async () => {
  const sql = 'SELECT r.title, r.id, d.name, r.salary FROM role r '+
              'LEFT JOIN department d ON r.department_id = d.id;';
  return db.query(sql);
};

/** getEmployees */
const getAllEmployees = async () => {
    const sql = `SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, 
                      (SELECT concat(m.first_name, ' ', m.last_name) FROM employee m WHERE e.manager_id = m.id) AS manager
                  FROM employee e
                  LEFT JOIN role r ON e.role_id = r.id
                  LEFT JOIN department d ON r.department_id = d.id; `;
    return await db.query(sql);
};

/** addDepartment params: new department name */
const addDepartment = async (newDep) => {
    const sql = 'INSERT INTO department (name) VALUES (?)';
    return await db.query(sql, newDep);
};

/** addRole params: new role [title, salary, department_id] */
const addRole = async (roleParams) => {
    const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    return await db.query(sql, roleParams);
};

/** addEmployee */
const addEmployee = async (empParams) => {
  const sql = 'INSERT INTO  employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  return await db.query(sql, empParams);
}

/** updateEmployeeRole params: eID */
const updateEmployeeRole = async ( empID, newRoleID) => {
  const sql = 'UPDATE employee SET role_id = ? WHERE id = ?';
  return await db.query(sql, [newRoleID, empID]);  
}

//BONUS
/** updateEmployeeManager */
/** getEmployeesByManager */
/** getEmployeesByDepartment */
// DELETE methods for employees, roles, and departments
/** getBudgetByDepartment */
const getBudgetByDepartment = async (id) => {
  const sql = `SELECT SUM(salary) AS budget
  FROM employee e
  LEFT JOIN role r ON e.role_id = r.id
  LEFT JOIN department d ON r.department_id = d.id
  WHERE d.id = ?; `;
  return await db.query(sql, id);
}


module.exports = {getAllDepartments, 
                    getAllRoles, 
                    getAllEmployees,
                    addDepartment,
                    addRole,
                    addEmployee,
                    updateEmployeeRole,
                    getBudgetByDepartment
                };