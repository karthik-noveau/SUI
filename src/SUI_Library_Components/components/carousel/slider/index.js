import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";
// images
import SliderImg1 from './images/SliderImg1.jpg'
import SliderImgSize from './images/SliderImgSize.jpg'
import SliderImgText from './images/SliderImgText.jpg'


export const SUISlider = ({ className }) => {
    return (
        <div className={className}>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, EffectFade]}
                className="SUISlider"
                effect={"fade"}   // slide effect={"fade"}
                allowSlidePrev={true} // Disable sliding to the previous slide
                allowSlideNext={true} // Disable sliding to the next slide
                allowTouchMove={true} // Disable touch interaction
            >

                <SwiperSlide className="SUISliderContaniner" >
                    <img src={SliderImg1} alt="slider1" />
                </SwiperSlide>
                <SwiperSlide className="SUISliderContaniner" >
                    <img src={SliderImgSize} alt="slider2" />
                </SwiperSlide>
                <SwiperSlide className="SUISliderContaniner" >
                    <img src={SliderImgText} alt="slider3" />
                    <div className="SUISliderTextContainer" >
                        <div className="SUISliderTextContainerBox" >
                            <p>Karthik is the web developer and moreover react js developer</p>
                            <p>Karthik is the web developer and moreover react js developer</p>
                            <p>Karthik is the web developer and moreover react js developer</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

