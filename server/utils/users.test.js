const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Raj',
            room: 'Node'
        },{
            id: '2',
            name: 'Mike',
            room: 'React'
        },{
            id: '3',
            name: 'Andrew',
            room: 'Node'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Raj',
            room: 'The Office Fans'
        };

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '3';
        var user = users.removeUser(userId);

        expect(users.users.length).toBe(2);
        expect(user.id).toEqual(userId);
    });

    it('should not remove a user', () => {
        var userId = '24';
        var user = users.removeUser(userId);

        expect(users.users.length).toBe(3);
        expect(user).toBeFalsy;
    });

    it('should find a user', () => {
        var userId = '1';
        var user = users.getUser(userId);
        
        expect(user.id).toEqual(userId);
    });

    it('should not find a user', () => {
        var userId = '34';
        var user = users.getUser(userId);

        expect(user).toBeFalsy;
    });

    it('should return name for node', () => {
        var userList = users.getUserList('Node');

        expect(userList).toEqual(['Raj', 'Andrew']);
    });

    it('should return name for react', () => {
        var userList = users.getUserList('React');

        expect(userList).toEqual(['Mike']);
    });
});