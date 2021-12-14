import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { pageQuery } from '@/lib/_queries'
import { parsePageData } from '@/utils/_parsePageData'
import Wrapper from '@/components/wrapper'

export default function Page({ page }) {
  //console.log("NOT HOME PAGE", page)
  return <Wrapper {...page} />
}

export async function getServerSideProps({ locale, params, preview = false }) {
  const client = graphcmsClient(preview)

  const { page } = await client.request(pageQuery, {
    locale,
    slug: params.slug
  })

  if (!page) {
    return {
      notFound: true
    }
  }


  const parsedPageData = await parsePageData(page)


  return {
    props: {
      page: parsedPageData,
      preview
    }
  }
}

Page.getLayout = getPageLayout
