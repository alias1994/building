import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
import Snackbar from './Snackbar.jsx'

function LoginForm (name){
    return(
        <div>
            <Snackbar/>
            {TextFild('نام کاربری')}
            {TextFild('رمز عبور')}
            {CustomButton('وارد شوید')}
        </div>
    )
}
export default LoginForm;