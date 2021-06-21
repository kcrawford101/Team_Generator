const Employee = require('../lib/Employee');
test ('can set name via arguments',() => {
    const myTest = 'Kevin'
    const emp = new Employee (myTest)
    expect (emp.myTest).toBe(myTest)    
});