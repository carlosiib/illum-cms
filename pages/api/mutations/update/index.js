import { graphcmsClient } from '@/lib/_client'
import { updateHero } from '@/lib/_queries'

export default async (req, res) => {
  const client = graphcmsClient(false)

  const { slug } = JSON.parse(req.body)

  try {
    const update = await client.request(updateHero, {
      id: "ckx0qccfcw1gu0b286jpxmpom",
      slug: `${slug}`
    })

    const data = await update

    return res.status(201).json({
      data: data,
      error: null
    });
  } catch {
    return res.status(400).json({
      error: `Oops, something went wrong for updating the data..`,
    });
  }
}