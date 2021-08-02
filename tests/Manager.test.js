const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should throw and error on any undefined argument.', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const cb1 = () => new Manager(name, id, email);
            const err = new Error('Expected parameters: name, id, email, and officeNumber.');

            expect(cb1).toThrowError(err);
        });

        it("should accept strings that can be parsed to numbers for 'officeNumber'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const officeNumber1 = 3;
            const officeNumber2 = '3';

            const manager1 = new Manager(name, id, email, officeNumber1);
            const manager2 = new Manager(name, id, email, officeNumber2);
            
            expect(typeof manager1.officeNumber).toEqual('number');
            expect(typeof manager2.officeNumber).toEqual('number');
        }); 
        
        it("should throw an error on incorrectly typed argument 'officeNumber'", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const officeNumber = 3;
            
            const cb1 = () => new Manager(name, id, email, false);
            const err = new Error("Expected argument 'officeNumber' to be a number or a string that can be parsed to a number.");

            expect(cb1).toThrowError(err);
        });
    });

    describe('getOfficeNumber', () => {
        it("should return the value of 'officeNumber'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const officeNumber = 3;

            const manager = new Manager(name, id, email, officeNumber);
            
            expect(manager.getOfficeNumber()).toEqual(officeNumber);
        });        
    });

    describe('getRole', () => {
        it("should return 'Manager'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const officeNumber = 3;

            const manager = new Manager(name, id, email, officeNumber);
            
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});