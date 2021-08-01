const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should throw and error on any undefined argument.', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const cb1 = () => new Manager();
            const cb2 = () => new Manager(name);
            const cb3 = () => new Manager(name, id);
            const cb4 = () => new Manager(name, id, email);
            const err = new Error('Expected parameters: name, id, email, officeNumber.');

            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
            expect(cb3).toThrowError(err);
            expect(cb4).toThrowError(err);
        });

        it("should throw an error on incorrectly typed argument 'officeNumber'", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const officeNumber = 3;
            
            const manager = new Manager(name, id, email, officeNumber);
            const cb1 = () => new Manager(name, id, email, false);
            const err = new Error("Expected argument 'officeNumber' to be a string.");

            expect(typeof manager.officeNumber).toEqual('number');
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