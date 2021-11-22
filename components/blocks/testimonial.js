
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Box, Center } from "@chakra-ui/layout";
import 'swiper/css'

SwiperCore.use([Navigation]);

export default function Testimonial({ testimonialContents }) {
  const swiperOption = {
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Box maxW="7xl" mx="auto" py={12} className="testimonial-container">
      <div className="swiper-button-prev">
        <span className="swiperPrev"></span>
      </div>
      <Swiper {...swiperOption} className="testimonial-quote">
        {testimonialContents && (
          testimonialContents.map(({ author, quote, designation }) =>
            <SwiperSlide key={author}>
              <Box className="quote-item">
                <blockquote>{quote}</blockquote>
                <p className="quote-author">{author}</p>
                <p>{designation}</p>
              </Box>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="swiper-button-next">
        <span className="swiperNext" ></span>
      </div>
    </Box>

  )
}

