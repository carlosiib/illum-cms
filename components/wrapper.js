import * as Blocks from '@/blocks'
import useMediaQuery from 'hooks/useMediaQuery'

export default function Wrapper({ banner, blocks, hero, navigation, ...page }) {
  const isMediumDisplay = useMediaQuery("(max-width: 1075px)")

  return (
    <>
      {blocks.map((block) => {
        const Component = Blocks[block.component] || Blocks[block.__typename]

        if (!Component) return null

        return <Component key={block.id} page={page} isMediumDisplay={isMediumDisplay} {...block} />
      })}
    </>
  )
}
