const db = require('../config/mongo');

exports.getUserByUsername = username =>{
    db.collection('users').find({'username':username}).toArray().then((result)=>{
        return result;
    });
}

exports.getUserByEmail = email =>{
    db.collection('users').find({'email':email}).toArray().then((result)=>{
        return result;
    });
}

exports.usernameExists = username => getUserByUsername(username) != [];

exports.emailExists = email => getUserByEmail(email) != [];

exports.createUser = (username, email, password, rp = 0)=>{
    if(usernameExists(username)){
        return 'username already exists'
    }
    if(emailExists(email)){
        return 'email already in use'
    }
    let user = {'username' : username, 'email' : email, 'password' : password, 'rp' : rp}
    db.collection('users').insertOne(user, (err)=>{
        if(err) return err;
        const user = getUserByUsername(username)[0];
        return user;
    })
}

exports.deleteUser = (username, password) => {
    if(usernameExists(username)){
        return 'user not found exists'
    }
    db.collection('users').deleteOne({'username' : username, 'password' : password}, (err)=>{
        if(err) return err;
        const user = getUserByUsername(username)[0];
        return user;
    })
}
