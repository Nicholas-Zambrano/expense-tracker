import { useNavigate } from "react-router-dom";
import "./SignUpButton.scss"

function SignUpButton(){

    const navigate = useNavigate();
    const handleSignUp = () =>{
        setTimeout(() => {
            navigate ("/signing")
        }, 250);

    }

    return(
        <div>
            <button className="signUpButton__button" onClick={handleSignUp}>
                SignUp
                
            </button>

        </div>
    )
}

export default SignUpButton;