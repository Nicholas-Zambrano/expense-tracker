
import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import hand_image from "../../assets/hand_image.svg";
import plan_image from "../../assets/plan_image.svg";
import cash_image from "../..//assets/cash_image.svg";
import 'swiper/css/pagination';
import { Pagination } from "swiper/modules";
import "./SignUpPage.scss"



//  the function needs to be in capital letter
function SignUpPage(){

    // const swiper = new Swiper('.swiper', {
    //     // configure Swiper to use modules
    //     modules: [Navigation, Pagination],
    
    //   });

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
                    <p>
                        Become your own money manager
                        <br/>
                         and make every cent count</p>
                    </SwiperSlide>
                <SwiperSlide className="signUp__swiperWrapper" >
                    <img  className="signUp__swiperImage" src={cash_image} alt="cash image"/>
                    <p>
                        Track your transaction easily, 
                        <br/>
                        with categories and financial report.
                    </p>
                    </SwiperSlide>
                <SwiperSlide className="signUp__swiperWrapper">
                    <img  className="signUp__swiperImage" src= {plan_image} alt="plan image"/>
                    <p>
                        Setup budget for each category
                        <br/>
                        so you in control
                    </p>
                    </SwiperSlide>
                </Swiper>

            </section>


            <h1>Sign up</h1>
        </div>
    )

}

export default SignUpPage;