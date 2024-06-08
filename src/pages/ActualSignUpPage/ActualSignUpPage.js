import "./ActualSignUpPage.scss"
import arrow from "../../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/client";
import { useState } from "react";

function ActualSignUpPage(){

    // create a useState 
    const [inputValue,setInputValue] = useState("")

    const navigate = useNavigate();

    const arrowClick = ()=>{
        setTimeout(() => {
            navigate(-1)
            
            
        }, 250);

    }

    // we need to track the change on the input text
    const handleOnChange = (event)=>{
        // here we track the input changes
        // and we update the state to the new input changes
        // setInputValue -> is the updated state
        setInputValue(event.target.value)

    }
    // we print out current value of input
    console.log(inputValue);

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
                <form className="actualSignUpPage__form">
                    <div className="actualSignUpPage__name actualSignUpPage__formGroup">
                        <input
                        // calling the function to track input
                        onChange={handleOnChange}
                        className="actualSignUpPage__nameInput actualSignUpPage__input" 
                        placeholder="Name"
                        type="text"
                        name = "name"
                        id="name"
                        />
                    </div>

                    <div className="actualSignUpPage__formGroup actualSignUpPage__email  ">
                        <input 
                        onChange={handleOnChange}
                        className="actualSignUpPage__emailInput actualSignUpPage__input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="email"
                        />    
                    </div>
                    <div className="actualSignUpPage__formGroup actualSignUpPage__password">
                        <input 
                        onChange={handleOnChange}
                        className="actualSignUpPage__emailInput actualSignUpPage__input"
                        type="text" 
                        placeholder="Password"
                        name="password"
                        id="password"
                        />

                    </div>
                    
                </form>

            </section>


        </div>
    )
}

export default ActualSignUpPage;