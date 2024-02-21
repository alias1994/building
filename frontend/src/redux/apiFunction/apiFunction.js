import {createAsyncThunk} from "@reduxjs/toolkit";
import store from './../store'
export const addUser= createAsyncThunk("user/addUser", async(values)=>{
    return fetch("http://37.32.8.247:3000/register", { method:"POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            firstname: values.firstname,
            lastname: values.lastname,
            username: values.username,
            password: values.password
        })
    }).then((response) => response.json())
        .then((json) => console.log(json.type == "ERROR" ? json.body.txt : "yess"));

});
export const loginUser= createAsyncThunk("user/loginUser", async(values)=>{

    return fetch("http://37.32.8.247:3000/signin", { method:"POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            username: values.username,
            password: values.password
        })
    }).then((response) => response.json())
        .then((json) => console.log(json.type == "ERROR" ? json.body.txt : "yess"));


});