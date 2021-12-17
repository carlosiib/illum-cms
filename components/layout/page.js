import { useState, useEffect } from 'react'
import { Box, Heading, Container, Flex, Button } from '@chakra-ui/react'

import { getSiteLayout, Iubenda } from '@/layout'
import Hero from '@/components/hero'
import Modal from '@/components/modal'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'
import SEO from '@/components/seo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


export default function PageLayout({ children, page }) {
  //console.log("internal page", page)

  const itemsFromBackend = [
    { id: "Hero", content: "Hero" },
    { id: "Body", content: "Body" },
    { id: "Footer", content: "Footer" },
  ];

  const columnsFromBackend = {
    ["Blocks"]: {
      name: "Blocks",
      items: itemsFromBackend
    },
    ["Layout"]: {
      name: "Layout",
      items: []
    }
  };

  const [columns, setColumns] = useState(columnsFromBackend)
  const [draggableActions, setDraggableActions] = useState({})

  const [winReady, setWinReady] = useState(false);
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    setWinReady(true);

    const localColumns = localStorage.getItem('columns')
    if (!localColumns) return;
    setColumns(JSON.parse(localColumns))

  }, []);

  useEffect(() => {

    const parsedCols = JSON.stringify(columns)
    localStorage.setItem('columns', parsedCols);

    const { source, destination, draggableId } = draggableActions

    const checkDestination = async (source = "", destination = "", draggableId = "") => {

      if (source.droppableId === "Blocks" && destination.droppableId === "Layout" && draggableId === "Hero") {
        console.log("from blocks to layout")

        try {
          const payload = { source: "Blocks", destination: "Layout" }

          const req = await fetch('/api/mutations/publish', {
            method: 'POST',
            body: JSON.stringify(payload)
          })
          const res = await req.json()

          console.log("mutations res front", res)

        } catch (error) {
          console.log("ERROR", error)
        }
      }

      if (source.droppableId === "Layout" && destination.droppableId === "Blocks" && draggableId === "Hero") {
        console.log("from layout to blocks")

        try {
          const payload = { source: "Layout", destination: "Blocks" }

          const req = await fetch('/api/mutations/publish', {
            method: 'POST',
            body: JSON.stringify(payload)
          })
          const res = await req.json()
          console.log("mutations res front", res)
        } catch (error) {
          console.log("ERROR", error)
        }
      }

    }
    checkDestination(source, destination, draggableId)



  }, [columns])


  function onDragEnd(result, columns, setColumns) {
    setDraggableActions(result)
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
        &&
        winReady
        ?
        <div>
          <Modal
            winReady={winReady}
            showModal={showModal}
            onClose={() => setShowModal(false)}

          />
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
              <DragDropContext
                onDragEnd={(result => onDragEnd(result, columns, setColumns))}
              >
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
                                          display='flex'
                                          flexDir='row'
                                          justifyContent='space-between'
                                          alignItems='center'
                                        >
                                          <div>{item.content}</div>
                                          <div>
                                            {column.name === "Layout"
                                              &&
                                              item.content === "Hero"
                                              &&
                                              <Button
                                                backgroundColor='var(--secondary-color)'
                                                _hover={{
                                                  bg: 'var(--secondary-color)'
                                                }}
                                                _focus={{ boxShadow: 'unset' }}
                                                _active={{ bg: 'var(--secondary-color)' }}
                                                letterSpacing='1.1px'
                                                zIndex='10'
                                                onClick={() => setShowModal(true)}>
                                                Edit
                                              </Button>
                                            }
                                          </div>
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
        </div>
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
