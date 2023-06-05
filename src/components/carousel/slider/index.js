import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";
// images
import sliderImg from './images/sliderImg.jpg'
import sliderImgSize from './images/sliderImgSize.jpg'
import sliderTextImg from './images/sliderTextImg.jpg'


const SUISlider = ({ className }) => {
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
                    <img src={sliderImg} />
                </SwiperSlide>
                <SwiperSlide className="SUISliderContaniner" >
                    <img src={sliderImgSize} />
                </SwiperSlide>
                <SwiperSlide className="SUISliderContaniner" >
                    <img src={sliderTextImg} />
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

export default SUISlider
