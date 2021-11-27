
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { Box, Text } from "@chakra-ui/layout";
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
    <Box py={12}>
      <Box maxW="7xl" mx="auto" className="testimonial-container">
        <div className="swiper-button-prev">
          <span className="swiperPrev"></span>
        </div>
        <Swiper {...swiperOption} className="testimonial-quote">
          {testimonialContents && (
            testimonialContents.map(({ author, quote, designation }) =>
              <SwiperSlide key={author}>
                <Box className="quote-item">
                  <blockquote>{quote}</blockquote>
                  <Text fontWeight={'bold'} letterSpacing={'1.3px'} fontSize={'1.1rem'} mb={2}>{author}</Text>
                  <Text>{designation}</Text>
                </Box>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <div className="swiper-button-next">
          <span className="swiperNext"></span>
        </div>
      </Box>
    </Box>

  )
}

