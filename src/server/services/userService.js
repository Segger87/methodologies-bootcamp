const mongo = require('../config/mongo');
exports.userService = () =>{
    const mongodb = new mongo();

    const getUserByUsername = username =>{
        mongodb.db.collection('users').find({'username':username}).toArray().then((result)=>{
            return result;
        });
    }

    const getUserByEmail = email =>{
        mongodb.db.collection('users').find({'email':email}).toArray().then((result)=>{
            return result;
        });
    }

    const usernameExists = username => getUserByUsername(username) != [];

    const emailExists = email => getUserByEmail(email) != [];

    const createUser = (username, email, password, rp = 0)=>{
        if(usernameExists(username)){
            return 'username already exists'
        }
        if(emailExists(email)){
            return 'email already in use'
        }
        let user = {'username' : username, 'email' : email, 'password' : password, 'rp' : rp}
        mongodb.db.collection('users').insertOne(user, (err)=>{
            if(err) return err;
            const user = getUserByUsername(username)[0];
            return user;
        })
    }

    const deleteUser = (username, password) => {
        if(usernameExists(username)){
            return 'user not found exists'
        }
        mongodb.db.collection('users').deleteOne({'username' : username, 'password' : password}, (err)=>{
            if(err) return err;
            const user = getUserByUsername(username)[0];
            return user;
        })
    }

    //
}