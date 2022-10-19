import Container from '../components/container'
import Layout from '../components/layout'
import { getAllBlog, getPagesBySlug } from '../lib/api'
import Post from '../interfaces/blog'
import Image from 'next/image'
import markdownToHtml from '../lib/markdownToHtml'
import PageType from '../interfaces/page'
import PostBody from '../components/post-body'


type Props = {
  page: PageType
  preview?: boolean
}

export default function Index({ page, preview }: Props) {
  return (
    <>
      <Layout>
        <PostBody content={page.content} />
        
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

export async function getStaticProps() {
  const page = getPagesBySlug("index", [
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
