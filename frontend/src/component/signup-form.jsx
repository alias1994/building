import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import { addUser } from "../redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import {useState} from "react";
function SignupForm (name){


    return (
            <div>
                {TextFild('نام','firestname')}
                {TextFild('نام خانوادگی','lastname')}
                {TextFild('نام کاربری','username')}
                {TextFild('رمز عبور','password')}
                {TextFild('تکرار رمز عبور')}
                {CustomButton('ثبت نام')}
            </div>

    )
}

export default SignupForm;