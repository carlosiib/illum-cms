import { graphcmsClient } from '@/lib/_client'
import { getHero } from '@/lib/_queries'

export default async (req, res) => {
  const client = graphcmsClient(false)

  try {
    const hero = await client.request(getHero, {
      id: "ckx0qccfcw1gu0b286jpxmpom"
    })

    const data = await hero

    return res.status(201).json({
      data: data,
      error: null
    });
  } catch {
    return res.status(400).json({
      error: `Oops, something went wrong for getting the data..`,
    });
  }
}