import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getProjetsBySlug, getAllProjets } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type ProjetType from '../../interfaces/projet'

type Props = {
  projet: ProjetType
  preview?: boolean
}

export default function Projet({ projet, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !projet?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const title =  '${projet.title} | ${CMS_NAME}';
  return (
    <Layout preview={preview}>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
              <Head>
                <title>
                  {title}
                </title>
                <meta property="og:image" content={projet.ogImage.url} />
              </Head>
              <PostHeader
                title={projet.title}
                coverImage={projet.coverImage}
              />
              <PostBody content={projet.content} />
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
  const projet = getProjetsBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(projet.content || '')

  return {
    props: {
      projet: {
        ...projet,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const projets = getAllProjets(['slug'])

  return {
    paths: projets.map((projet) => {
      return {
        params: {
          slug: projet.slug,
        },
      }
    }),
    fallback: false,
  }
}
