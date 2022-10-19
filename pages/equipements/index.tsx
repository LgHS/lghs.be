import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import Layout from '../../components/layout'
import { getAllEquipements } from '../../lib/api'
import Equipement from '../../interfaces/equipement'

type Props = {
  allEquipements: Equipement[]
}

export default function Index({ allEquipements }: Props) {
  const morePosts = allEquipements
  return (
    <>
      <Layout>
          {morePosts.length > 0 && <MoreStories posts={morePosts} type="equipements" />}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allEquipements = getAllEquipements([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allEquipements },
  }
}
