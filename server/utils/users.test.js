const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Anshuman',
            room: 'Testing Room 1'
        },{
            id: '2',
            name: 'Pankaj',
            room: 'Testing Room 2'
        },{

            id: '3',
            name: 'Neha',
            room: 'Testing Room 2'
        }]
    });
    it('should add new user', () => {

        var users = new Users();
        var user = {
            id: '123',
            name: 'Anshuman',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Testing Room 2', () => {
        var userList = users.getUserList('Testing Room 2');

        expect(userList).toEqual(['Pankaj','Neha']);
    });

    it('should return names for Testing Room 1', () => {
        var userList = users.getUserList('Testing Room 1');

        expect(userList).toEqual(['Anshuman']);
    });

    it('should remove a user', () => {

        var userId = '1';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {

        var userId = '4';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {

        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {

        var userId = '4';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });
})