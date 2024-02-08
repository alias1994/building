import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
function LoginForm (name){
    return(
        <div>
            {TextFild('نام کاربری')}
            {CustomButton('نام کاربری')}
        </div>
    )
}
export default LoginForm;