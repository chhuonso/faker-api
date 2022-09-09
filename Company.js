const { faker } =  require('@faker-js/faker');

const  Company = () => {
    const newCompany =  {
        _id : faker.datatype.number(),
        name :faker.company.name(),
        address :{
            street : faker.address.streetAddress(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
    return newCompany;
}

// const newFakeCompany = Company();
// console.log(newFakeCompany);

// console.log(Company())
module.exports =  Company