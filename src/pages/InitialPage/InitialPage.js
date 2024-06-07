import "./InitialPage.scss";
import overlayImage from "../../assets/overlay-circle.svg";
import welcomeDom from "../../assets/welcome_button.gif"



function InitialPage() {
    return(
        <div className="initialPage">
            <section className="initialPage__container">
                <img className= "initialPage__overlay" src= {overlayImage} alt="overlay" />
                <h1 className="initialPage__title">BudgetSaveNow</h1>

                {/* <button className="initialPage__welcomeButton">Welcome Habibi</button> */}

                <img src={welcomeDom} alt = "welcome" />

            </section>

        </div>
    )


}

export default InitialPage;