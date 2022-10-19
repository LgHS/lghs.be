import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/container'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPagesBySlug } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import type PageType from '../interfaces/page'

type Props = {
  page: PageType
  preview?: boolean
}

export default function Contact({ page, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
  console.log(process.env.NEXTAUTH_URL)
  return (
    <Layout preview={preview}>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <Head>
              <meta property="og:image" content={page.ogImage.url} />
            </Head>
            <PostHeader
              title={page.title}
              coverImage={page.coverImage}
            />
            <PostBody content={page.content} />
          </>
        )}
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const page = getPagesBySlug("soutenir", [
    'title',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(page.content || '')

  return {
    props: {
      page: {
        ...page,
        content,
      },
    },
  }
}
