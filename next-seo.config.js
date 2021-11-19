const description = `Notebooks as a service for LMS systems`
const title = `ILLUMIDESK`
const url = `https://illum-cms.netlify.app/`

const seo = {
  title,
  titleTemplate: '',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@Illumidesk',
    site: '@Illumidesk'
  }
}

export { seo as defaultSEO, url as defaultUrl }
