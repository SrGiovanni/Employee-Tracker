const { prompt } = require('inquirer');
const cTable = require('console.table');
const {getAllDepartments, 
    getAllRoles, 
    getAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole} = require('./queries');

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
            case 'View Departments':{
                console.log('Viewing All Departments:')
                let [deps] = await getAllDepartments();
                console.table(deps);
                return await selectAction();
                break;
            }case 'View Roles':{
                let [roles] = await getAllRoles()
                console.table( roles );
				return await selectAction();
                break;
            }case 'View Employees':{
                let [employees] = await getAllEmployees()
                console.table( employees );
				return await selectAction();
                break;
            }case 'Add Department':{
                const newDepartment = await prompt([
                    {
                        name:'department',
                        message: 'Please name the new department',
                        type: 'input',
                        validate: (answer) => {
                                if(answer){
                                    return true;
                                } else {
                                    return 'Please enter a new department name!';
                                }
                            }
                    }
                ]);
                await addDepartment(newDepartment.department);
                console.log("New Department created!");
                return await selectAction();
                break;
            }case 'Add Role':{
                let  [departments] = await getAllDepartments();
                const newRole = await prompt([
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
                            if(answer && typeof answer ==='number'){
                                return true;
                            } else{
                                return 'Please enter a number for Salary';
                            }
                        }
                    },
                    {
                        name: 'department',
                        message: 'Please select a department the role belongs to:',
                        type: 'list',
                        choices: departments.map((elem) => {
                          return {name: elem.name, value: elem.id};
                        })
                    }
                ]);
                await addRole([newRole.title, newRole.salary, newRole.department]);
                console.log('New Role Created!');
                return await selectAction();
                break;
            }case 'Add Employee':
                {let [roles] = await getAllRoles();
                const newEmployee = await prompt([
                    {
                        name: 'fname',
                        message: 'Please enter fist name:',
                        type: 'input',
                        validate: (answer) => {
                            if(answer){
                                return true;
                            } else{
                                return 'Please enter a name!';
                            }
                        }
                    },
                    {
                        name: 'lname',
                        message: 'Please enter last name:',
                        type: 'input',
                        validate: (answer) => {
                            if(answer){
                                return true;
                            } else{
                                return 'Please enter a name!';
                            }
                        }
                    },
                    {
                        name: 'role',
                        message: 'Please select a role',
                        type: 'list',
                        choices: roles.map((elem) => {
                          return {name: elem.title, value: elem.id}
                        })
                    },
                    {
                        name: 'manager',
                        message: 'Please select a manager by ID (leave blank for no manager)',
                        type: 'number'
                    }
                ]) 
                await addEmployee([newEmployee.fname, newEmployee.lname, newEmployee.role, newEmployee.manager]);
                console.log('New Employee Added!');
                return await selectAction();
                break;
            }case 'Update Employee Role':{
                const employees = await getAllEmployees();
                const roles = await getAllRoles();
                const update = await prompt([
                    {
                        name: 'employee',
                        message: 'Select an employee to update:',
                        type: 'list',
                        choices: employees.map((elem) => {
                            return { name: `${elem.first_name} ${elem.last_name}`, value: elem.id };
                        })
                    },
                    {
                        name: 'newRole',
                        message: 'Select new role:',
                        type: 'list',
                        choices: roles.map((elem) => { return {name: elem.title, value: elem.id} })
                    }
                ]);
                await updateEmployeeRole(update.employee, update.newRole);
                return await selectAction();
                break;
            }case 'Quit!!':{
                console.log('Goody bye!!');
                
                return undefined;
                break;
            }default:{
                console.log('invalid action prompt')
                break;}
            };
            return undefined;
    } catch (error) {
        console.log('Caught an Error:')
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