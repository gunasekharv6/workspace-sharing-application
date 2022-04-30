import axios from 'axios';
// const apiUrl = "http://localhost:3003/users/"
const apiUrl = "http://localhost:3003/users"

//get user from database
export function getUser(_mail) {
    console.log("Inside frontend userService:getUser()", _mail);
    return axios.get(apiUrl + `?mail=${_mail.email}&password=${_mail.password}`);
}


// export function getUser(_mail) {
//     console.log("Inside frontend userService", _mail);
//     return axios.get(apiUrl + _mail);
// }


//add one new user
export function addNewUser(user) {
    console.log("Inside frontend userService:addNewUser()", user);
    return axios.post(apiUrl, user);
}

//update one of the users
export function updateUser(_id, user) {
    return axios.put(apiUrl + _id, user);
}

//delete one of the users
export function deleteUser(_id) {
    return axios.delete(apiUrl + _id);
}

