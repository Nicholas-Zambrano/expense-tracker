import { useState } from "react";
import "./BalancePage.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/arrow-left.svg";
import success from "../../assets/success.svg"


function BalancePage(){

    const [isBalance,setIsBalance]= useState(0)
    const [isAccountName,setIsAccountName] = useState("")
    const [isAccountType,setIsAccountType] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleBalance = (event) =>{
        setIsBalance(event.target.value)
    }

    const handleAccountName = (event)=>{
        setIsAccountName(event.target.value);
    }

    const handleAccountType = (event)=>{
        setIsAccountType(event.target.value);
    }

    const handleSubmitButton = (event)=>{
        event.preventDefault();
        setIsSubmitted(true)

        setTimeout(() => {
            window.location.href="/dashboard";
            
        }, 2000);
    }


    return(
        <>
        {isSubmitted ? (
            <section className="balancePage__success">
                <div className="balancePage__successWrapper">
                    <img className="balancePage__successImage" src={success} alt="success" />
                    <h2 className="balancePage__successImageTitle">You are set !!</h2>
                </div>
            </section>
        ) :(
        <div className="balancePage">
            <header className="balancePage__header">

                <Link to="/setup">
                    <img className="balancePage__arrow" src={arrow} alt="arrow"/>
                </Link>

                <h2 className="balancePage__title">Add new account</h2>

            </header>





            <section className="balancePage__balance">
                <p className="balancePage__balanceText">Balance</p>
                <h1 className="balancePage_balanceValue">£{isBalance}</h1>
                <form className="balancePage__form" onSubmit={handleSubmitButton}> 
                    <input 
                    className="balancePage__input"
                    type="text"
                    id="name"
                    name = "name"
                    placeholder="Name"
                    value = {isAccountName}
                    onChange={handleAccountName}
                     />

                {/* 
                these are for drop downs
                 */}

                <select 
                name="accountType"
                id="name"
                value={isAccountType}
                onChange={handleAccountType}
                className="balancePage__select"
                >

                {/* the value is nothing,as thats the name of the dropdown */}
                {/* <option value="">Select</option> */}
                <option value="select">Select</option>
                <option value=""> Natwest</option>

                <option value="checking">Monzo</option>
                <option value="savings">HSBC</option>
                <option value="credit">Nationwide</option>
                <option value="other">Other</option>
                </select>
                {/* <p>{isBalance}</p> */}

                <input 
                type="number" 
                id="balance"
                value={isBalance}
                onChange={handleBalance}
                className="balancePage__input"  
                />

                <button className="balancePage__button">Continue</button>
            </form>

            </section>
        </div>
    )}
</>
    );
}


export default BalancePage;