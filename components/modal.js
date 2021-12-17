import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Input, FormLabel } from '@chakra-ui/react'

const Modal = ({ winReady, showModal, onClose }) => {
  const [modalContent, setModalContent] = useState(null)
  const [status, setStatus] = useState("Save")
  const [field, setField] = useState("")


  useEffect(() => {
    if (!showModal) return null

    const getData = async () => {
      try {
        const req = await fetch('/api/query')
        const res = await req.json()
        console.log("modal content", res)
        setModalContent(res.data)
      } catch (error) {
        console.log("ERROR", error)
      }
    }
    getData()
  }, [showModal]);

  const handleClose = () => {
    onClose()
  }

  const handleChange = (e) => {
    setField(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Waiting")

    try {
      await fetch('/api/mutations/update', {
        method: 'POST',
        body: JSON.stringify({ slug: field })
      })
      setStatus("Completed")

    } catch (error) {
      setStatus("Save")
      console.log("Error updating")
    }
  }



  if (!winReady) return null;

  if (modalContent) {
    //console.log(modalContent)
  }

  return (
    showModal &&
    <div className='modal-container'>
      <Box
        height='50%'
        width='50%'
        zIndex='30'
        padding='1rem 1.2rem'
        bg='var(--white-color)'
        borderRadius='var(--b-radius)'
      >
        <Flex justifyContent='flex-end'>
          <Button
            backgroundColor='transparent'
            _hover={{ bg: 'transparent' }}
            _focus={{ boxShadow: 'unset' }}
            _active={{ bg: 'transparent' }}
            onClick={handleClose}>
            <Box as="span"
              fontSize="2rem"
              fontWeight="bold"
              color='var(--primary-color)'
              _hover={{
                color: 'var(--secondary-color)'
              }}>×
            </Box>
          </Button>
        </Flex>

        {modalContent?.hero &&
          <form onSubmit={handleSubmit}>
            <Flex justifyContent='space-between' flexDir='column'>
              <Box>
                <Box pb='6'>
                  <p>Hero Image</p>
                  <img src={modalContent.hero.image.url} alt="hero" />
                </Box>

                <Box pb='6'>
                  <input type='file' />
                </Box>

                <Box pb='6'>
                  <FormLabel htmlFor="hero-slug" display='block'>Slug</FormLabel>
                  <Input
                    id="hero-slug"
                    placeholder={modalContent.hero.slug}
                    name={field}
                    value={field}
                    onChange={handleChange}
                    required
                  >
                  </Input>
                </Box>
              </Box>

              <Flex justifyContent='space-between' >
                <Button
                  minW='40%'
                  bg='var(--third-color)'
                  letterSpacing='1.4px'
                  _hover={{ bg: 'var(--third-color)' }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  minW="40%"
                  bg="var(--secondary-color)"
                  letterSpacing='1.4px'
                  color='var(--white-color)'
                  _hover={{ bg: 'var(--secondary-color)' }}
                  type="submit">
                  {status}
                </Button>
              </Flex>
            </Flex>
          </form>
        }

      </Box >
    </div >
  );

}

export default Modal
