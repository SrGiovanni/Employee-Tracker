const db = require('./db/connection')


/** getDepartments */
const getAllDepartments = () => {
  const sql = 'SELECT * FROM department;'
  return db.query(sql);
};

/** getRoles */
const getAllRoles = async () => {
  const sql = 'SELECT * FROM role';
  return db.query(sql);
};

/** getEmployees */
const getAllEmployees = async () => {
    const sql = 'SELECT * FROM employee';
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
  const sql = 'INSERT INTO  employee (first_name, last_name, role_id, manager_id) VALUES *?, ?, ?, ?)';
  return await db.query(sql, empParams);
}

/** updateEmployeeRole params: eID */

//BONUS
/** updateEmployeeManager */
/** getEmployeesByManager */
/** getEmployeesByDepartment */
// DELETE methods for employees, roles, and departments
/** getBudgetByDepartment */


module.exports = {getAllDepartments, 
                    getAllRoles, 
                    getAllEmployees,
                    addDepartment,
                    addRole,
                    addEmployee
                };