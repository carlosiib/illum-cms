import { useState } from 'react';
import {
  Box,
  Text,
  FormLabel,
  VisuallyHidden
} from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react"

export default function NewsletterSignup({ ctaLabel, subtitle, title, image }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const [isMobile] = useMediaQuery("(max-width: 769px)")

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        "body": JSON.stringify({ email: email })
      });
      setState("SUCCESS");

    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <Box py={12} >
      <Box maxW="7xl" mx="auto" position={'relative'} >
        <Box position={'absolute'} top={'0'} left={'30%'} zIndex={'10'} className="newsletter-content">
          <Text
            fontSize={['3xl', '5xl']}
            fontWeight="bold"
            fontFamily="Cooper LT BT"
            className="newsletter-title"
          >
            {title}
          </Text>
          <Text
            fontSize={['3xl', '6xl']}
            fontWeight="bold"
            fontFamily="Cooper LT BT"
            className="newsletter-subtitle"
          >
            {subtitle}
          </Text>
          <Box mt={2} display={{ sm: 'flex' }} className="newsletter-form mobile-container">
            <VisuallyHidden as={FormLabel} htmlFor="emailAddress">
              Email address
            </VisuallyHidden>
            <input
              id="emailAddress"
              type="email"
              autoComplete="email"
              required
              placeholder="YOUR EMAIL"
              className="newsletter-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className={state === "LOADING" ? "newsletter-btn" : "newsletter-btn"}
              type="button"
              disabled={state === "LOADING"}
              onClick={subscribe}
            >
              {ctaLabel || 'Submit'}
            </button>
          </Box>
          <Box mt={2}>
            {state === "ERROR" && (
              <p className="failedSubmission">{errorMessage}</p>
            )}
            {state === "SUCCESS" && (
              <p className="successSubmission">Success!</p>
            )}
          </Box>
        </Box>
        <img
          src={image.url}
          className="newsletter-img"
          alt="Newsletter join now"
          width={isMobile ? "240" : "430"}
          height={isMobile ? "240" : "450"}
          loading="lazy" />
      </Box>
    </Box>
  )
}
