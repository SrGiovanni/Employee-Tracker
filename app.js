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
    const actions = ['View Departments', 'View Roles', 'View Employees',
                     'Add Department', 'Add Role', 'Add Employee',
                     'Update Employee Role',
                      'Quit!!'];
    try {
        const action = await prompt([
                {
                    message: 'What would you like to do?',
                    name: 'choice',
                    type: 'list',
                    choices: actions
                }
            ]);
        switch (action.choice) {
            case 'View Departments':
                console.log('Viewing All Departments:')
                const [deps] = await getAllDepartments();
                console.table(deps);
                return await selectAction();
                break;
            case 'View Roles':
                const [roles] = await getAllRoles()
                console.table( roles );
				return await selectAction();
                break;
            case 'View Employees':
                const [employees] = await getAllEmployees()
                console.table( employees );
				return await selectAction();
                break;
            case 'Add Department':
                console.log('Create a new Department:')
                const newDepartment = await prompt([
                    {
                        name:'department',
                        message: 'Please name the new department',
                        type: 'input',
                        validate: (answer) => {
                                if(answer){
                                    return true;
                                } else{
                                    return 'Please enter a new department name!';
                                }
                            }
                    }
                ]);
                await addDepartment(newDepartment.department);
                console.log("Created new Department!");
                return await selectAction();
                break;
            case 'Add Role':
                console.log('Create new Role:');
                const [depts] = await getAllDepartments();
                const newRole = prompt([
                    {
                        name: 'title',
                        message: "Please enter a role Title:",
                        type: 'input',
                        validate: (answer) => {
                            if(answer){
                                return true;
                            } else{
                                return 'Please enter a role title!';
                            }
                        }

                    },
                    {
                        name: 'salary',
                        message: 'Please enter the role Salary:',
                        type: 'number',
                        validate: (answer) => {
                            if(typeof answer ==='number'){
                                return true;
                            } else{
                                return 'Please enter a ';
                            }
                        }
                    },
                    {
                        name: 'department',
                        message: 'Please select a department the role belongs to:',
                        type: 'list',
                        choices: depts.map((elem) => {
                          return {name: elem.name, value: elem.id};
                        })
                    }
                ]);
                console.log(newRole.title, newRole.salary, newRole.department)
                return await selectAction();
                break;
            case 'Add Employee':
                return await selectAction();
                break;
            case 'Update Employee Role':
                return await selectAction();
                break;
            case 'Quit!!':
                return console.log('Goody bye!')
                break;
            default:
                console.log('invalid action prompt')
                break;
            };
            return undefined;
    } catch (error) {
        console.log('Catching an Error:')
        return console.log(error);
    };
};


/**
 * initialize app and pass execution to the action selection function
 */
//initialize app
console.log(`
===============================
Welcome to the Employee Tracker
_______________________________`);
selectAction();
console.log('\n after selectAction')