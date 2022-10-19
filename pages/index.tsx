import Container from '../components/container'
import Layout from '../components/layout'
import { getAllBlog } from '../lib/api'
import Post from '../interfaces/blog'
import Image from 'next/image'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <section className="section">
          <Container>
            <div className="row">
              <div className="columns">
                <div className="column is-8">
                  <h2 className="is-size-2">A propos</h2>
                  Un Hackerspace est un <strong>tiers-lieu</strong>, un espace où des gens avec un intérêt commun (souvent autour de l’informatique, de la technologie, des sciences, des arts…) peuvent <strong>se rencontrer et collaborer</strong>.
                  <br />Les Hackerspaces peuvent être vus comme des laboratoires communautaires ouverts où des gens (les hackers) peuvent partager ressources, savoirs,…
                </div>
                <div className="column is-4" style={{position: 'relative'}}>
                    <Image src="/img/minitel-open.jpeg" layout="fill" objectFit={'cover'}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="columns">
                <div className="column is-4" style={{position: 'relative'}}>
                  <Image src="/img/mainroom-min.jpeg" layout="fill" objectFit={'cover'}/>
                </div>
                <div className="column is-8">
                    <h4 className="is-size-4">Ce n’est pas un groupe de pirates informatiques</h4>
                  <p className="mb-2">
                    Le terme “hacker”, galvaudé en français, ne se réfère pas ici au “pirate informatique”.
                    Il s’agit plutôt d’un bidouilleur, d’une personne curieuse capable d’apprendre et partager
                    le savoir, de se poser des questions et de créer de nouvelles choses.
                  </p>
                    <h4 className="is-size-4">Ce n’est pas un FabLab</h4>
                  <p className="mb-2">
                    Ces dernières années, “FabLab” est devenu un terme fourre-tout, utilisé pour désigner aussi
                    bien des FabLabs, MakerSpaces, TechShops, HackerSpaces,… Flossmanuals résume très bien les
                    différences entres ces lieux
                  </p>
                    <h4 className="is-size-4">C’est un lieu indépendant</h4>
                  <p>
                    Le financement structurel provient uniquement des membres via les cotisations et de nos
                    différentes activités (workshops, événements, …).
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="section has-background-primary">
            <div className="container">
                <div className="is-vcentered columns is-multiline">
                    <div className="column is-6 is-5-desktop mb-4">
                        <span className="has-text-white">Lorem ipsum</span>
                        <h2 className="has-text-white mt-2 mb-3 is-size-1 is-size-3-mobile has-text-weight-bold">Lorem ipsum dolor sit amet consectutar</h2>
                        <p className="has-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
                    </div>
                    <div className="column is-5 ml-auto">
                        <div className="mx-auto box p-6 has-background-light has-text-centered">
                            <h4 className="is-size-5 mb-2 has-text-weight-bold">Join Our Mailing List!</h4>
                            <p className="has-text-grey-dark mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <form action="#">
                                <input className="input mb-3" type="email" placeholder="Type your e-mail"/>
                                <button className="button is-primary is-fullwidth">Action</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllBlog([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
