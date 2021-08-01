const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return an object with the following properties: name, id, email', () => {
            
            //arrange
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            
            //act
            const employee = new Employee(name, id, email);

            //assert
            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email);

        });

        it('should throw an error on any undefined argument.', () => {
            const name = 'Jane Doe';
            const id = 1;

            const cb1 = () => new Employee();
            const cb2 = () => new Employee(name);
            const cb3 = () => new Employee(name, id);
            const err = new Error('Expected parameters: name, id, and email.');

            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
            expect(cb3).toThrowError(err);
        });

        it('should throw an error on any incorrectly typed arguments', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            
            const employee = new Employee(name, id, email);
            const cb1 = () => new Employee(false, id, email);
            const cb2 = () => new Employee(name, false, email);
            const cb3 = () => new Employee(name, id, false);
            const err1 = new Error("Expected argument 'name' to be a string.");
            const err2 = new Error("Expected argument 'id' to be a number.");
            const err3 = new Error("Expected argument 'email' to be a string.");


            expect(typeof employee.name).toEqual('string');
            expect(typeof employee.id).toEqual('number');
            expect(typeof employee.email).toEqual('string');
            expect(cb1).toThrowError(err1);
            expect(cb2).toThrowError(err2);
            expect(cb3).toThrowError(err3);
        });
    })
})