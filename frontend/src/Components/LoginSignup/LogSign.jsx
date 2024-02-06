// import React from 'react'
import  './LogSign.css'
import user_icon from "../Assets/person.png"
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useState } from 'react'

const LogSign = () => {

  const [submit,setSubmit] =useState("ورود")

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{submit==="ورود"?" ورود به حساب":"ساخت حساب کاربری"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
            <input type="text" placeholder='نام کاربری'/>
            <img src={user_icon} alt="" />
        </div>
        {submit=== "ورود"?<div></div>: 
        <div className="input">
        <input type="email" placeholder='ایمیل' />
        <img src={email_icon} alt="" />
        </div>
        }
        
        <div className="input">
            <input type="password" placeholder='رمز'/>
            <img src={password_icon} alt="" />
        </div>
      </div>
      {submit==="ثبت نام"? <div></div>: 
      <div className="forgot_password">
      فراموشی رمز؟ <span>بزن اینجا</span>
            </div>
      }
      
      <div className="submit_container">
        <div className={submit==="ورود"?"submit gray":"submit"} onClick={()=>{setSubmit("ثبت نام")}}>ثبت نام</div>
        <div className={submit==="ثبت نام"?"submit gray":"submit"} onClick={()=>{setSubmit("ورود")}}>ورود</div>
      </div>
    </div>
  )
}

export default LogSign
