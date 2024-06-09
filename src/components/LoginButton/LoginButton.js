import { useNavigate } from "react-router-dom";
import "./LoginButton.scss";

function LoginButton(){

    const navigate = useNavigate();
    const handleLogin = ()=>{

        setTimeout(() => {
            navigate("/login")
        }, 250);
    }

    return(
        <div className="loginButton">

            <button onClick={handleLogin} className="loginButton__loginButton">Login</button>

        </div>
    )
}

export default LoginButton;