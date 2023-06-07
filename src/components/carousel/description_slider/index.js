import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./style.css";
// images
import SliderImg1 from './images/SliderImg1.jpg'
import SliderImgSize from './images/SliderImgSize.jpg'


const SUIDescriptionSlider = ({ className }) => {
    return (
        <div className={className}>
            <div className="SUIDescriptionSlider">
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="SUIDescriptionSliderContaniner"
                    effect={"slide"}   // slide effect={"fade"}
                    allowSlidePrev={true} // Disable sliding to the previous slide
                    allowSlideNext={true} // Disable sliding to the next slide
                    allowTouchMove={true} // Disable touch interaction
                >

                    <SwiperSlide className="SUIDescriptionSliderContaninerBox" >
                        <img src={SliderImg1} alt="slider1" />
                    </SwiperSlide>
                    <SwiperSlide className="SUIDescriptionSliderContaninerBox" >
                        <img src={SliderImgSize} alt="slider2" />
                    </SwiperSlide>
                </Swiper>

                <div className="SUIDescriptionSliderTextContainer">
                    <div className="SUIDescriptionSliderTextContainerBox">
                        <p className="heading">Historical Buildings</p>
                        <div className="SUIDescriptionSliderTextContainerBoxItem">
                            <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                            <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                            <p> img elements must have an alt prop, either with meaningful text, or an empty string for decorative images </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SUIDescriptionSlider
