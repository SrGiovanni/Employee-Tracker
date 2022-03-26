const { prompt } = require('inquirer');
const {} = require('queries');
const cTable = require('console.table');

/**
 * Use inquirer to ask what the user wants to do
 * Choices are: view all departments, view all roles, view all employees, add a department, 
 *              add a role, add an employee, and update an employee role
 * Bonus actions are: Update employee managers; view employees by manager; 
 *              view employees by department; delete departments, roles, and employees; 
 *              view the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
 */
const selectAction = () => {
    const actions = ['View Departments', 'View Roles', 'View Employees', 'Quit!!'];
    return prompt([
        {
            message: 'What would you like to do?',
            name: 'choice',
            type: 'list',
            choices: actions
        }
    ]).then(response => {
      switch (response) {
          case value:
              
              break;
      
          default:
              console.log('Goody bye!')
              break;
      }
    })
}

/**
 * initialize app and pass execution to the action selection function
 */
const init = () => {
  console.log(`
  ===============================
  Welcome to the Employee Tracker
  _______________________________`);
  console.log('\n');
};
//initialize app
init()
    .then(
        selectAction
    );
