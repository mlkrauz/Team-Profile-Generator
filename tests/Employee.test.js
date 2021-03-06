const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
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
        
        it('should accept strings that can be parsed to numbers for args of type number.', () => {
            const name = 'Jane Doe';
            const id1 = 1;
            const id2 = '1'
            const email = 'janeDoe@fakemail.com';

            const employee1 = new Employee(name, id1, email);
            const employee2 = new Employee(name, id2, email);
            
            expect(typeof employee1.id).toEqual('number');
            expect(typeof employee2.id).toEqual('number');
        });  
        
        it('should throw an error on any incorrectly typed arguments.', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            
            const cb1 = () => new Employee(false, id, email);
            const cb2 = () => new Employee(name, false, email);
            const cb3 = () => new Employee(name, id, false);
            const err1 = new Error("Expected argument 'name' to be a string.");
            const err2 = new Error("Expected argument 'id' to be a number or a string that can be parsed to a number.");
            const err3 = new Error("Expected argument 'email' to be a string.");

            expect(cb1).toThrowError(err1);
            expect(cb2).toThrowError(err2);
            expect(cb3).toThrowError(err3);
        });
    });

    describe('getName', () => {
        it("should return the value of 'name'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const employee = new Employee(name, id, email)
            
            expect(employee.getName()).toEqual(name);
        });
    });

    describe('getID', () => {
        it("should return the value of 'id'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const employee = new Employee(name, id, email)
            
            expect(employee.getID()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it("should return the value of 'email'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const employee = new Employee(name, id, email)
            
            expect(employee.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it("should return 'Employee'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const employee = new Employee(name, id, email)
            
            expect(employee.getRole()).toEqual('Employee')
        });
    });
});