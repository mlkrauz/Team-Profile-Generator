const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should throw and error on any undefined argument.', () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';

            const cb1 = () => new Intern(name, id, email);
            const err = new Error('Expected parameters: name, id, email, and school.');

            expect(cb1).toThrowError(err);
        });

        it("should throw an error on incorrectly typed argument 'school'", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const school = 'fakeSchool';
            
            const intern = new Intern(name, id, email, school);
            const cb1 = () => new Intern(name, id, email, false);
            const err = new Error("Expected argument 'school' to be a string.");

            expect(typeof intern.school).toEqual('string');
            expect(cb1).toThrowError(err);
        });
    });

    describe('getSchool', () => {
        it("should return the value of 'school'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const school = 'fakeSchool';

            const intern = new Intern(name, id, email, school);
            
            expect(intern.getSchool()).toEqual(school);
        });        
    });

    describe('getRole', () => {
        it("should return 'Intern'.", () => {
            const name = 'Jane Doe';
            const id = 1;
            const email = 'janeDoe@fakemail.com';
            const school = 'fakeSchool';

            const intern = new Intern(name, id, email, school);
            
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});