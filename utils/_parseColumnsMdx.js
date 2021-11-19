const parseColumnsMdx = async (columns) =>
  await Promise.all(
    columns.map(async ({ content, ...column }) => ({
      ...(content && {
        content: {
          markdown: content
        }
      }),
      ...column
    }))
  )

export { parseColumnsMdx }
