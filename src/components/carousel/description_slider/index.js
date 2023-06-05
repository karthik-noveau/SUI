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


const SUIDescriptionSlider = ({ className }) => {
    return (
        <div className={className}>
            <div className="SUIDescriptionSlider">
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
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="SUIDescriptionSliderContaniner"
                    effect={"fade"}   // slide effect={"fade"}
                    allowSlidePrev={true} // Disable sliding to the previous slide
                    allowSlideNext={true} // Disable sliding to the next slide
                    allowTouchMove={true} // Disable touch interaction
                >

                    <SwiperSlide className="SUIDescriptionSliderContaninerBox" >
                        <img src={sliderImg} />
                    </SwiperSlide>
                    <SwiperSlide className="SUIDescriptionSliderContaninerBox" >
                        <img src={sliderImgSize} />
                    </SwiperSlide>
                </Swiper>

                <div className="SUIDescriptionSliderTextContainer">
                    <div className="SUIDescriptionSliderTextContainerBox">
                        <p className="heading">Historical Buildings</p>
                        <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                        <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SUIDescriptionSlider
