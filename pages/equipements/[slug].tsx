import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getEquipementsBySlug, getAllEquipements } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type EquipementType from '../../interfaces/equipement'

type Props = {
  equipement: EquipementType
  preview?: boolean
}

export default function Blog({ equipement, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !equipement?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const title =  '${projet.title} | ${CMS_NAME}';
  return (
    <Layout preview={preview}>
        {router.isFallback ? (
          <div>Chargement...</div>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {title}
                </title>
                <meta property="og:image" content={equipement.ogImage.url} />
              </Head>
              <PostHeader
                title={equipement.title}
                coverImage={equipement.coverImage}
              />
              <PostBody content={equipement.content} />
            </article>
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
  const equipement = getEquipementsBySlug(params.slug, [
    'title',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(equipement.content || '')

  return {
    props: {
      equipement: {
        ...equipement,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const equipements = getAllEquipements(['slug'])

  return {
    paths: equipements.map((equipement) => {
      return {
        params: {
          slug: equipement.slug,
        },
      }
    }),
    fallback: false,
  }
}
