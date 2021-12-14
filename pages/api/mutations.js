import { graphcmsClient } from '@/lib/_client'
import { publishHero, unPublishHero } from '@/lib/_queries'



export default async (req, res) => {
  const { source, destination } = JSON.parse(req.body)
  try {

    if (source === "Blocks" && destination === "Layout") {

      const client = graphcmsClient(false)
      await client.request(publishHero, {
        id: "ckx0qccfcw1gu0b286jpxmpom"
      })
      return res.status(201).json({ origin: "blocks to layout", error: null });
    } else {

      const client = graphcmsClient(false)
      await client.request(unPublishHero, {
        id: "ckx0qccfcw1gu0b286jpxmpom"
      })
      return res.status(201).json({ origin: "layout to blocks", error: null });
    }

  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong..`,
    });
  }
};