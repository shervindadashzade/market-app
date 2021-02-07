class User{
    constructor(id,username,email,is_admin){
        this.id = id;
        this.username = username;
        this.email = email;
        this.api_token = '';
        this.is_admin = is_admin
    }
}

module.exports = User;