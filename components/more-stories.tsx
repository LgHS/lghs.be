import PostPreview from './post-preview'
import type Blog from '../interfaces/blog'
import type Equipement from '../interfaces/equipement'
import type Projet from '../interfaces/projet'

type Props = {
  posts: Blog[] | Equipement[] | Projet[]
  type: string
}

const MoreStories = ({ posts, type }: Props) => {
  return (
    <section className="container">
      <div className="columns">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            //date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            type={type}
          />
        ))}
      </div>
    </section>
  )
}

export default MoreStories
