import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function IndexPage({ page }) {
  //console.log("home page", page)
  return <Wrapper {...page} />
}

export async function getStaticProps({ locale, preview = false }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(pageQuery, {
    locale,
    slug: 'home'
  })

  const parsedPageData = await parsePageData(page)

  return {
    props: {
      page: parsedPageData,
      preview
    },
    revalidate: 30
  }
}

IndexPage.getLayout = getPageLayout
