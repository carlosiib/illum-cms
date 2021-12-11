import { useState, useEffect } from 'react'
import { Box, Heading, Container, Flex } from '@chakra-ui/react'

import { Drift, getSiteLayout, Iubenda } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'




export default function PageLayout({ children, page }) {
  //console.log("internal page", page)

  const itemsFromBackend = [
    { id: "1", content: "Header" },
    { id: "2", content: "Body" },
    { id: "3", content: "Footer" },
  ];

  const columnsFromBackend = {
    ["web"]: {
      name: "Blocks",
      items: itemsFromBackend
    },
    ["layout"]: {
      name: "Layout",
      items: []
    }
  };

  const [columns, setColumns] = useState(columnsFromBackend)

  const [winReady, setwinReady] = useState(false);


  useEffect(() => {
    setwinReady(true);

  }, []);


  function onDragEnd(result, columns, setColumns) {
    if (!result.destination) return;
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId]
      const destColumn = columns[destination.droppableId]
      const sourceItems = [...sourceColumn.items]
      const destItems = [...destColumn.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
    } else {
      const column = columns[source.droppableId]
      const copiedItems = [...column.items]
      const [removed] = copiedItems.splice(source.index, 1)
      copiedItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }

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
            flexDirection={{ xsm: 'column', md: 'column', lg: 'row' }}
            justifyContent='center'
            alignItems='center'
            minH='40vh'>
            <DragDropContext onDragEnd={(result => onDragEnd(result, columns, setColumns))}>
              {Object.entries(columns).map(([id, column]) => {
                return (
                  <Box mx={{ xsm: '0', md: '0', lg: '1rem' }} key={id}>
                    <Heading as='h2' textAlign='center'>{column.name}</Heading>
                    <Droppable droppableId={id} key={id}>
                      {(provided, snapshot) => {
                        return (
                          <Box
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            padding='2rem'
                            width='250px'
                            minH='300px'
                            backgroundColor={snapshot.isDraggingOver ? "lightblue" : "lightgrey"}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided, snapshot) => {
                                    return (
                                      <Box
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        userSelect='none'
                                        padding='1rem'
                                        margin='0 0 8px 0'
                                        minH='50px'
                                        color='white'
                                        backgroundColor={snapshot.isDragging ? "var(--secondary-color)" : "var(--primary-color)"}
                                        style={{ ...provided.draggableProps.style }}
                                      >
                                        {item.content}
                                      </Box>
                                    )
                                  }}
                                </Draggable>
                              )
                            })}
                            {provided.placeholder}
                          </Box>
                        )
                      }}
                    </Droppable>
                  </Box>

                )
              })}
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
