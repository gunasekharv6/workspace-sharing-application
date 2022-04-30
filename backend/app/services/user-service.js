const User = require('../models/user.js')
const { ObjectId } = require("mongodb");
const bc = require('bcrypt');

/**
 * Returns a promise for search results.
 *
 * @param search param.
 */

// const salt = bc.genSalt(12);
let salt = null;
const hashPassword = async (pw) => {
    if (salt === null) {
        salt = await bc.genSalt(12);
    }
    console.log("salt: ", salt);
    // console.log("Inside hashPassword Method1:salt", pw);
    // console.log("hash....", await bc.hash(pw, salt));
    let hash = await bc.hash(pw, salt);
    // console.log("Inside hashPassword Method2", hash);
    // console.log(`********************hash password = ${hash}**************`);
    return hash;
}


// exports.searchById = async (mail) => {
//     const data = await User.find({ "Mail": mail });
//     console.log("user is", data);
//     return data;
// }

// exports.searchById = async (content) => {
//     console.log("Inside backend user-service, content:", content);
//     const hpwd = await hashPassword(content.password);
//     console.log("Inside backend user-service, hpwd:", hpwd);
//     const data = await User.find({ "Mail": content.mail, "Password": hpwd });
//     console.log("user is", data);
//     return data;
// }

exports.searchById = async (content) => {
    console.log("Inside backend user-service, content:", content);
    // const hpwd = await hashPassword(content.password);
    // console.log("Inside backend user-service, hpwd:", hpwd);
    // console.log("content.mail", content.mail);
    const data = await User.find({ "Mail": content.mail });
    if (data.length !== 0) {
        console.log("content.password:", content.password, "data.Password:", data[0].Password)
        let pwdmatching = await bc.compare(content.password, data[0].Password);
        console.log("pwdmatching", pwdmatching);
        console.log("user is", data);
    }
    else {
        console.log("Data not present");
    }

    return data;
}


exports.createUser = async (content) => {
    // console.log(content);
    const hpwd = await hashPassword(content.Password);
    const newUser = new User({ Username: content.Username, Mail: content.Mail, Password: hpwd });
    newUser.save();
    console.log("New User Creation: ", newUser);
    return newUser;
}

// exports.createUser = async (content) => {
//     console.log(content);
//     const newUser=new User(content);
//     newUser.save();
//     return newUser;
// }

exports.updateUser = async (id, body) => {
    const data = await User.findOneAndUpdate({ _id: ObjectId(id) }, { $set: body }, { returnOriginal: false });
    return data;
}

exports.deleteUser = async (id) => {
    await User.remove(User.findById(id));
}
