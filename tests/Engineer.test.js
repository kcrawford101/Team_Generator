const Engineer = require('../lib/Engineer');
test ('getRole() should return \'Engineer\'',() => {
    const myTest = 'Engineer'
    const eng = new Engineer ('Kevin', 1, 'kevin@kevin.com', 'github')
    expect (eng.getRole()).toBe(myTest)
});