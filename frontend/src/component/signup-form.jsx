import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import { addUser } from "../redux/apiFunction/apiFunction";
import {useDispatch } from "react-redux";
import {useState} from "react";
function SignupForm (name){

    const[inputValue, setInputValue]= useState({firstname:'', lastname:'', username:'',password:''});

    const handleInput= (e)=>{
        setInputValue({...inputValue, [e.target.name]: e.target.value});
    }
    const dispatch= useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser(inputValue))
    }
    return (
            <div>
                <TextFild stateName="firstname" name='نام' handleInput={handleInput} />
                <TextFild stateName="lastname" name='نام خانوادگی' handleInput={handleInput} />
                <TextFild stateName="username" name='نام کاربری' handleInput={handleInput} />
                <TextFild stateName="password" name='رمز عبور' handleInput={handleInput} />
                <TextFild stateName="test" name='تکرار رمز عبور' handleInput={handleInput} />
                <CustomButton name='ثبت نام' handleSubmit={handleSubmit} />
            </div>

    )
}

export default SignupForm;