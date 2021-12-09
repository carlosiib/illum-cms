import { useState, useEffect } from 'react'
import { Box, Container, Heading, Flex } from '@chakra-ui/react'

import { Drift, getSiteLayout, Iubenda } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function PageLayout({ children, page }) {
  //console.log("internal page", page)
  const [courses, setCourses] = useState(["Course 1", "Course 2", "Course 3", "Course 4", "Course 5"])

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);

  }, []);

  function reOrder(result) {
    const { source, destination } = result

    if (!destination) return;

    //different column drag provider
    if (source.index === destination.index && source.droppableId === destination.droppableId) return;

    const items = Array.from(courses)
    const [reorderItems] = items.splice(source.index, 1)
    items.splice(destination.index, 0, reorderItems)
    setCourses(items)
  }

  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )

  return (
    <>
      {page?.seo && <SEO {...page.seo} />}

      {page?.hero ? (
        <>
          <Hero {...page.hero} navigation={page.navigation} page={page} />
        </>
      ) : (
        <>
          <Navigation {...page?.navigation} />
          <Box mx="auto" pt={24} px={[4, 6, null, 8]} >
            <Box
              display={[null, 'flex']}
              flexDir={[null, 'column']}
              alignItems={[null, 'center']}
              textAlign={[null, 'center']}
            >
              <Heading
                as="h1"
                fontSize="5xl"
                lineHeight="none"
                fontWeight="extrabold"
              >
                {page?.title}
              </Heading>
              {page?.subtitle && (
                <Container
                  mt={5}
                  p={0}
                  centerContent
                  lineHeight="tall"
                  fontSize="xl"
                >
                  <div dangerouslySetInnerHTML={{ __html: page.subtitle.markdown }}></div>
                </Container>
              )}
              <Iubenda />
            </Box>
          </Box>
        </>
      )}

      {page?.pageContent && (
        <Box py={12}>
          <Box
            maxW="7xl"
            mx="auto"
            padding={'0 1rem'}
            lineHeight="tall"
            fontSize={{ sm: '1rem', md: '1.1rem', lg: '1.2rem' }}>
            <div dangerouslySetInnerHTML={{ __html: page.pageContent.html }}></div>
          </Box>
        </Box>
      )}

      {page?.title === "Drag N Drop"
        && winReady
        ?
        <Box py={12}>
          <Flex
            className="b-3"
            maxW="7xl"
            mx="auto"
            padding={'0 1rem'}
            flexDirection={{ xsm: 'column', md: 'column', lg: 'row' }}>
            <Box
              className="b-1"
              w={{ xsm: '100%', md: '100%', lg: '20%' }}>
              <button>Add course</button>
            </Box>
            <DragDropContext onDragEnd={reOrder}>

              <Box
                className="b-1"
                w={{ xsm: '100%', md: '100%', lg: '80%' }}
                padding={'1rem'}

              >
                <Droppable droppableId="courses">
                  {(droppableProvided) => (
                    <Box
                      display='flex'
                      flexDirection='column'
                      justifyContent='space-between'
                      minH='30vh'
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                    >
                      {
                        courses.map((c, idx) => (
                          <Draggable draggableId={`${idx}`} index={idx} key={idx}>
                            {(draggableProvided) => (
                              <Box
                                border='1px solid black'
                                padding='0.6rem .8rem'
                                {...draggableProvided.draggableProps}
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                              >
                                {c}
                              </Box>
                            )}
                          </Draggable>
                        ))
                      }
                      {droppableProvided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            </DragDropContext>
          </Flex>
        </Box>
        :
        null

      }

      <div>
        {children}
        {pageNewsletter && <Marketing.NewsletterSignup {...pageNewsletter} />}
      </div>
    </>
  )
}

export const getLayout = (page) => {
  return getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)
}
