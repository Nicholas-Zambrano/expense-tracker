import "./SetUpPage.scss";
import { Link } from "react-router-dom";

function SetUpPage(){
    return(
        <div className="setUpPage">
            <section className="setUpPage__header">
                <h1 className="setUpPage__title">Let's setup your account!</h1>
            </section>

            <p className="setUpPage__text">Account can be your bank,credit card or your wallet.</p>

            <Link to="/balance">
                <button className="setUpPage__button">Let's go</button>
            </Link>
        </div>
    )
}

export default SetUpPage;