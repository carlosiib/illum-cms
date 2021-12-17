import { graphcmsClient } from '@/lib/_client'
import { publishHero, unPublishHero } from '@/lib/_queries'

// SET STAGE TO PUBLISH OR DRFAT FOR HERO BLOCK AT CMS
export default async (req, res) => {
  const { source, destination } = JSON.parse(req.body)
  const client = graphcmsClient(false)

  try {
    if (source === "Blocks" && destination === "Layout") {
      await client.request(publishHero, {
        id: "ckx0qccfcw1gu0b286jpxmpom"
      })

      return res.status(201).json({
        origin: "blocks to layout",
        stage: 'Published',
        error: null
      });
    } else {

      await client.request(unPublishHero, {
        id: "ckx0qccfcw1gu0b286jpxmpom"
      })

      return res.status(201).json({
        origin: "layout to blocks",
        stage: 'Draft',
        error: null
      });
    }

  } catch (error) {
    return res.status(400).json({
      error: `Oops, something went wrong..`,
    });
  }
};