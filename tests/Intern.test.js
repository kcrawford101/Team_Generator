const Intern = require('../lib/Intern');
test ('getRole() should return \'Intern\'',() => {
    const myTest = 'Intern'
    const int = new Intern ('Kevin', 1, 'kevin@kevin.com', 'school')
    expect (int.getRole()).toBe(myTest)    
});
test ('getSchool() should return \'School\'',() => {
    const myTest = 'NYU'
    const int = new Intern ('Kevin', 1, 'kevin@kevin.com', myTest)
    expect (int.getSchool()).toBe(myTest)    
});
