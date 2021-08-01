const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should throw and error on any undefined argument.', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const cb1 = () => new Engineer();
            const cb2 = () => new Engineer(name);
            const cb3 = () => new Engineer(name, id);
            const cb4 = () => new Engineer(name, id, email);
            const err = new Error('Expected parameters: name, id, email, github.');

            expect(cb1).toThrowError(err);
            expect(cb2).toThrowError(err);
            expect(cb3).toThrowError(err);
            expect(cb4).toThrowError(err);
        });

        it("should throw an error on incorrectly typed argument 'github'", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const github = 'janeD0e';
            
            const engineer = new Engineer(name, id, email, github);
            const cb1 = () => new Engineer(name, id, email, false);
            const err = new Error("Expected argument 'github' to be a string.");

            expect(typeof engineer.github).toEqual('string');
            expect(cb1).toThrowError(err);
        });
    });

    describe('getGithub', () => {
        it("should return the value of 'github'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const github = 'janeD0e';

            const engineer = new Engineer(name, id, email, github);
            
            expect(engineer.getGithub()).toEqual(github);
        });        
    });

    describe('getRole', () => {
        it("should return 'Engineer'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const github = 'janeD0e';

            const engineer = new Engineer(name, id, email, github);
            
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});