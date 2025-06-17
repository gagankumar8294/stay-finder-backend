export default class userModel {

    constructor(name, email, password, type, id) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.type = type;
        this.id = id;
    }

    static SignUp(name, email, pasword, type) {
        const newUser = new userModel(
            name, email, pasword, type
        );
        newUser.id = users.length+1;
        users.push(newUser);
        return newUser;
    }

    static SignIn(email, password) {
        const user = users.find(
            (u) => u.email == email && u.password == password
        )
        return user;
    }
}

var users = [
    {
        id: 1,
        name: 'Seller User',
        email: 'seller@gmail.com',
        password: 'password1',
        type: 'seller'
    },
    {

    }
]