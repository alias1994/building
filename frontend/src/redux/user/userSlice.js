import { createSlice,  createAsyncThunk   } from "@reduxjs/toolkit";

export const addUser= createAsyncThunk("user/addUser", async(values)=>{
    return fetch("https://37.32.8.247:3000/register", { method:"POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
        firstname: values.firestname,
        lastname: values.lastname,
        username: values.username,
        password: values.password
    })
    }).then((response) => response.json())
        .then((json) => console.log(json));

});


const userSlice= createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:[],
        error:'', 
        isSuccess:''  
     },

    /// reducer call here
    extraReducers:builder=>{


        // add user 
        builder.addCase(addUser.pending, state=>{
            state.loading= true
            state.error= ''
        });
        builder.addCase(addUser.fulfilled, (state, action)=>{
             state.loading=false
             state.user=[]
             state.isSuccess=action.payload
        });

        builder.addCase(addUser.rejected, (state, action)=>{
            state.loading= false
            state.user=[]
            state.error= action.error.message

        });

      
       
    }

    /// end reduce
    
})


  export default userSlice.reducer; 