const { faker } = require('@faker-js/faker');
// remember to use import and NOT require
// we can create a function to return a random / fake 
const User= () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.datatype.number()
    };
    return newUser;
};
    
// const newFakeUser = User();
// console.log(newFakeUser);

console.log(User())
module.exports =  User;