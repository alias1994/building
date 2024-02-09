import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
function LoginForm (name){
    return(
        <div>
            {TextFild('نام کاربری')}
            {TextFild('رمز عبور')}
            {CustomButton('وارد شوید')}
        </div>
    )
}
export default LoginForm;