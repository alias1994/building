import TextFild from './text-fild.jsx'
import CustomButton from './custom-button.jsx'
function SignupForm (name){
    return (
        <div>
            {TextFild('نام کاربری')}
            {CustomButton('نام کاربری')}
        </div>
    )
}

export default SignupForm;