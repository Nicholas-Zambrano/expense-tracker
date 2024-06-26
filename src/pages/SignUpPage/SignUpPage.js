
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import hand_image from "../../assets/hand_image.svg";
import plan_image from "../../assets/plan_image.svg";
import cash_image from "../..//assets/cash_image.svg";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import "./SignUpPage.scss"
import SignUpButton from "../../components/SignUpButton/SignUpButton";
import LoginButton from "../../components/LoginButton/LoginButton";
import { useNavigate } from "react-router-dom";



//  the function needs to be in capital letter
function SignUpPage(){




    return(
        <div>

            <section className="signUp__swiperContainer">
                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={()=>{console.log("slide change");}}
                onSwiper={(swiper) =>{console.log(swiper);}}
                // this allows the bullet points to follow the slwiper
                pagination = {{
                    dynamicBullets:true
                }}
                modules={[Pagination]}
                >
                <SwiperSlide className="signUp__swiperWrapper">
                    <img className="signUp__swiperImage" src={hand_image} alt="hand holding cash" />
                    <p  className="signUp__imageText">
                        Become your own money manager
                        <br/>
                         and make every cent count</p>
                    </SwiperSlide>
                <SwiperSlide className="signUp__swiperWrapper" >
                    <img  className="signUp__swiperImage" src={cash_image} alt="cash image"/>
                    <p className="signUp__imageText">
                        Track your transaction easily, 
                        <br/>
                        with categories and financial report.
                    </p>
                    </SwiperSlide>
                <SwiperSlide className="signUp__swiperWrapper">
                    <img  className="signUp__swiperImage" src= {plan_image} alt="plan image"/>
                    <p className="signUp__imageText">
                        Setup budget for each category
                        <br/>
                        so you in control
                    </p>
                    </SwiperSlide>
                </Swiper>
            

            </section>

            <section className="signUp__buttonWrapper">
                <div className="signUp__signUpButton" >
                    <SignUpButton/>
                </div>

                <div className="signUp__loginButton">
                    <LoginButton/>
                </div>
            </section>
        </div>
    )

}

export default SignUpPage;