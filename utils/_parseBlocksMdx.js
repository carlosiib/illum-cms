import { parseColumnsMdx } from '@/utils/_parseColumnsMdx'

const parseBlocksMdx = async (blocks) =>
  await Promise.all(
    blocks.map(async ({ columns, content, gridSubtitle, ...block }) => ({
      ...(gridSubtitle && {
        gridSubtitle: {
          markdown: gridSubtitle
        }
      }),
      ...(content && {
        content: {
          markdown: content,
        }
      }),
      ...block,
      ...(columns &&
        columns.length && {
        columns: await parseColumnsMdx(columns)
      })
    }))
  )

export { parseBlocksMdx }
