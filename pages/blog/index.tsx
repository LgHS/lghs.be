import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import HeroPost from '../../components/hero-post'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllBlog } from '../../lib/api'
import Blog from '../../interfaces/blog'

type Props = {
  allBlog: Blog[]
}

export default function Index({ allBlog }: Props) {
  const heroPost = allBlog[0]
  const morePosts = allBlog.slice(1)
  return (
    <>
      <Layout>
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} type="blog" />}
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allBlog = getAllBlog([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allBlog },
  }
}
