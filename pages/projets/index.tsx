import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllProjets } from '../../lib/api'
import Projet from '../../interfaces/projet'

type Props = {
  allProjets: Projet[]
}

export default function Index({ allProjets }: Props) {
  const morePosts = allProjets
  return (
    <>
      <Layout>
          {morePosts.length > 0 && <MoreStories posts={morePosts} type="projets" />}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allProjets = getAllProjets([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjets },
  }
}
