import "./ActualSignUpPage.scss"
import arrow from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/client";
import { useState } from "react";
import SignUpButton from "../../components/SignUpButton/SignUpButton";
import { Link } from "react-router-dom";

function ActualSignUpPage(){

    // create useStates for each input, name ,email,password

    const [isName,setName] = useState("");
    const [isPassword,setPassword] = useState("");
    const [isEmail,setEmail] = useState("");
    // initially submit is false
    const [submit,setSubmit] = useState(false);

    const [error,setError] = useState("")

    // const settingErrorMessage = ()=>{

    // }

    const handleOnName = (event)=>{
        setName(event.target.value);
    }

    const handleOnPassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleOnEmail = (event) =>{
        setEmail(event.target.value);
    }



    const navigate = useNavigate();

    const arrowClick = ()=>{
        setTimeout(() => {
            navigate(-1)
        }, 250);
    }

    // handling the submit form 
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if (isName== "" || isPassword == ""|| isEmail == ""){
            //    alert("Invalid credentials")
            setError("invalid detail")
            alert(error);
            }

            if(isPassword.length < 6){
                setError("Password must be at least 6 characters long");
                alert(error);
            }

            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailValid){
                setError("Email is not valid");
                alert(error);
            }


            const signUpdata = {
                // here we access the use state , and this will be the sign up daa
                name: isName,
                password: isPassword,
                email : isEmail
            }

        try {
        
                // call supabase
                const {data,error} = await supabase.auth.signUp ({
                    email: signUpdata.email,
                    password: signUpdata.password,
        
                    // this is our sign up name
                    data:{
                        name: signUpdata.name
                    }
                })
        
                // if there's an error from subases
                if(error){
                    // then we update the state
                    setError(error.message)
                    console.error(error.message);
                    return;
                }
                
                alert("check your email")
                console.log(signUpdata);
                navigate("/login")
            
        } catch (error) {
            setError("unexpected error")
            alert(error)
        }

    }

  
    return(
        <div className="actualSignUpPage">
            <section className="actualSignUpPage__headerContainer">
                <div className="actualSignUpPage__header">
                    <div>
                        <img onClick={arrowClick} className = "actualSignUpPage__arrow" src={arrow} alt="arrow" />
                    </div>
                    <h1 className="actualSignUpPage__title">Sign Up</h1>
                </div>
            </section>

            <section className="actualSignUpPage__signUpSection">
                
                <form className="actualSignUpPage__form" onSubmit={handleSubmit}>
                    <div className="actualSignUpPage__name actualSignUpPage__formGroup">
                        <input
                        // calling the function to track input
                        onChange={handleOnName}
                        className="actualSignUpPage__nameInput actualSignUpPage__input" 
                        placeholder="Name"
                        type="text"
                        name = "name"
                        id="name"
                        value={isName}
                        />
                    </div>

                    <div className="actualSignUpPage__formGroup actualSignUpPage__email  ">
                        <input 
                        onChange={handleOnEmail}
                        className="actualSignUpPage__emailInput actualSignUpPage__input"
                        // the type is email 
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        // this is the jsx {isEmail}
                        value={isEmail}
                        />    
                    </div>
                    <div className="actualSignUpPage__formGroup actualSignUpPage__password">
                        <input 
                        onChange={handleOnPassword}
                        className="actualSignUpPage__emailInput actualSignUpPage__input"
                        // type is password to hyde the chatacters
                        type="password" 
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={isPassword}
                        />

                    </div>

                    <SignUpButton  type="submit"/>
                    
                </form>

                <div className="actualSignUpPage__loginSection">
                    <p>Already have an account ?</p>
                    <Link to="/login">Login</Link>

                </div>

            </section>


        </div>
    )
}

export default ActualSignUpPage;