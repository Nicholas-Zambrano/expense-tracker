
import "./LoginPage.scss";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import LoginButton from "../../components/LoginButton/LoginButton";

function LoginPage(){

    return(
        <div className="loginPage">
            <section className="loginPage__headerContainer">
                <div className="loginPage__header">
                    <Link to="/signUp">
                        <img className="loginPage__arrow" src={arrow} alt="arrow"/>
                    </Link>
                    <h1 className="loginPage__title">Login Page</h1>
                </div>
            </section>

            <form className="loginPage__form">
                <div className="loginPage__formGroup">
                    <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="loginPage__input"
                
                    />
                </div>

                <div>
                    <input 
                    placeholder="Password"
                    type="password" 
                    id="password"
                    name="password"
                    className="loginPage__input"
                    />
                </div>

                <LoginButton/>

            </form>

            <div className="loginPage__signUpSection">
                <p className="loginPage__signUpText">Dont have an account yet?</p>
                <Link className = "loginPage__signUpLink" to= "/signing">SignUp</Link>

            </div>

        </div>
    )
}

export default LoginPage;