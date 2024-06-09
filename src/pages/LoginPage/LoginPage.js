
import "./LoginPage.scss";
import arrow from "../../assets/arrow-left.svg";
import { Link } from "react-router-dom";
import LoginButton from "../../components/LoginButton/LoginButton";
import { useState } from "react";
import { supabase } from "../../config/client";

function LoginPage(){

    const [isEmail,setIsEmail] = useState ("");
    const [isPassword,setIsPassword] = useState("")
    const[isError,setIsError] =  useState("")

    const handlePassword = (event)=>{
        event.preventDefault();
        setIsPassword  (event.target.value);
    }

    const handleEmail= (event)=>{
        event.preventDefault();
        // updating email state
        setIsEmail(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();


        // this is the data received by the user
        const loginData = {
            email : isEmail,
            password: isPassword
        }

        if(isPassword == "" || isEmail == ""){
            setIsError("Password or Email is wrong");
            alert(isError)
        }

        //  need verification if the email is incorrect
        const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // using test function to test email
        if(!emailValid.test(isEmail)){
            setIsError("Your email is invalid");
            alert(isError);
        }
        // need to check if the password is correct for that email 


        // need to communicate with supabase

        try{
        const {data,error} = await supabase.auth.signInWithPassword({
            // this is the data we are passing to supabase
            email:loginData.email,
            password:loginData.password

        })
        console.log(loginData);
        console.log(data);
    }
    catch(error){
        setIsError("unexpected error with login you in")
        alert("unexpected error with login you in")

    }
    }



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

            <form className="loginPage__form" onSubmit={handleSubmit}>
                <div className="loginPage__formGroup">
                    <input
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="loginPage__input"
                    onChange={handleEmail}
                    value={isEmail}
                
                    />
                </div>

                <div>
                    <input 
                    placeholder="Password"
                    type="password" 
                    id="password"
                    name="password"
                    className="loginPage__input"
                    onChange={handlePassword}
                    value={isPassword}
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