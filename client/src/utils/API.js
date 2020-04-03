import axios from 'axios';

export default {

    userLogin: function(userObj) {
        return axios.post("/users/login", userObj );
    },
    userRegister: function(userObj) {
        return axios.post("/users/register", userObj)
    },
    getClasses: function() {
        return axios.get("/api/classrooms")
    },
    addClass: function(newClass) {
        return axios.post("api/classrooms", newClass)
    },
    updateClass: function(updateObj) {
        return axios.put('api/classrooms/:id', updateObj )
    }

}