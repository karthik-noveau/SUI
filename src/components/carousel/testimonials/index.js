import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper";
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

import SliderImg1 from './images/SliderImg1.jpg'
import { Rate } from "antd";

const SUITestimonials = ({ className }) => {

  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      <div className="SUITestimonial">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
            1120: {
              spaceBetween: 40,
              slidesPerView: 3,
            },

          }}
          ref={swiperRef}
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
          className="SUITestimonialContainer"
          effect={"slide"}   // slide effect={"fade"}
          allowSlidePrev={true} // Disable sliding to the previous slide
          allowSlideNext={true} // Disable sliding to the next slide
          allowTouchMove={true} // Disable touch interaction
        >
          <SwiperSlide className="SUITestimonialSwiperSlide">
            <div className="SUITestimonialContainerBox">
              <div className="SUITestimonialContainerBoxItem" >
                <div className="SUITestimonialProfile">
                  <img src={SliderImg1} alt="img" />
                  <div className="SUITestimonialProfileTitle" >
                    <p>Karthik B</p>
                    <Rate value={5} disabled className="SUITestimonialRatingButton" />
                  </div>
                </div>
                <div className="SUITestimonialReviewText" >
                  <p><RiDoubleQuotesL /> My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them  <RiDoubleQuotesR /></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SUITestimonialSwiperSlide">
            <div className="SUITestimonialContainerBox">
              <div className="SUITestimonialContainerBoxItem" >
                <div className="SUITestimonialProfile">
                  <img src={SliderImg1} alt="img" />
                  <div className="SUITestimonialProfileTitle" >
                    <p>Karthik B</p>
                    <Rate value={5} disabled />
                  </div>
                </div>
                <div className="SUITestimonialReviewText" >
                  <p><RiDoubleQuotesL /> My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them  <RiDoubleQuotesR /></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SUITestimonialSwiperSlide">
            <div className="SUITestimonialContainerBox">
              <div className="SUITestimonialContainerBoxItem" >
                <div className="SUITestimonialProfile">
                  <img src={SliderImg1} alt="img" />
                  <div className="SUITestimonialProfileTitle" >
                    <p>Karthik B</p>
                    <Rate value={5} disabled />
                  </div>
                </div>
                <div className="SUITestimonialReviewText" >
                  <p><RiDoubleQuotesL /> My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them  <RiDoubleQuotesR /></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SUITestimonialSwiperSlide">
            <div className="SUITestimonialContainerBox">
              <div className="SUITestimonialContainerBoxItem" >
                <div className="SUITestimonialProfile">
                  <img src={SliderImg1} alt="img" />
                  <div className="SUITestimonialProfileTitle" >
                    <p>Karthik B</p>
                    <Rate value={5} disabled />
                  </div>
                </div>
                <div className="SUITestimonialReviewText" >
                  <p><RiDoubleQuotesL /> My recent experience with Dr Prem at Apollo Dental OMR was wonderful. I went to the clinic based on the reviews online but wasn't sure until I got my broken braces fixed. Very grateful that I found them and would personally recommend them  <RiDoubleQuotesR /></p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <div onClick={goToPreviousSlide} className="swiper-custom-button-prev"> </div>
          <div onClick={goToNextSlide} className="swiper-custom-button-next"> </div>
        </div>
      </div>
    </>
  );
}

export default SUITestimonials;