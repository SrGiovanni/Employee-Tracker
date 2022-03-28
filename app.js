const { prompt } = require('inquirer');
const cTable = require('console.table');
const {getAllDepartments, 
    getAllRoles, 
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee} = require('./queries');

/**
 * Use inquirer to ask what the user wants to do
 * Choices are: view all departments, view all roles, view all employees, add a department, 
 *              add a role, add an employee, and update an employee role
 * Bonus actions are: Update employee managers; view employees by manager; 
 *              view employees by department; delete departments, roles, and employees; 
 *              view the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
 */
const selectAction = async () => {
    const actions = ['View Departments', 'View Roles', 'View Employees', 'Quit!!'];
    try {
        const action = await prompt([
                {
                    message: 'What would you like to do?',
                    name: 'choice',
                    type: 'list',
                    choices: actions
                }
            ]);
        switch (action) {
            case 'View Departments':
                const deps = await getAllDepartments();
                console.table(deps);
                return selectAction();
                break;
          
            default:
                return console.log('Goody bye!')
                break;
        }
    } catch (error) {
        console.log(error);
    };
};

/**
 * initialize app and pass execution to the action selection function
 */
const init = async () => {
  console.log(`
  ===============================
  Welcome to the Employee Tracker
  _______________________________`);
  return await selectAction();
};
//initialize app
init();
