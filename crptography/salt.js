const { scryptSync, randomBytes } = require('crypto');

function signup(email,password){
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password,salt,64).toString('hex');

    const user = {emial,password:`${salt}:${hashedPassword}`}
    
    users.push(user);

    return user;
}

function login(email,password){

}