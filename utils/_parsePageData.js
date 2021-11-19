import { parseBlocksMdx } from '@/utils/_parseBlocksMdx'

const parsePageData = async ({ blocks, subtitle, ...page }) => ({
  ...(blocks && {
    blocks: await parseBlocksMdx(blocks)
  }),
  ...(subtitle && {
    subtitle: {
      markdown: subtitle,
    }
  }),
  ...page
})

export { parsePageData }
