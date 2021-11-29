import { Box, Heading, Text, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckIcon } from '@/icons'

export default function PricingPlanCard({
  price,
  description,
  included,
  name,
  planOption,
  planLabel,
  planLink
}) {

  return (
    <Box className="price-card-item">
      <Box>
        <Heading
          as="h3"
          fontSize="2rem"
          lineHeight="6"
          fontWeight="700"
          textAlign={'center'}
          mb={6}
        >
          {name}
        </Heading>
        <Box textAlign={'center'} className="price-card-inner-box">
          <Text
            fontWeight="900"
            fontSize="3xl"
            lineHeight="shorter"
            mb={6}
          >
            {price ?
              new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
              }).format(price)
              :
              (<> Contact us </>)
            }
          </Text>

          {planOption ?
            (<Text >{planOption} </Text>)
            :
            (<Text opacity='0'>Option</Text>)
          }


          <Text mt={4} fontSize="lg" lineHeight="5" paddingRight={'1rem'}>
            {description}
          </Text>
          <Link
            href={planLink}
            passHref
          >
            <motion.a
              className={name === "Pro" ?
                "external-anchor price-anchor bg-primary" :
                "external-anchor price-anchor bg-secondary"}
              whileHover={{
                scale: 1.04,
                transition: {
                  type: "spring",
                  stiffness: 1000,
                }
              }}>
              {planLabel}
            </motion.a>
          </Link>
        </Box>
      </Box>

      <Box pt={6} pb={8} px={6}>
        <Heading
          as="h4"
          fontSize="sm"
          fontWeight="medium"
          color="gray.900"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          What&apos;s included
        </Heading>
        <Stack as="ul" mt={6} spacing={4}>
          {included.map((feature, index) => (
            <Stack
              as="li"
              key={index}
              display="flex"
              spacing={3}
              direction="row"
            >
              <Box
                as={CheckIcon}
                flexShrink="0"
                w={5}
                h={5}
                color="green.500"
                aria-hidden="true"
              />
              <Text as="span" fontSize="md" >
                {feature}
              </Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}
