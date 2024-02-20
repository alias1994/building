import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import Snackbar from './Snackbar.jsx'
import {loginUser} from "../redux/apiFunction/apiFunction";
import {useDispatch } from "react-redux";
import {useState} from "react";
import store from "../redux/store";
function LoginForm (name){
    const txt=store.getState().user.text;
    const[inputValue, setInputValue]= useState({username:'',password:''});

    const handleInput= (e)=>{
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }
    const dispatch= useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginUser(inputValue));

    }
    return(
        <div>
            <TextFild stateName="username" name='نام کاربری' handleInput={handleInput} />
            <TextFild stateName="password" name='رمز عبور' handleInput={handleInput} />
            {/*{Snackbar('نام کاربری و یا رمز عبور اشتباه است')}*/}
            {/*<Snackbar text={txt} />*/}
            <CustomButton name='وارد شوید' handleSubmit={handleSubmit} />
        </div>
    )
}
export default LoginForm;
//نام کاربری و یا رمز عبور اشتباه اس