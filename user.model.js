var User = /** @class */ (function () {
    function User(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    User.prototype.getUsername = function () {
        return this.username;
    };

    User.prototype.setUsername = function (username) {
        this.username = username;
    };

    User.prototype.getEmail = function () {
        return this.email;
    };

    User.prototype.setEmail = function (email) {
        this.email = email;
    };

    User.prototype.getPassword = function () {
        return this.password;
    };

    User.prototype.setPassword = function (password) {
        this.password = password;
    };
    return User;
}());

let userInfo = new User("test user","test@gmail.com", "********");
console.log(userInfo)