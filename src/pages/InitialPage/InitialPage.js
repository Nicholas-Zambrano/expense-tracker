import "./InitialPage.scss";
import overlayImage from "../../assets/overlay-circle.svg";
import welcomeDom from "../../assets/welcome_button.gif"
import { Link, useNavigate } from "react-router-dom";



function InitialPage() {

    const navigate = useNavigate()

    // navigating to another page , using navigate function 
    const handleWelcomeClick = ()=>{
        setTimeout(() => {
            navigate("/signUp")
        }, 250);
    }

    return(
        <div className="initialPage">
            <section className="initialPage__container">
                <img className= "initialPage__overlay" src= {overlayImage} alt="overlay" />
                <h1 className="initialPage__title">BudgetSaveNow</h1>

                {/* <button className="initialPage__welcomeButton">Welcome Habibi</button> */}

                <img src={welcomeDom} alt = "welcome" />

            </section>

            <div className="initialPage__buttonWrapper">
                <button 
                onClick={handleWelcomeClick}
                
                className="initialPage__welcomeButton">Welcome</button>
            </div>
        </div>
    )
}

export default InitialPage;