import { useRouter } from 'next/router'
import ErrorPage from 'next/error'  
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'
import Layout from '../components/layout'
import { getPagesBySlug } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import type PageType from '../interfaces/page'
import dynamic from "next/dynamic"
import styles from '../components/map.module.css';

const Map = dynamic(() => import("../components/map"), { ssr:false })

type Props = {
  page: PageType
  preview?: boolean
}

const DEFAULT_CENTER = [50.64111328125, 5.589356899261475]

export default function Contact({ page, preview }: Props) { 
  const router = useRouter()
  if (!router.isFallback && !page?.slug) {
    return <ErrorPage statusCode={404} />
  }
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
            <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={15} />
            
            <PostBody content={page.content} />
          </>
        )}
    </Layout>
  )
}


export async function getStaticProps() {
  const page = getPagesBySlug("contact", [
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

