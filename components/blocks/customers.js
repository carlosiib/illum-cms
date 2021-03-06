
import { Box, Heading, Flex } from "@chakra-ui/layout";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Customers({ heading, customerContents }) {
  const swiperOption = {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 6,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },

      // when window width is >= 640px
      992: {
        slidesPerView: 6,
      },
    },
  };
  return (
    <Box py={12} >
      <Box maxW="7xl" mx="auto" className="customers-container" padding={'0 1rem'}>
        <Heading as="h6" mb={14} fontSize={'6xl'}>
          {heading}
        </Heading>
        <Box className="mobile-container">
          <Swiper {...swiperOption} >
            <Flex justifyContent={'center'} alignItems={'center'}>
              {customerContents &&
                (
                  customerContents.map(({ imageTitle, image }) =>
                    <SwiperSlide key={imageTitle}>
                      <img src={image.url} width="100" height="100" alt={imageTitle} loading="lazy" />
                    </SwiperSlide>
                  )
                )}
            </Flex>
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}


