import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import Snackbar from './Snackbar.jsx'

function LoginForm (name){
    return(
        <div>
            {TextFild('نام کاربری')}
            {TextFild('رمز عبور')}
            {Snackbar('نام کاربری و یا رمز عبور اشتباه است')}
            {CustomButton('وارد شوید')}
        </div>
    )
}
export default LoginForm;
//نام کاربری و یا رمز عبور اشتباه اس