import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
function SignupForm (name){
    return (
        <div>
            {TextFild('نام')}
            {TextFild('نام خانوادگی')}
            {TextFild('نام کاربری')}
            {TextFild('رمز عبور')}
            {TextFild('تکرار رمز عبور')}
            {CustomButton('وارد شوید')}
        </div>
    )
}

export default SignupForm;